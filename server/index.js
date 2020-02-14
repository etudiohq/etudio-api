import './env';

import os from 'os';
import config from 'config';
import express from 'express';

import routes from './routes';
import expressLib from './lib/express';
import logger from './lib/logger';

const app = express();

expressLib(app);

/**
 * Routes
 */

routes(app);

/**
 * Start server
 */
const server = app.listen(config.port, () => {
  const host = os.hostname();
  logger.info(
    'Etudio API listening at http://%s:%s in %s environment.\n',
    host,
    server.address().port,
    config.env,
  );
  if (config.maildev.server) {
    const maildev = require('./maildev');
    maildev.listen();
  }
});

server.timeout = 25000; // sets timeout to 25 seconds

export default app;

// const { ApolloServer } = require('apollo-server')
// const typeDefs = require('./schema')
// const resolvers = require('./resolvers')
// const models = require('../models')
//
// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
//   context: { models }
// })
//
// server
//   .listen()
//   .then(({ url }) => console.log('Server is running on localhost:4000'))
