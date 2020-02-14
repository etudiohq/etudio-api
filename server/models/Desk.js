import config from 'config';
import Promise from 'bluebird';
import debugLib from 'debug';
import fetch from 'isomorphic-fetch';
import moment from 'moment';
import {
  get,
  difference,
  differenceBy,
  uniqBy,
  pick,
  pickBy,
  sumBy,
  keys,
  omit,
  defaults,
  includes,
  isNull,
} from 'lodash';
import uuid from 'uuid/v4';
import { Op } from 'sequelize';

import CustomDataTypes from './DataTypes';

import logger from '../lib/logger';
import queries from '../lib/queries';
import { capitalize, flattenArray, getDomain, formatCurrency, cleanTags, md5, strip_tags } from '../lib/utils';

const debug = debugLib('models:Desk');

/**
 * Desk model
 */
export default function(Sequelize, DataTypes) {
  const { models } = Sequelize;

  const Desk = Sequelize.define(
    'Desk',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },

      name: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      paranoid: true,

      getterMethods: {
        info() {
          return {
            id: this.id,
            name: this.name
          }
        }
      },
    }
  );

  // Desk.schema('public');

  /**
   * Instance Methods
   */

  return Desk;
}
