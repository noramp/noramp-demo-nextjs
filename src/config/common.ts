export const API_KEY = process.env.API_KEY;

export const APP_ID = process.env.NEXT_PUBLIC_APP_ID;
export const TRIGGER_ID = process.env.NEXT_PUBLIC_TRIGGER_ID;
export const IS_MARKETPLACE = process.env.NEXT_PUBLIC_IS_MARKETPLACE || false;

const VERCEL_URL = process.env.NEXT_PUBLIC_VERCEL_URL ?? process.env.VERCEL_URL;
export const BASE_URL = `https://${VERCEL_URL}`;

// envs
export const API_URL = 'https://api-stage.noramp.io';
export const EMBED_BASE_URL = 'https://testnet.noramp.io';
