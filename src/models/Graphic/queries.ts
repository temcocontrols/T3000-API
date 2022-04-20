import { GraphQLInt, GraphQLList, GraphQLNonNull } from 'graphql'
import { Graphic, AggregateGraphic } from './type'
import {
  GraphicWhereUniqueInput,
  GraphicWhereInput,
  GraphicOrderByWithRelationInput,
} from '../inputs'
import { GraphicScalarFieldEnum } from '../enums'
import { AppContext } from '../../context'
export const graphicQueries = {
  graphic: {
    extensions: {
      model: 'Graphic',
      op: 'findUnique',
      permType: 'READ',
    },
    type: Graphic,
    args: {
      where: { type: new GraphQLNonNull(GraphicWhereUniqueInput) },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.graphic.findUnique(args)
    },
  },
  graphics: {
    extensions: {
      model: 'Graphic',
      op: 'findMany',
      permType: 'READ',
    },
    type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(Graphic))),
    args: {
      where: { type: GraphicWhereInput },
      orderBy: { type: new GraphQLList(GraphicOrderByWithRelationInput) },
      cursor: { type: GraphicWhereUniqueInput },
      skip: { type: GraphQLInt },
      take: { type: GraphQLInt },
      distinct: { type: new GraphQLList(GraphicScalarFieldEnum) },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.graphic.findMany(args)
    },
  },
  graphicFirst: {
    extensions: {
      model: 'Graphic',
      op: 'findFirst',
      permType: 'READ',
    },
    type: Graphic,
    args: {
      where: { type: GraphicWhereInput },
      orderBy: { type: new GraphQLList(GraphicOrderByWithRelationInput) },
      cursor: { type: GraphicWhereUniqueInput },
      skip: { type: GraphQLInt },
      take: { type: GraphQLInt },
      distinct: { type: new GraphQLList(GraphicScalarFieldEnum) },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.graphic.findFirst(args)
    },
  },
  graphicsCount: {
    extensions: {
      model: 'Graphic',
      op: 'count',
      permType: 'READ',
    },
    type: new GraphQLNonNull(GraphQLInt),
    args: {
      where: { type: GraphicWhereInput },
      orderBy: { type: new GraphQLList(GraphicOrderByWithRelationInput) },
      cursor: { type: GraphicWhereUniqueInput },
      skip: { type: GraphQLInt },
      take: { type: GraphQLInt },
      distinct: { type: new GraphQLList(GraphicScalarFieldEnum) },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.graphic.count(args)
    },
  },
  graphicsAggregate: {
    extensions: {
      model: 'Graphic',
      op: 'aggregate',
      permType: 'READ',
    },
    type: new GraphQLNonNull(AggregateGraphic),
    args: {
      where: { type: GraphicWhereInput },
      orderBy: { type: new GraphQLList(GraphicOrderByWithRelationInput) },
      cursor: { type: GraphicWhereUniqueInput },
      skip: { type: GraphQLInt },
      take: { type: GraphQLInt },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.graphic.aggregate(args)
    },
  },
}
