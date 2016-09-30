import app from './app'

app.listen(8080, function() {
  const host = this.address().address;
  const port = this.address().port;
  console.log(`shard listening at http://${host}:${port}`);
});

process.on('uncaughtExcepion', err => console.log('err:', err));
process.on('unhandledRejection', err => console.log('err:', err));

