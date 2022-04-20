import { GraphQLBoolean, GraphQLNonNull, GraphQLList } from 'graphql'
import { Pid } from './type'
import { AffectedRowsOutput } from '../types'
import {
  PidCreateInput,
  PidUpdateInput,
  PidWhereUniqueInput,
  PidWhereInput,
  PidUpdateManyMutationInput,
  PidCreateManyInput,
} from '../inputs'
import { AppContext } from '../../context'

export const pidMutations = {
  createPid: {
    extensions: {
      model: 'Pid',
      op: 'createOne',
      permType: 'CREATE',
    },
    type: new GraphQLNonNull(Pid),
    args: {
      data: { type: new GraphQLNonNull(PidCreateInput) },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.pid.create(args)
    },
  },
  updatePid: {
    extensions: {
      model: 'Pid',
      op: 'updateOne',
      permType: 'UPDATE',
    },
    type: new GraphQLNonNull(Pid),
    args: {
      where: { type: new GraphQLNonNull(PidWhereUniqueInput) },
      data: { type: new GraphQLNonNull(PidUpdateInput) },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.pid.update(args)
    },
  },
  deletePid: {
    extensions: {
      model: 'Pid',
      op: 'deleteOne',
      permType: 'DELETE',
    },
    type: Pid,
    args: {
      where: { type: new GraphQLNonNull(PidWhereUniqueInput) },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.pid.delete(args)
    },
  },
  upsertPid: {
    extensions: {
      model: 'Pid',
      op: 'upsertOne',
      permType: 'UPSERT',
    },
    type: new GraphQLNonNull(Pid),
    args: {
      where: { type: new GraphQLNonNull(PidWhereUniqueInput) },
      create: { type: new GraphQLNonNull(PidCreateInput) },
      update: { type: new GraphQLNonNull(PidUpdateInput) },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.pid.upsert(args)
    },
  },
  createPids: {
    extensions: {
      model: 'Pid',
      op: 'createMany',
      permType: 'CREATE',
    },
    type: new GraphQLNonNull(AffectedRowsOutput),
    args: {
      data: {
        type: new GraphQLNonNull(
          new GraphQLList(new GraphQLNonNull(PidCreateManyInput)),
        ),
      },
      skipDuplicates: { type: GraphQLBoolean },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.pid.createMany(args)
    },
  },
  updatePids: {
    extensions: {
      model: 'Pid',
      op: 'updateMany',
      permType: 'UPDATE',
    },
    type: new GraphQLNonNull(AffectedRowsOutput),
    args: {
      where: { type: new GraphQLNonNull(PidWhereInput) },
      data: { type: new GraphQLNonNull(PidUpdateManyMutationInput) },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.pid.updateMany(args)
    },
  },
  deletePids: {
    extensions: {
      model: 'Pid',
      op: 'deleteMany',
      permType: 'DELETE',
    },
    type: new GraphQLNonNull(AffectedRowsOutput),
    args: {
      where: { type: new GraphQLNonNull(PidWhereInput) },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.pid.deleteMany(args)
    },
  },
}
