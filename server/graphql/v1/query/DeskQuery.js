import { GraphQLString, GraphQLBoolean } from 'graphql';

import { Desk } from '../object/Desk';
import models from '../../../models';
import { idDecode } from '../identifiers';
import { NotFound } from '../../errors';

const DeskQuery = {
  type: Desk,
  args: {
    id: {
      type: GraphQLString,
      description: 'The public id identifying the desk (ie: dqs9bnk8-0137xqry-eapvzeol-jpayw5re)',
    },
    throwIfMissing: {
      type: GraphQLBoolean,
      defaultValue: true,
      description: 'If false, will return null instead of an error if desk is not found',
    },
  },
  async resolve(_, args) {
    let desk;
    if (args.id) {
      const id = idDecode(args.id, 'account');
      collective = await models.Collective.findByPk(id);
    } else {
      return new Error('Please provide an id');
    }

    if (args.throwIfMissing && !desk) {
      throw new NotFound({ message: 'Desk Not Found' });
    }
    return desk;
  },
};

export default DeskQuery;
