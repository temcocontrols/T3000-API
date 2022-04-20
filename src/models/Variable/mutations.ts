import { GraphQLBoolean, GraphQLNonNull, GraphQLList } from 'graphql'
import { Variable } from './type'
import { AffectedRowsOutput } from '../types'
import {
  VariableCreateInput,
  VariableUpdateInput,
  VariableWhereUniqueInput,
  VariableWhereInput,
  VariableUpdateManyMutationInput,
  VariableCreateManyInput,
} from '../inputs'
import { AppContext } from '../../context'

export const variableMutations = {
  createVariable: {
    extensions: {
      model: 'Variable',
      op: 'createOne',
      permType: 'CREATE',
    },
    type: new GraphQLNonNull(Variable),
    args: {
      data: { type: new GraphQLNonNull(VariableCreateInput) },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.variable.create(args)
    },
  },
  updateVariable: {
    extensions: {
      model: 'Variable',
      op: 'updateOne',
      permType: 'UPDATE',
    },
    type: new GraphQLNonNull(Variable),
    args: {
      where: { type: new GraphQLNonNull(VariableWhereUniqueInput) },
      data: { type: new GraphQLNonNull(VariableUpdateInput) },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.variable.update(args)
    },
  },
  deleteVariable: {
    extensions: {
      model: 'Variable',
      op: 'deleteOne',
      permType: 'DELETE',
    },
    type: Variable,
    args: {
      where: { type: new GraphQLNonNull(VariableWhereUniqueInput) },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.variable.delete(args)
    },
  },
  upsertVariable: {
    extensions: {
      model: 'Variable',
      op: 'upsertOne',
      permType: 'UPSERT',
    },
    type: new GraphQLNonNull(Variable),
    args: {
      where: { type: new GraphQLNonNull(VariableWhereUniqueInput) },
      create: { type: new GraphQLNonNull(VariableCreateInput) },
      update: { type: new GraphQLNonNull(VariableUpdateInput) },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.variable.upsert(args)
    },
  },
  createVariables: {
    extensions: {
      model: 'Variable',
      op: 'createMany',
      permType: 'CREATE',
    },
    type: new GraphQLNonNull(AffectedRowsOutput),
    args: {
      data: {
        type: new GraphQLNonNull(
          new GraphQLList(new GraphQLNonNull(VariableCreateManyInput)),
        ),
      },
      skipDuplicates: { type: GraphQLBoolean },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.variable.createMany(args)
    },
  },
  updateVariables: {
    extensions: {
      model: 'Variable',
      op: 'updateMany',
      permType: 'UPDATE',
    },
    type: new GraphQLNonNull(AffectedRowsOutput),
    args: {
      where: { type: new GraphQLNonNull(VariableWhereInput) },
      data: { type: new GraphQLNonNull(VariableUpdateManyMutationInput) },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.variable.updateMany(args)
    },
  },
  deleteVariables: {
    extensions: {
      model: 'Variable',
      op: 'deleteMany',
      permType: 'DELETE',
    },
    type: new GraphQLNonNull(AffectedRowsOutput),
    args: {
      where: { type: new GraphQLNonNull(VariableWhereInput) },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.variable.deleteMany(args)
    },
  },
}
