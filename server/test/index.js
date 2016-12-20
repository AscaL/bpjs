process.env.NODE_ENV = 'testing';
// require babel require hook
require('babel-core/register');
// create reqlite instance
const ReqliteServer = require('reqlite');
const server = new ReqliteServer({silent: true});
// require and start main tests
const startTests = require('./main').default;
startTests(server);
