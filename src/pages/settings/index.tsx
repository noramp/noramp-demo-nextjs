import { Button } from 'flowbite-react';
import Link from 'next/link';
import React from 'react';
import { IS_MARKETPLACE } from '../../config/common';

const SettingsPage = () => {
  if (!IS_MARKETPLACE) {
    return null;
  }
  return (
    <div className="container">
      <h1 className="mb-10 text-3xl ">Settings</h1>
      <div className="flex justify-center w-full gap-10">
        <Link href="/settings/kyc">
          <Button size="xl" gradientDuoTone="cyanToBlue">
            KYC
          </Button>
        </Link>

        <Link href="/settings/payout">
          <Button size="xl" gradientDuoTone="cyanToBlue">
            Payout
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default SettingsPage;
