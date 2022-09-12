module.exports = {
  content: [
    './node_modules/flowbite-react/**/*.js',

    './src/components/**/*.{ts,tsx,js,jsx}',
    './src/pages/**/*.{ts,tsx,js,jsx}',
  ],
  plugins: [require('flowbite/plugin')],
  theme: {
    extend: {},
  },
  variants: {},
};
