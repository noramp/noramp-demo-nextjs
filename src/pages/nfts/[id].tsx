import { Alert, Button } from 'flowbite-react';
import { GetServerSideProps } from 'next';
import { useCallback, useState } from 'react';
import toast from 'react-hot-toast';
import NftCard from '../../components/NftCard';
import NoRamp from '../../components/NoRamp';
import { createPriceForNft, fetchNft } from '../../lib/api';

const NftPage = ({ nft }) => {
  const [showForm, setShowForm] = useState(false);
  const [price, setPrice] = useState(null);
  const [error, setError] = useState('');

  const handleBuy = useCallback(async () => {
    try {
      const newPrice = await createPriceForNft(nft.id);
      setPrice(newPrice);
    } catch (e) {
      toast.error('Error creating price');
      setError('Error creating price');
    }
    setShowForm(true);
  }, [nft.id]);

  const renderContent = () => {
    if (error) {
      return (
        <Alert color="failure">
          <span>
            <span className="font-medium">Error:</span> {error}
          </span>
        </Alert>
      );
    }
    if (showForm) {
      return <NoRamp price={price} />;
    }
    return (
      <Button gradientDuoTone="cyanToBlue" onClick={handleBuy}>
        Buy
      </Button>
    );
  };

  return (
    <div className="container flex flex-col items-center justify-center gap-8 px-4 mx-auto md:flex-row">
      <div className="flex-1 w-11/12 max-w-xs md:max-w-md">
        <NftCard nft={nft} />
      </div>

      <div className="flex items-center justify-center flex-1">
        {renderContent()}
      </div>
    </div>
  );
};

export default NftPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.query.id as string;
  const nft = await fetchNft(id);

  return {
    props: {
      nft,
    },
  };
};
