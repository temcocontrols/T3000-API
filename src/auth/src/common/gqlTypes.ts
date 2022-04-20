import { GraphQLNonNull, GraphQLString, GraphQLObjectType } from 'graphql'

export const AuthPayloadUser = new GraphQLObjectType({
  name: 'AuthPayloadUser',
  fields: () => ({
    id: {
      type: GraphQLString,
    },
    role: {
      type: new GraphQLNonNull(GraphQLString),
    },
  }),
})
