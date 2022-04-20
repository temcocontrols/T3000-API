import { GraphQLNonNull, GraphQLObjectType } from 'graphql'
import { Graphic } from './type'
import { GraphicWhereInput, EnumPermissionTypeFilter } from '../inputs'
import { SubscriptionAction } from '../enums'
import { subscribeFunction } from '../../common/subscribeFunc'
import { AppContext } from '../../context'

export const GraphicSubscription = new GraphQLObjectType({
  name: 'GraphicSubscription',
  fields: () => ({
    action: {
      type: new GraphQLNonNull(SubscriptionAction),
    },
    data: {
      type: new GraphQLNonNull(Graphic),
    },
  }),
})
export const graphicSubscriptions = {
  graphic: {
    extensions: {
      model: 'Graphic',
      op: 'Subscription',
      permType: 'READ',
    },
    type: new GraphQLNonNull(GraphicSubscription),
    args: {
      where: { type: GraphicWhereInput },
      action: { type: EnumPermissionTypeFilter },
    },
    subscribe: subscribeFunction,
    resolve: async (root, args, ctx: AppContext) => {
      let data
      if (root.action === 'GRAPHIC_DELETED') {
        data = { id: root.id }
      } else {
        data = await ctx.prisma.graphic.findUnique({
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
