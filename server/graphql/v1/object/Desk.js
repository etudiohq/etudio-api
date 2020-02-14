import { GraphQLString, GraphQLObjectType, GraphQLNonNull, GraphQLBoolean } from 'graphql';

import models from '../../../models';

export const Desk = new GraphQLObjectType({
  name: 'Desk',
  description: 'This represents a notary desk',
  fields: () => {
    return {
      isApproved: {
        description: 'Returns whether this desk is approved',
        type: GraphQLBoolean,
        resolve(desk) {
          return true; // todo return desk.isApproved();
        }
      }
    }
  },
})
