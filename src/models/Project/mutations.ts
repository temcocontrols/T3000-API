import { GraphQLBoolean, GraphQLNonNull, GraphQLList } from 'graphql'
import { Project } from './type'
import { AffectedRowsOutput } from '../types'
import {
  ProjectCreateInput,
  ProjectUpdateInput,
  ProjectWhereUniqueInput,
  ProjectWhereInput,
  ProjectUpdateManyMutationInput,
  ProjectCreateManyInput,
} from '../inputs'
import { AppContext } from '../../context'

export const projectMutations = {
  createProject: {
    extensions: {
      model: 'Project',
      op: 'createOne',
      permType: 'CREATE',
    },
    type: new GraphQLNonNull(Project),
    args: {
      data: { type: new GraphQLNonNull(ProjectCreateInput) },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.project.create(args)
    },
  },
  updateProject: {
    extensions: {
      model: 'Project',
      op: 'updateOne',
      permType: 'UPDATE',
    },
    type: new GraphQLNonNull(Project),
    args: {
      where: { type: new GraphQLNonNull(ProjectWhereUniqueInput) },
      data: { type: new GraphQLNonNull(ProjectUpdateInput) },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.project.update(args)
    },
  },
  deleteProject: {
    extensions: {
      model: 'Project',
      op: 'deleteOne',
      permType: 'DELETE',
    },
    type: Project,
    args: {
      where: { type: new GraphQLNonNull(ProjectWhereUniqueInput) },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.project.delete(args)
    },
  },
  upsertProject: {
    extensions: {
      model: 'Project',
      op: 'upsertOne',
      permType: 'UPSERT',
    },
    type: new GraphQLNonNull(Project),
    args: {
      where: { type: new GraphQLNonNull(ProjectWhereUniqueInput) },
      create: { type: new GraphQLNonNull(ProjectCreateInput) },
      update: { type: new GraphQLNonNull(ProjectUpdateInput) },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.project.upsert(args)
    },
  },
  createProjects: {
    extensions: {
      model: 'Project',
      op: 'createMany',
      permType: 'CREATE',
    },
    type: new GraphQLNonNull(AffectedRowsOutput),
    args: {
      data: {
        type: new GraphQLNonNull(
          new GraphQLList(new GraphQLNonNull(ProjectCreateManyInput)),
        ),
      },
      skipDuplicates: { type: GraphQLBoolean },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.project.createMany(args)
    },
  },
  updateProjects: {
    extensions: {
      model: 'Project',
      op: 'updateMany',
      permType: 'UPDATE',
    },
    type: new GraphQLNonNull(AffectedRowsOutput),
    args: {
      where: { type: new GraphQLNonNull(ProjectWhereInput) },
      data: { type: new GraphQLNonNull(ProjectUpdateManyMutationInput) },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.project.updateMany(args)
    },
  },
  deleteProjects: {
    extensions: {
      model: 'Project',
      op: 'deleteMany',
      permType: 'DELETE',
    },
    type: new GraphQLNonNull(AffectedRowsOutput),
    args: {
      where: { type: new GraphQLNonNull(ProjectWhereInput) },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.project.deleteMany(args)
    },
  },
}
