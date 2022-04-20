import { GraphQLInt, GraphQLList, GraphQLNonNull } from 'graphql'
import { Input, AggregateInput } from './type'
import {
  InputWhereUniqueInput,
  InputWhereInput,
  InputOrderByWithRelationInput,
} from '../inputs'
import { InputScalarFieldEnum } from '../enums'
import { AppContext } from '../../context'
export const inputQueries = {
  input: {
    extensions: {
      model: 'Input',
      op: 'findUnique',
      permType: 'READ',
    },
    type: Input,
    args: {
      where: { type: new GraphQLNonNull(InputWhereUniqueInput) },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.input.findUnique(args)
    },
  },
  inputs: {
    extensions: {
      model: 'Input',
      op: 'findMany',
      permType: 'READ',
    },
    type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(Input))),
    args: {
      where: { type: InputWhereInput },
      orderBy: { type: new GraphQLList(InputOrderByWithRelationInput) },
      cursor: { type: InputWhereUniqueInput },
      skip: { type: GraphQLInt },
      take: { type: GraphQLInt },
      distinct: { type: new GraphQLList(InputScalarFieldEnum) },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.input.findMany(args)
    },
  },
  inputFirst: {
    extensions: {
      model: 'Input',
      op: 'findFirst',
      permType: 'READ',
    },
    type: Input,
    args: {
      where: { type: InputWhereInput },
      orderBy: { type: new GraphQLList(InputOrderByWithRelationInput) },
      cursor: { type: InputWhereUniqueInput },
      skip: { type: GraphQLInt },
      take: { type: GraphQLInt },
      distinct: { type: new GraphQLList(InputScalarFieldEnum) },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.input.findFirst(args)
    },
  },
  inputsCount: {
    extensions: {
      model: 'Input',
      op: 'count',
      permType: 'READ',
    },
    type: new GraphQLNonNull(GraphQLInt),
    args: {
      where: { type: InputWhereInput },
      orderBy: { type: new GraphQLList(InputOrderByWithRelationInput) },
      cursor: { type: InputWhereUniqueInput },
      skip: { type: GraphQLInt },
      take: { type: GraphQLInt },
      distinct: { type: new GraphQLList(InputScalarFieldEnum) },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.input.count(args)
    },
  },
  inputsAggregate: {
    extensions: {
      model: 'Input',
      op: 'aggregate',
      permType: 'READ',
    },
    type: new GraphQLNonNull(AggregateInput),
    args: {
      where: { type: InputWhereInput },
      orderBy: { type: new GraphQLList(InputOrderByWithRelationInput) },
      cursor: { type: InputWhereUniqueInput },
      skip: { type: GraphQLInt },
      take: { type: GraphQLInt },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.input.aggregate(args)
    },
  },
}
