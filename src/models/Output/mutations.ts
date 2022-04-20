import { GraphQLBoolean, GraphQLNonNull, GraphQLList } from 'graphql'
import { Output } from './type'
import { AffectedRowsOutput } from '../types'
import {
  OutputCreateInput,
  OutputUpdateInput,
  OutputWhereUniqueInput,
  OutputWhereInput,
  OutputUpdateManyMutationInput,
  OutputCreateManyInput,
} from '../inputs'
import { AppContext } from '../../context'

export const outputMutations = {
  createOutput: {
    extensions: {
      model: 'Output',
      op: 'createOne',
      permType: 'CREATE',
    },
    type: new GraphQLNonNull(Output),
    args: {
      data: { type: new GraphQLNonNull(OutputCreateInput) },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.output.create(args)
    },
  },
  updateOutput: {
    extensions: {
      model: 'Output',
      op: 'updateOne',
      permType: 'UPDATE',
    },
    type: new GraphQLNonNull(Output),
    args: {
      where: { type: new GraphQLNonNull(OutputWhereUniqueInput) },
      data: { type: new GraphQLNonNull(OutputUpdateInput) },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.output.update(args)
    },
  },
  deleteOutput: {
    extensions: {
      model: 'Output',
      op: 'deleteOne',
      permType: 'DELETE',
    },
    type: Output,
    args: {
      where: { type: new GraphQLNonNull(OutputWhereUniqueInput) },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.output.delete(args)
    },
  },
  upsertOutput: {
    extensions: {
      model: 'Output',
      op: 'upsertOne',
      permType: 'UPSERT',
    },
    type: new GraphQLNonNull(Output),
    args: {
      where: { type: new GraphQLNonNull(OutputWhereUniqueInput) },
      create: { type: new GraphQLNonNull(OutputCreateInput) },
      update: { type: new GraphQLNonNull(OutputUpdateInput) },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.output.upsert(args)
    },
  },
  createOutputs: {
    extensions: {
      model: 'Output',
      op: 'createMany',
      permType: 'CREATE',
    },
    type: new GraphQLNonNull(AffectedRowsOutput),
    args: {
      data: {
        type: new GraphQLNonNull(
          new GraphQLList(new GraphQLNonNull(OutputCreateManyInput)),
        ),
      },
      skipDuplicates: { type: GraphQLBoolean },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.output.createMany(args)
    },
  },
  updateOutputs: {
    extensions: {
      model: 'Output',
      op: 'updateMany',
      permType: 'UPDATE',
    },
    type: new GraphQLNonNull(AffectedRowsOutput),
    args: {
      where: { type: new GraphQLNonNull(OutputWhereInput) },
      data: { type: new GraphQLNonNull(OutputUpdateManyMutationInput) },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.output.updateMany(args)
    },
  },
  deleteOutputs: {
    extensions: {
      model: 'Output',
      op: 'deleteMany',
      permType: 'DELETE',
    },
    type: new GraphQLNonNull(AffectedRowsOutput),
    args: {
      where: { type: new GraphQLNonNull(OutputWhereInput) },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.output.deleteMany(args)
    },
  },
}
