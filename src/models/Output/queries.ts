import { GraphQLInt, GraphQLList, GraphQLNonNull } from 'graphql'
import { Output, AggregateOutput } from './type'
import {
  OutputWhereUniqueInput,
  OutputWhereInput,
  OutputOrderByWithRelationInput,
} from '../inputs'
import { OutputScalarFieldEnum } from '../enums'
import { AppContext } from '../../context'
export const outputQueries = {
  output: {
    extensions: {
      model: 'Output',
      op: 'findUnique',
      permType: 'READ',
    },
    type: Output,
    args: {
      where: { type: new GraphQLNonNull(OutputWhereUniqueInput) },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.output.findUnique(args)
    },
  },
  outputs: {
    extensions: {
      model: 'Output',
      op: 'findMany',
      permType: 'READ',
    },
    type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(Output))),
    args: {
      where: { type: OutputWhereInput },
      orderBy: { type: new GraphQLList(OutputOrderByWithRelationInput) },
      cursor: { type: OutputWhereUniqueInput },
      skip: { type: GraphQLInt },
      take: { type: GraphQLInt },
      distinct: { type: new GraphQLList(OutputScalarFieldEnum) },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.output.findMany(args)
    },
  },
  outputFirst: {
    extensions: {
      model: 'Output',
      op: 'findFirst',
      permType: 'READ',
    },
    type: Output,
    args: {
      where: { type: OutputWhereInput },
      orderBy: { type: new GraphQLList(OutputOrderByWithRelationInput) },
      cursor: { type: OutputWhereUniqueInput },
      skip: { type: GraphQLInt },
      take: { type: GraphQLInt },
      distinct: { type: new GraphQLList(OutputScalarFieldEnum) },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.output.findFirst(args)
    },
  },
  outputsCount: {
    extensions: {
      model: 'Output',
      op: 'count',
      permType: 'READ',
    },
    type: new GraphQLNonNull(GraphQLInt),
    args: {
      where: { type: OutputWhereInput },
      orderBy: { type: new GraphQLList(OutputOrderByWithRelationInput) },
      cursor: { type: OutputWhereUniqueInput },
      skip: { type: GraphQLInt },
      take: { type: GraphQLInt },
      distinct: { type: new GraphQLList(OutputScalarFieldEnum) },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.output.count(args)
    },
  },
  outputsAggregate: {
    extensions: {
      model: 'Output',
      op: 'aggregate',
      permType: 'READ',
    },
    type: new GraphQLNonNull(AggregateOutput),
    args: {
      where: { type: OutputWhereInput },
      orderBy: { type: new GraphQLList(OutputOrderByWithRelationInput) },
      cursor: { type: OutputWhereUniqueInput },
      skip: { type: GraphQLInt },
      take: { type: GraphQLInt },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.output.aggregate(args)
    },
  },
}
