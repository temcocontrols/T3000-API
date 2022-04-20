import { GraphQLInt, GraphQLList, GraphQLNonNull } from 'graphql'
import { Variable, AggregateVariable } from './type'
import {
  VariableWhereUniqueInput,
  VariableWhereInput,
  VariableOrderByWithRelationInput,
} from '../inputs'
import { VariableScalarFieldEnum } from '../enums'
import { AppContext } from '../../context'
export const variableQueries = {
  variable: {
    extensions: {
      model: 'Variable',
      op: 'findUnique',
      permType: 'READ',
    },
    type: Variable,
    args: {
      where: { type: new GraphQLNonNull(VariableWhereUniqueInput) },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.variable.findUnique(args)
    },
  },
  variables: {
    extensions: {
      model: 'Variable',
      op: 'findMany',
      permType: 'READ',
    },
    type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(Variable))),
    args: {
      where: { type: VariableWhereInput },
      orderBy: { type: new GraphQLList(VariableOrderByWithRelationInput) },
      cursor: { type: VariableWhereUniqueInput },
      skip: { type: GraphQLInt },
      take: { type: GraphQLInt },
      distinct: { type: new GraphQLList(VariableScalarFieldEnum) },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.variable.findMany(args)
    },
  },
  variableFirst: {
    extensions: {
      model: 'Variable',
      op: 'findFirst',
      permType: 'READ',
    },
    type: Variable,
    args: {
      where: { type: VariableWhereInput },
      orderBy: { type: new GraphQLList(VariableOrderByWithRelationInput) },
      cursor: { type: VariableWhereUniqueInput },
      skip: { type: GraphQLInt },
      take: { type: GraphQLInt },
      distinct: { type: new GraphQLList(VariableScalarFieldEnum) },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.variable.findFirst(args)
    },
  },
  variablesCount: {
    extensions: {
      model: 'Variable',
      op: 'count',
      permType: 'READ',
    },
    type: new GraphQLNonNull(GraphQLInt),
    args: {
      where: { type: VariableWhereInput },
      orderBy: { type: new GraphQLList(VariableOrderByWithRelationInput) },
      cursor: { type: VariableWhereUniqueInput },
      skip: { type: GraphQLInt },
      take: { type: GraphQLInt },
      distinct: { type: new GraphQLList(VariableScalarFieldEnum) },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.variable.count(args)
    },
  },
  variablesAggregate: {
    extensions: {
      model: 'Variable',
      op: 'aggregate',
      permType: 'READ',
    },
    type: new GraphQLNonNull(AggregateVariable),
    args: {
      where: { type: VariableWhereInput },
      orderBy: { type: new GraphQLList(VariableOrderByWithRelationInput) },
      cursor: { type: VariableWhereUniqueInput },
      skip: { type: GraphQLInt },
      take: { type: GraphQLInt },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.variable.aggregate(args)
    },
  },
}
