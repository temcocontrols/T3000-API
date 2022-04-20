import { GraphQLNonNull, GraphQLObjectType } from 'graphql'
import { Output } from './type'
import { OutputWhereInput, EnumPermissionTypeFilter } from '../inputs'
import { SubscriptionAction } from '../enums'
import { subscribeFunction } from '../../common/subscribeFunc'
import { AppContext } from '../../context'

export const OutputSubscription = new GraphQLObjectType({
  name: 'OutputSubscription',
  fields: () => ({
    action: {
      type: new GraphQLNonNull(SubscriptionAction),
    },
    data: {
      type: new GraphQLNonNull(Output),
    },
  }),
})
export const outputSubscriptions = {
  output: {
    extensions: {
      model: 'Output',
      op: 'Subscription',
      permType: 'READ',
    },
    type: new GraphQLNonNull(OutputSubscription),
    args: {
      where: { type: OutputWhereInput },
      action: { type: EnumPermissionTypeFilter },
    },
    subscribe: subscribeFunction,
    resolve: async (root, args, ctx: AppContext) => {
      let data
      if (root.action === 'OUTPUT_DELETED') {
        data = { id: root.id }
      } else {
        data = await ctx.prisma.output.findUnique({
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
