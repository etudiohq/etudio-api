import serverStatus from 'express-server-status';
import GraphHTTP from 'express-graphql';
import config from 'config';

import { ApolloServer } from 'apollo-server-express';
import { formatError } from 'apollo-errors';
import { get } from 'lodash';

import errorHandler from './middleware/error_handler';

import logger from './lib/logger';

import graphqlSchemaV1 from './graphql/v1/schema';

export default app => {
  /**
   * Status
   */
  app.use('/status', serverStatus(app));

  /**
   * Extract GraphQL API Key
   */
  app.use('/graphql/:version/:apiKey?', (req, res, next) => {
    req.apiKey = req.params.apiKey;
    next();
  });

  const isDevelopment = config.env === 'development';

  const graphqlServerV1 = new ApolloServer({
    schema: graphqlSchemaV1,
    introspection: true,
    playground: isDevelopment,
    // Align with behavior from express-graphql
    context: ({ req }) => {
      return req;
    }
  });

  // app.use('/graphql/v1', graphqlServerV1);

  graphqlServerV1.applyMiddleware({ app, path: '/graphql' });

  /**
   * GraphQL default (v1)
   */
  // app.use('/graphql', graphqlServerV1);

  /**
   * Error handler
   */
  app.use(errorHandler);
}
