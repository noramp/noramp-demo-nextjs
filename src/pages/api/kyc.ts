import axios from 'axios';
import { API_KEY, API_URL, APP_ID } from '../../config/common';

const createKyc = async (appId: string, createKycDto) => {
  const response = await axios.post(`/apps/${appId}/kycs`, createKycDto, {
    baseURL: API_URL,
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  });

  return response.data;
};

const handler = async (req, res) => {
  const identifier = String(req.query.token);

  const b = Buffer.from(identifier, 'base64');
  const email = b.toString('ascii');

  try {
    const kyc = await createKyc(APP_ID, {
      identifier,
      email,
      country: 'US',
    });

    res.statusCode = 200;

    res.json(kyc.data);
  } catch (e) {
    res.statusCode = 500;

    res.json({ error: true, message: e.message });
    console.error(e.response);
  }

  res.end();
};

export default handler;
