import { GraphQLNonNull, GraphQLObjectType } from 'graphql'
import { ScheduleTime } from './type'
import { ScheduleTimeWhereInput, EnumPermissionTypeFilter } from '../inputs'
import { SubscriptionAction } from '../enums'
import { subscribeFunction } from '../../common/subscribeFunc'
import { AppContext } from '../../context'

export const ScheduleTimeSubscription = new GraphQLObjectType({
  name: 'ScheduleTimeSubscription',
  fields: () => ({
    action: {
      type: new GraphQLNonNull(SubscriptionAction),
    },
    data: {
      type: new GraphQLNonNull(ScheduleTime),
    },
  }),
})
export const scheduleTimeSubscriptions = {
  scheduleTime: {
    extensions: {
      model: 'ScheduleTime',
      op: 'Subscription',
      permType: 'READ',
    },
    type: new GraphQLNonNull(ScheduleTimeSubscription),
    args: {
      where: { type: ScheduleTimeWhereInput },
      action: { type: EnumPermissionTypeFilter },
    },
    subscribe: subscribeFunction,
    resolve: async (root, args, ctx: AppContext) => {
      let data
      if (root.action === 'SCHEDULETIME_DELETED') {
        data = { id: root.id }
      } else {
        data = await ctx.prisma.scheduleTime.findUnique({
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
