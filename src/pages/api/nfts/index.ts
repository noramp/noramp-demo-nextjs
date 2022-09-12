import DATA from '../../../data/nfts.json';

function shuffle(array) {
  return array
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}

const handler = (req, res) => {
  res.statusCode = 200;

  const nfts = shuffle(DATA).slice(0, 20);
  res.json(nfts);
};

export default handler;
