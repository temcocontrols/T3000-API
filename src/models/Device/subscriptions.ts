import { GraphQLNonNull, GraphQLObjectType } from 'graphql'
import { Device } from './type'
import { DeviceWhereInput, EnumPermissionTypeFilter } from '../inputs'
import { SubscriptionAction } from '../enums'
import { subscribeFunction } from '../../common/subscribeFunc'
import { AppContext } from '../../context'

export const DeviceSubscription = new GraphQLObjectType({
  name: 'DeviceSubscription',
  fields: () => ({
    action: {
      type: new GraphQLNonNull(SubscriptionAction),
    },
    data: {
      type: new GraphQLNonNull(Device),
    },
  }),
})
export const deviceSubscriptions = {
  device: {
    extensions: {
      model: 'Device',
      op: 'Subscription',
      permType: 'READ',
    },
    type: new GraphQLNonNull(DeviceSubscription),
    args: {
      where: { type: DeviceWhereInput },
      action: { type: EnumPermissionTypeFilter },
    },
    subscribe: subscribeFunction,
    resolve: async (root, args, ctx: AppContext) => {
      let data
      if (root.action === 'DEVICE_DELETED') {
        data = { id: root.id }
      } else {
        data = await ctx.prisma.device.findUnique({
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
