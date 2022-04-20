import { GraphQLNonNull } from 'graphql'
import { AppContext } from '../../context'
import { AuthPayloadUser } from './common/gqlTypes'

export const authQueries = {
  me: {
    extensions: { preventRoles: ['UNAUTHORIZED'] },
    type: new GraphQLNonNull(AuthPayloadUser),
    async resolve(_root, args, ctx: AppContext) {
      return ctx.user
    },
  },
}
