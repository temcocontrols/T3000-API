import { GraphQLNonNull, GraphQLObjectType } from 'graphql'
import { Holiday } from './type'
import { HolidayWhereInput, EnumPermissionTypeFilter } from '../inputs'
import { SubscriptionAction } from '../enums'
import { subscribeFunction } from '../../common/subscribeFunc'
import { AppContext } from '../../context'

export const HolidaySubscription = new GraphQLObjectType({
  name: 'HolidaySubscription',
  fields: () => ({
    action: {
      type: new GraphQLNonNull(SubscriptionAction),
    },
    data: {
      type: new GraphQLNonNull(Holiday),
    },
  }),
})
export const holidaySubscriptions = {
  holiday: {
    extensions: {
      model: 'Holiday',
      op: 'Subscription',
      permType: 'READ',
    },
    type: new GraphQLNonNull(HolidaySubscription),
    args: {
      where: { type: HolidayWhereInput },
      action: { type: EnumPermissionTypeFilter },
    },
    subscribe: subscribeFunction,
    resolve: async (root, args, ctx: AppContext) => {
      let data
      if (root.action === 'HOLIDAY_DELETED') {
        data = { id: root.id }
      } else {
        data = await ctx.prisma.holiday.findUnique({
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
