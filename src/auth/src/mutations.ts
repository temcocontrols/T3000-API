import { GraphQLBoolean, GraphQLNonNull, GraphQLString } from 'graphql'

export const authMutations = {
  login: {
    extensions: { allowRoles: ['UNAUTHORIZED'] },
    type: new GraphQLNonNull(GraphQLBoolean),
    args: {
      access_key: { type: new GraphQLNonNull(GraphQLString) },
    },
    async resolve(_root, args, ctx) {
      if (args.access_key === process.env.ACCESS_KEY) {
        ctx.reply.setCookie('access_key', String(args.access_key), {
          path: '/',
          httpOnly: true,
          secure: true,
          sameSite: 'none',
          maxAge: 60 * 60 * 24 * 30, // 30 days
        })
        return true
      } else {
        return false
      }
    },
  },

  logout: {
    extensions: { preventRoles: ['UNAUTHORIZED'] },
    type: new GraphQLNonNull(GraphQLBoolean),
    async resolve(_root, args, ctx) {
      logout(ctx.reply)
      return true
    },
  },
}

function logout(reply) {
  reply.clearCookie('access_key', {
    path: '/',
    httpOnly: true,
    secure: true,
    sameSite: 'none',
  })
}
