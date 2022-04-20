import { GraphQLNonNull, GraphQLObjectType } from 'graphql'
import { Input } from './type'
import { InputWhereInput, EnumPermissionTypeFilter } from '../inputs'
import { SubscriptionAction } from '../enums'
import { subscribeFunction } from '../../common/subscribeFunc'
import { AppContext } from '../../context'

export const InputSubscription = new GraphQLObjectType({
  name: 'InputSubscription',
  fields: () => ({
    action: {
      type: new GraphQLNonNull(SubscriptionAction),
    },
    data: {
      type: new GraphQLNonNull(Input),
    },
  }),
})
export const inputSubscriptions = {
  input: {
    extensions: {
      model: 'Input',
      op: 'Subscription',
      permType: 'READ',
    },
    type: new GraphQLNonNull(InputSubscription),
    args: {
      where: { type: InputWhereInput },
      action: { type: EnumPermissionTypeFilter },
    },
    subscribe: subscribeFunction,
    resolve: async (root, args, ctx: AppContext) => {
      let data
      if (root.action === 'INPUT_DELETED') {
        data = { id: root.id }
      } else {
        data = await ctx.prisma.input.findUnique({
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
