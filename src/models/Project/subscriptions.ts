import { GraphQLNonNull, GraphQLObjectType } from 'graphql'
import { Project } from './type'
import { ProjectWhereInput, EnumPermissionTypeFilter } from '../inputs'
import { SubscriptionAction } from '../enums'
import { subscribeFunction } from '../../common/subscribeFunc'
import { AppContext } from '../../context'

export const ProjectSubscription = new GraphQLObjectType({
  name: 'ProjectSubscription',
  fields: () => ({
    action: {
      type: new GraphQLNonNull(SubscriptionAction),
    },
    data: {
      type: new GraphQLNonNull(Project),
    },
  }),
})
export const projectSubscriptions = {
  project: {
    extensions: {
      model: 'Project',
      op: 'Subscription',
      permType: 'READ',
    },
    type: new GraphQLNonNull(ProjectSubscription),
    args: {
      where: { type: ProjectWhereInput },
      action: { type: EnumPermissionTypeFilter },
    },
    subscribe: subscribeFunction,
    resolve: async (root, args, ctx: AppContext) => {
      let data
      if (root.action === 'PROJECT_DELETED') {
        data = { id: root.id }
      } else {
        data = await ctx.prisma.project.findUnique({
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
