import { useQuery } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { EMBED_BASE_URL, IS_MARKETPLACE } from '../../config/common';
import { fetchKyc } from '../../lib/api';

const Kyc = () => {
  const { data } = useSession();
  const { data: kyc, isLoading } = useQuery(
    ['kyc'],
    async () => {
      return fetchKyc(data?.accessToken as string);
    },
    {
      enabled: !!data?.accessToken,
    }
  );

  if (!IS_MARKETPLACE) {
    return null;
  }

  if (isLoading) {
    return 'Loading...';
  }

  return (
    <div className="container mx-auto">
      <h1 className="mb-4 text-2xl">KYC</h1>
      <iframe
        src={`${EMBED_BASE_URL}/embed/kyc/${kyc?.edit_token}`}
        frameBorder="0"
        height="200"
        width="100%"
      />
    </div>
  );
};

export default Kyc;
