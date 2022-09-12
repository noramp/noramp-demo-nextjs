import { GetServerSideProps } from 'next';
import Link from 'next/link';
import NftCard from '../components/NftCard';
import { fetchNfts } from '../lib/api';

const Home = ({ nfts }) => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-4 gap-8">
        {nfts.map((nft) => (
          <Link href={`/nfts/${nft.id}`} key={nft.id}>
            <a>
              <NftCard nft={nft} />
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const nfts = await fetchNfts();

  return {
    props: {
      nfts,
    },
  };
};
