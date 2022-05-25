import { GraphQLBoolean, GraphQLNonNull, GraphQLString } from 'graphql'

export const authMutations = {
  login: {
    extensions: { allowRoles: ['UNAUTHORIZED'] },
    type: new GraphQLNonNull(GraphQLBoolean),
    args: {
      access_key: { type: new GraphQLNonNull(GraphQLString) },
    },
    async resolve(_root, args, _ctx) {
      if (args.access_key === process.env.ACCESS_KEY) {
        return true
      } else {
        return false
      }
    },
  },
}
