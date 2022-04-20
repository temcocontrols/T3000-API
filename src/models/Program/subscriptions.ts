import { GraphQLNonNull, GraphQLObjectType } from 'graphql'
import { Program } from './type'
import { ProgramWhereInput, EnumPermissionTypeFilter } from '../inputs'
import { SubscriptionAction } from '../enums'
import { subscribeFunction } from '../../common/subscribeFunc'
import { AppContext } from '../../context'

export const ProgramSubscription = new GraphQLObjectType({
  name: 'ProgramSubscription',
  fields: () => ({
    action: {
      type: new GraphQLNonNull(SubscriptionAction),
    },
    data: {
      type: new GraphQLNonNull(Program),
    },
  }),
})
export const programSubscriptions = {
  program: {
    extensions: {
      model: 'Program',
      op: 'Subscription',
      permType: 'READ',
    },
    type: new GraphQLNonNull(ProgramSubscription),
    args: {
      where: { type: ProgramWhereInput },
      action: { type: EnumPermissionTypeFilter },
    },
    subscribe: subscribeFunction,
    resolve: async (root, args, ctx: AppContext) => {
      let data
      if (root.action === 'PROGRAM_DELETED') {
        data = { id: root.id }
      } else {
        data = await ctx.prisma.program.findUnique({
          where: { id: root.id },
          select: args.select.data.select,
        })
      }
      const result = {
        data,
        action: root.action,
      }
      return result
    },
  },
}
