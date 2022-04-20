import { GraphQLNonNull, GraphQLObjectType } from 'graphql'
import { Pid } from './type'
import { PidWhereInput, EnumPermissionTypeFilter } from '../inputs'
import { SubscriptionAction } from '../enums'
import { subscribeFunction } from '../../common/subscribeFunc'
import { AppContext } from '../../context'

export const PidSubscription = new GraphQLObjectType({
  name: 'PidSubscription',
  fields: () => ({
    action: {
      type: new GraphQLNonNull(SubscriptionAction),
    },
    data: {
      type: new GraphQLNonNull(Pid),
    },
  }),
})
export const pidSubscriptions = {
  pid: {
    extensions: {
      model: 'Pid',
      op: 'Subscription',
      permType: 'READ',
    },
    type: new GraphQLNonNull(PidSubscription),
    args: {
      where: { type: PidWhereInput },
      action: { type: EnumPermissionTypeFilter },
    },
    subscribe: subscribeFunction,
    resolve: async (root, args, ctx: AppContext) => {
      let data
      if (root.action === 'PID_DELETED') {
        data = { id: root.id }
      } else {
        data = await ctx.prisma.pid.findUnique({
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
