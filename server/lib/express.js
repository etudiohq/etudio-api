import bodyParser from 'body-parser';
import config from 'config';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import errorHandler from 'errorhandler';
import helmet from 'helmet';
import morgan from 'morgan';
import passport from 'passport';
import session from 'express-session';

import { has, get } from 'lodash';

import logger from './logger';

export default function(app) {
  app.use(helmet());

  if (get(config, 'log.accessLogs')) {
    app.use(morgan('combined'));
  }
}
