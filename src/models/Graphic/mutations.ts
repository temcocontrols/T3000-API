import { GraphQLBoolean, GraphQLNonNull, GraphQLList } from 'graphql'
import { Graphic } from './type'
import { AffectedRowsOutput } from '../types'
import {
  GraphicCreateInput,
  GraphicUpdateInput,
  GraphicWhereUniqueInput,
  GraphicWhereInput,
  GraphicUpdateManyMutationInput,
  GraphicCreateManyInput,
} from '../inputs'
import { AppContext } from '../../context'

export const graphicMutations = {
  createGraphic: {
    extensions: {
      model: 'Graphic',
      op: 'createOne',
      permType: 'CREATE',
    },
    type: new GraphQLNonNull(Graphic),
    args: {
      data: { type: new GraphQLNonNull(GraphicCreateInput) },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.graphic.create(args)
    },
  },
  updateGraphic: {
    extensions: {
      model: 'Graphic',
      op: 'updateOne',
      permType: 'UPDATE',
    },
    type: new GraphQLNonNull(Graphic),
    args: {
      where: { type: new GraphQLNonNull(GraphicWhereUniqueInput) },
      data: { type: new GraphQLNonNull(GraphicUpdateInput) },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.graphic.update(args)
    },
  },
  deleteGraphic: {
    extensions: {
      model: 'Graphic',
      op: 'deleteOne',
      permType: 'DELETE',
    },
    type: Graphic,
    args: {
      where: { type: new GraphQLNonNull(GraphicWhereUniqueInput) },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.graphic.delete(args)
    },
  },
  upsertGraphic: {
    extensions: {
      model: 'Graphic',
      op: 'upsertOne',
      permType: 'UPSERT',
    },
    type: new GraphQLNonNull(Graphic),
    args: {
      where: { type: new GraphQLNonNull(GraphicWhereUniqueInput) },
      create: { type: new GraphQLNonNull(GraphicCreateInput) },
      update: { type: new GraphQLNonNull(GraphicUpdateInput) },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.graphic.upsert(args)
    },
  },
  createGraphics: {
    extensions: {
      model: 'Graphic',
      op: 'createMany',
      permType: 'CREATE',
    },
    type: new GraphQLNonNull(AffectedRowsOutput),
    args: {
      data: {
        type: new GraphQLNonNull(
          new GraphQLList(new GraphQLNonNull(GraphicCreateManyInput)),
        ),
      },
      skipDuplicates: { type: GraphQLBoolean },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.graphic.createMany(args)
    },
  },
  updateGraphics: {
    extensions: {
      model: 'Graphic',
      op: 'updateMany',
      permType: 'UPDATE',
    },
    type: new GraphQLNonNull(AffectedRowsOutput),
    args: {
      where: { type: new GraphQLNonNull(GraphicWhereInput) },
      data: { type: new GraphQLNonNull(GraphicUpdateManyMutationInput) },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.graphic.updateMany(args)
    },
  },
  deleteGraphics: {
    extensions: {
      model: 'Graphic',
      op: 'deleteMany',
      permType: 'DELETE',
    },
    type: new GraphQLNonNull(AffectedRowsOutput),
    args: {
      where: { type: new GraphQLNonNull(GraphicWhereInput) },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.graphic.deleteMany(args)
    },
  },
}
