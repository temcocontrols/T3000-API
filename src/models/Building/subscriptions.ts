import { GraphQLNonNull, GraphQLObjectType } from 'graphql'
import { Building } from './type'
import { BuildingWhereInput, EnumPermissionTypeFilter } from '../inputs'
import { SubscriptionAction } from '../enums'
import { subscribeFunction } from '../../common/subscribeFunc'
import { AppContext } from '../../context'

export const BuildingSubscription = new GraphQLObjectType({
  name: 'BuildingSubscription',
  fields: () => ({
    action: {
      type: new GraphQLNonNull(SubscriptionAction),
    },
    data: {
      type: new GraphQLNonNull(Building),
    },
  }),
})
export const buildingSubscriptions = {
  building: {
    extensions: {
      model: 'Building',
      op: 'Subscription',
      permType: 'READ',
    },
    type: new GraphQLNonNull(BuildingSubscription),
    args: {
      where: { type: BuildingWhereInput },
      action: { type: EnumPermissionTypeFilter },
    },
    subscribe: subscribeFunction,
    resolve: async (root, args, ctx: AppContext) => {
      let data
      if (root.action === 'BUILDING_DELETED') {
        data = { id: root.id }
      } else {
        data = await ctx.prisma.building.findUnique({
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
