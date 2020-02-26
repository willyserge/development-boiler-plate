import express from 'express';
// import bodyParser from 'body-parser';

const app = express();

// app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.status(200).send('welcome to the api');
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('app is listening to port 4000');
});

export default app;
