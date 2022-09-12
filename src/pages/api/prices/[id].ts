import axios from 'axios';

import DATA from '../../../data/nfts.json';
import { API_KEY, API_URL, APP_ID, TRIGGER_ID } from '../../../config/common';

export const createPrice = async (appId: string, createPriceDto) => {
  const response = await axios.post(`/prices/${appId}`, createPriceDto, {
    baseURL: API_URL,
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  });

  return response.data;
};

const handler = async (req, res) => {
  const nft = DATA.find((n) => n.id == req.query.id);

  if (!nft) {
    res.statusCode = 404;

    return;
  }

  const newPrice = await createPrice(APP_ID, {
    amount: nft.price,
    trigger_id: TRIGGER_ID,
    trigger_data: {
      params_data: {
        token_id: '56',
        receiver_id: 'zo0r.testnet',
      },
    },
  });

  res.statusCode = 200;

  res.json(newPrice.data);
};

export default handler;
