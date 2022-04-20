import { GraphQLBoolean, GraphQLNonNull, GraphQLList } from 'graphql'
import { Input } from './type'
import { AffectedRowsOutput } from '../types'
import {
  InputCreateInput,
  InputUpdateInput,
  InputWhereUniqueInput,
  InputWhereInput,
  InputUpdateManyMutationInput,
  InputCreateManyInput,
} from '../inputs'
import { AppContext } from '../../context'

export const inputMutations = {
  createInput: {
    extensions: {
      model: 'Input',
      op: 'createOne',
      permType: 'CREATE',
    },
    type: new GraphQLNonNull(Input),
    args: {
      data: { type: new GraphQLNonNull(InputCreateInput) },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.input.create(args)
    },
  },
  updateInput: {
    extensions: {
      model: 'Input',
      op: 'updateOne',
      permType: 'UPDATE',
    },
    type: new GraphQLNonNull(Input),
    args: {
      where: { type: new GraphQLNonNull(InputWhereUniqueInput) },
      data: { type: new GraphQLNonNull(InputUpdateInput) },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.input.update(args)
    },
  },
  deleteInput: {
    extensions: {
      model: 'Input',
      op: 'deleteOne',
      permType: 'DELETE',
    },
    type: Input,
    args: {
      where: { type: new GraphQLNonNull(InputWhereUniqueInput) },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.input.delete(args)
    },
  },
  upsertInput: {
    extensions: {
      model: 'Input',
      op: 'upsertOne',
      permType: 'UPSERT',
    },
    type: new GraphQLNonNull(Input),
    args: {
      where: { type: new GraphQLNonNull(InputWhereUniqueInput) },
      create: { type: new GraphQLNonNull(InputCreateInput) },
      update: { type: new GraphQLNonNull(InputUpdateInput) },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.input.upsert(args)
    },
  },
  createInputs: {
    extensions: {
      model: 'Input',
      op: 'createMany',
      permType: 'CREATE',
    },
    type: new GraphQLNonNull(AffectedRowsOutput),
    args: {
      data: {
        type: new GraphQLNonNull(
          new GraphQLList(new GraphQLNonNull(InputCreateManyInput)),
        ),
      },
      skipDuplicates: { type: GraphQLBoolean },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.input.createMany(args)
    },
  },
  updateInputs: {
    extensions: {
      model: 'Input',
      op: 'updateMany',
      permType: 'UPDATE',
    },
    type: new GraphQLNonNull(AffectedRowsOutput),
    args: {
      where: { type: new GraphQLNonNull(InputWhereInput) },
      data: { type: new GraphQLNonNull(InputUpdateManyMutationInput) },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.input.updateMany(args)
    },
  },
  deleteInputs: {
    extensions: {
      model: 'Input',
      op: 'deleteMany',
      permType: 'DELETE',
    },
    type: new GraphQLNonNull(AffectedRowsOutput),
    args: {
      where: { type: new GraphQLNonNull(InputWhereInput) },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.input.deleteMany(args)
    },
  },
}
