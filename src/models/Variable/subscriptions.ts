import { GraphQLNonNull, GraphQLObjectType } from 'graphql'
import { Variable } from './type'
import { VariableWhereInput, EnumPermissionTypeFilter } from '../inputs'
import { SubscriptionAction } from '../enums'
import { subscribeFunction } from '../../common/subscribeFunc'
import { AppContext } from '../../context'

export const VariableSubscription = new GraphQLObjectType({
  name: 'VariableSubscription',
  fields: () => ({
    action: {
      type: new GraphQLNonNull(SubscriptionAction),
    },
    data: {
      type: new GraphQLNonNull(Variable),
    },
  }),
})
export const variableSubscriptions = {
  variable: {
    extensions: {
      model: 'Variable',
      op: 'Subscription',
      permType: 'READ',
    },
    type: new GraphQLNonNull(VariableSubscription),
    args: {
      where: { type: VariableWhereInput },
      action: { type: EnumPermissionTypeFilter },
    },
    subscribe: subscribeFunction,
    resolve: async (root, args, ctx: AppContext) => {
      let data
      if (root.action === 'VARIABLE_DELETED') {
        data = { id: root.id }
      } else {
        data = await ctx.prisma.variable.findUnique({
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
