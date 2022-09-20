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

  return (
    <div className="flex flex-col items-center">
      <iframe
        src={`${EMBED_BASE_URL}/embed/payments/${APP_ID}?device=desktop&theme=dark&price_id=${price.id}`}
        frameBorder="0"
        height="180"
        width="450"
      />
      {success && <Celebrate />}
    </div>
  );
};

export default NoRamp;
