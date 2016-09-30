import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!!');
});

app.use((err, req, res) => {
  console.error(err.stack);
  res.status(500).send(err);
});

export default app;
