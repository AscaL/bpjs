import app from './app';
import { logger } from './util/logger';
import {thinky} from './db';

thinky.dbReady() .then(() => {
  logger.info('Database ready, starting server...');
  app.listen(8080, function () {
    const host = this.address().address;
    const port = this.address().port;
    logger.info(`Experts server is listening at http://${host}:${port}`);
  });
})

process.on('uncaughtExcepion', err => logger.error('uncaughtExcepion: ', err));
process.on('unhandledRejection', err => logger.error('unhandledRejection: ', err));

