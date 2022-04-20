import { GraphQLNonNull, GraphQLObjectType } from 'graphql'
import { Schedule } from './type'
import { ScheduleWhereInput, EnumPermissionTypeFilter } from '../inputs'
import { SubscriptionAction } from '../enums'
import { subscribeFunction } from '../../common/subscribeFunc'
import { AppContext } from '../../context'

export const ScheduleSubscription = new GraphQLObjectType({
  name: 'ScheduleSubscription',
  fields: () => ({
    action: {
      type: new GraphQLNonNull(SubscriptionAction),
    },
    data: {
      type: new GraphQLNonNull(Schedule),
    },
  }),
})
export const scheduleSubscriptions = {
  schedule: {
    extensions: {
      model: 'Schedule',
      op: 'Subscription',
      permType: 'READ',
    },
    type: new GraphQLNonNull(ScheduleSubscription),
    args: {
      where: { type: ScheduleWhereInput },
      action: { type: EnumPermissionTypeFilter },
    },
    subscribe: subscribeFunction,
    resolve: async (root, args, ctx: AppContext) => {
      let data
      if (root.action === 'SCHEDULE_DELETED') {
        data = { id: root.id }
      } else {
        data = await ctx.prisma.schedule.findUnique({
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
