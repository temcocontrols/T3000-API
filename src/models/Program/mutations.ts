import { GraphQLBoolean, GraphQLNonNull, GraphQLList } from 'graphql'
import { Program } from './type'
import { AffectedRowsOutput } from '../types'
import {
  ProgramCreateInput,
  ProgramUpdateInput,
  ProgramWhereUniqueInput,
  ProgramWhereInput,
  ProgramUpdateManyMutationInput,
  ProgramCreateManyInput,
} from '../inputs'
import { AppContext } from '../../context'

export const programMutations = {
  createProgram: {
    extensions: {
      model: 'Program',
      op: 'createOne',
      permType: 'CREATE',
    },
    type: new GraphQLNonNull(Program),
    args: {
      data: { type: new GraphQLNonNull(ProgramCreateInput) },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.program.create(args)
    },
  },
  updateProgram: {
    extensions: {
      model: 'Program',
      op: 'updateOne',
      permType: 'UPDATE',
    },
    type: new GraphQLNonNull(Program),
    args: {
      where: { type: new GraphQLNonNull(ProgramWhereUniqueInput) },
      data: { type: new GraphQLNonNull(ProgramUpdateInput) },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.program.update(args)
    },
  },
  deleteProgram: {
    extensions: {
      model: 'Program',
      op: 'deleteOne',
      permType: 'DELETE',
    },
    type: Program,
    args: {
      where: { type: new GraphQLNonNull(ProgramWhereUniqueInput) },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.program.delete(args)
    },
  },
  upsertProgram: {
    extensions: {
      model: 'Program',
      op: 'upsertOne',
      permType: 'UPSERT',
    },
    type: new GraphQLNonNull(Program),
    args: {
      where: { type: new GraphQLNonNull(ProgramWhereUniqueInput) },
      create: { type: new GraphQLNonNull(ProgramCreateInput) },
      update: { type: new GraphQLNonNull(ProgramUpdateInput) },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.program.upsert(args)
    },
  },
  createPrograms: {
    extensions: {
      model: 'Program',
      op: 'createMany',
      permType: 'CREATE',
    },
    type: new GraphQLNonNull(AffectedRowsOutput),
    args: {
      data: {
        type: new GraphQLNonNull(
          new GraphQLList(new GraphQLNonNull(ProgramCreateManyInput)),
        ),
      },
      skipDuplicates: { type: GraphQLBoolean },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.program.createMany(args)
    },
  },
  updatePrograms: {
    extensions: {
      model: 'Program',
      op: 'updateMany',
      permType: 'UPDATE',
    },
    type: new GraphQLNonNull(AffectedRowsOutput),
    args: {
      where: { type: new GraphQLNonNull(ProgramWhereInput) },
      data: { type: new GraphQLNonNull(ProgramUpdateManyMutationInput) },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.program.updateMany(args)
    },
  },
  deletePrograms: {
    extensions: {
      model: 'Program',
      op: 'deleteMany',
      permType: 'DELETE',
    },
    type: new GraphQLNonNull(AffectedRowsOutput),
    args: {
      where: { type: new GraphQLNonNull(ProgramWhereInput) },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.program.deleteMany(args)
    },
  },
}
