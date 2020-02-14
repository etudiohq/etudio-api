import debug from 'debug';
import dotenv from 'dotenv';
import { has, get } from 'lodash';

if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = 'development';
}

dotenv.config();
debug.enable(process.env.DEBUG);

const pgUrlEnvironmentVariable = get(process.env, 'PG_URL_ENVIRONMENT_VARIABLE', 'DATABASE_URL');
if (has(process.env, pgUrlEnvironmentVariable) && !has(process.env, 'PG_URL')) {
  process.env.PG_URL = get(process.env, pgUrlEnvironmentVariable);
}
