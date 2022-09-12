import { useEffect, useState } from 'react';
import { APP_ID, EMBED_BASE_URL } from '../config/common';
import Celebrate from './Celebrate';

const NoRamp = ({ price }) => {
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    window.addEventListener('message', (event) => {
      if (event.origin !== EMBED_BASE_URL) {
        return;
      }

      if (event.data.event === 'noramp:onPayment') {
        setSuccess(event.data?.detail?.type === 'finished');
      }
    });
  }, []);

  if (!price) return <div>Loading...</div>;

  const renderContent = () => {
    if (success) {
      return (
        <>
          <div
            className="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800"
            role="alert"
          >
            <span className="font-medium">Payment successful</span>
          </div>

          <Celebrate />
        </>
      );
    }

    return (
      <iframe
        src={`${EMBED_BASE_URL}/embed/payments/${APP_ID}?device=desktop&theme=light&price_id=${price.id}`}
        frameBorder="0"
        height="140"
        width="450"
      />
    );
  };

  return <div className="flex flex-col items-center">{renderContent()}</div>;
};

export default NoRamp;
