import { GraphQLInt, GraphQLList, GraphQLNonNull } from 'graphql'
import { Program, AggregateProgram } from './type'
import {
  ProgramWhereUniqueInput,
  ProgramWhereInput,
  ProgramOrderByWithRelationInput,
} from '../inputs'
import { ProgramScalarFieldEnum } from '../enums'
import { AppContext } from '../../context'
export const programQueries = {
  program: {
    extensions: {
      model: 'Program',
      op: 'findUnique',
      permType: 'READ',
    },
    type: Program,
    args: {
      where: { type: new GraphQLNonNull(ProgramWhereUniqueInput) },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.program.findUnique(args)
    },
  },
  programs: {
    extensions: {
      model: 'Program',
      op: 'findMany',
      permType: 'READ',
    },
    type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(Program))),
    args: {
      where: { type: ProgramWhereInput },
      orderBy: { type: new GraphQLList(ProgramOrderByWithRelationInput) },
      cursor: { type: ProgramWhereUniqueInput },
      skip: { type: GraphQLInt },
      take: { type: GraphQLInt },
      distinct: { type: new GraphQLList(ProgramScalarFieldEnum) },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.program.findMany(args)
    },
  },
  programFirst: {
    extensions: {
      model: 'Program',
      op: 'findFirst',
      permType: 'READ',
    },
    type: Program,
    args: {
      where: { type: ProgramWhereInput },
      orderBy: { type: new GraphQLList(ProgramOrderByWithRelationInput) },
      cursor: { type: ProgramWhereUniqueInput },
      skip: { type: GraphQLInt },
      take: { type: GraphQLInt },
      distinct: { type: new GraphQLList(ProgramScalarFieldEnum) },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.program.findFirst(args)
    },
  },
  programsCount: {
    extensions: {
      model: 'Program',
      op: 'count',
      permType: 'READ',
    },
    type: new GraphQLNonNull(GraphQLInt),
    args: {
      where: { type: ProgramWhereInput },
      orderBy: { type: new GraphQLList(ProgramOrderByWithRelationInput) },
      cursor: { type: ProgramWhereUniqueInput },
      skip: { type: GraphQLInt },
      take: { type: GraphQLInt },
      distinct: { type: new GraphQLList(ProgramScalarFieldEnum) },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.program.count(args)
    },
  },
  programsAggregate: {
    extensions: {
      model: 'Program',
      op: 'aggregate',
      permType: 'READ',
    },
    type: new GraphQLNonNull(AggregateProgram),
    args: {
      where: { type: ProgramWhereInput },
      orderBy: { type: new GraphQLList(ProgramOrderByWithRelationInput) },
      cursor: { type: ProgramWhereUniqueInput },
      skip: { type: GraphQLInt },
      take: { type: GraphQLInt },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.program.aggregate(args)
    },
  },
}
