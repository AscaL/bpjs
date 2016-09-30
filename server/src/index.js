import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!!');
});

app.use((err, req, res) => {
  console.error(err.stack);
  res.status(500).send(err);
});

app.listen(8080, function() {
  const host = this.address().address;
  const port = this.address().port;
  console.log(`shard listening at http://${host}:${port}`);
});

process.on('uncaughtExcepion', err => console.log('err:', err));
process.on('unhandledRejection', err => console.log('err:', err));

