import { GraphQLInt, GraphQLList, GraphQLNonNull } from 'graphql'
import { Project, AggregateProject } from './type'
import {
  ProjectWhereUniqueInput,
  ProjectWhereInput,
  ProjectOrderByWithRelationInput,
} from '../inputs'
import { ProjectScalarFieldEnum } from '../enums'
import { AppContext } from '../../context'
export const projectQueries = {
  project: {
    extensions: {
      model: 'Project',
      op: 'findUnique',
      permType: 'READ',
    },
    type: Project,
    args: {
      where: { type: new GraphQLNonNull(ProjectWhereUniqueInput) },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.project.findUnique(args)
    },
  },
  projects: {
    extensions: {
      model: 'Project',
      op: 'findMany',
      permType: 'READ',
    },
    type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(Project))),
    args: {
      where: { type: ProjectWhereInput },
      orderBy: { type: new GraphQLList(ProjectOrderByWithRelationInput) },
      cursor: { type: ProjectWhereUniqueInput },
      skip: { type: GraphQLInt },
      take: { type: GraphQLInt },
      distinct: { type: new GraphQLList(ProjectScalarFieldEnum) },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.project.findMany(args)
    },
  },
  projectFirst: {
    extensions: {
      model: 'Project',
      op: 'findFirst',
      permType: 'READ',
    },
    type: Project,
    args: {
      where: { type: ProjectWhereInput },
      orderBy: { type: new GraphQLList(ProjectOrderByWithRelationInput) },
      cursor: { type: ProjectWhereUniqueInput },
      skip: { type: GraphQLInt },
      take: { type: GraphQLInt },
      distinct: { type: new GraphQLList(ProjectScalarFieldEnum) },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.project.findFirst(args)
    },
  },
  projectsCount: {
    extensions: {
      model: 'Project',
      op: 'count',
      permType: 'READ',
    },
    type: new GraphQLNonNull(GraphQLInt),
    args: {
      where: { type: ProjectWhereInput },
      orderBy: { type: new GraphQLList(ProjectOrderByWithRelationInput) },
      cursor: { type: ProjectWhereUniqueInput },
      skip: { type: GraphQLInt },
      take: { type: GraphQLInt },
      distinct: { type: new GraphQLList(ProjectScalarFieldEnum) },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.project.count(args)
    },
  },
  projectsAggregate: {
    extensions: {
      model: 'Project',
      op: 'aggregate',
      permType: 'READ',
    },
    type: new GraphQLNonNull(AggregateProject),
    args: {
      where: { type: ProjectWhereInput },
      orderBy: { type: new GraphQLList(ProjectOrderByWithRelationInput) },
      cursor: { type: ProjectWhereUniqueInput },
      skip: { type: GraphQLInt },
      take: { type: GraphQLInt },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.project.aggregate(args)
    },
  },
}
