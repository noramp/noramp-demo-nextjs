# NoRamp Next.js demo

## Getting Started

Install dependencies:

```bash
npm install
# or
yarn install
```

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3001](http://localhost:3001) with your browser to see the result.

## Deploy on Vercel

Once you have the project running locally you can [import](https://vercel.com/import/git) your project to Vercel and get it up and running in a few clicks.

Other option is to click on the button below to create a new repository that look exactly like this one, and sets it up and running on Vercel.

[![Deploy to Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/noramp/noramp-demo-nextjs/tree/main)

Check out [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Setup env variables

To setup env variables on vercel you can folllow this guide: https://vercel.com/docs/concepts/projects/environment-variables

Setup the following variables

`API_KEY={YOUR_API_KEY}`

> Copy from https://testnet.noramp.io/settings/api-key

`NEXT_PUBLIC_APP_ID={YOUR_APP_ID}`

> Copy from https://testnet.noramp.io/apps/dashboard

`TRIGGER_ID={YOUR_TRIGGER_ID}`

> Create and copy the id from https://testnet.noramp.io/apps/triggers

`TRIGGER_DATA={YOUR_TRIGGER_DATA}`

> Example: {"params_data":{"token_id":"56","receiver_id":"zo0r.testnet"}}

`NEXT_PUBLIC_IS_MARKETPLACE=true|false`

> Is your app a marketplace? `false` by default
