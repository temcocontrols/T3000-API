import { GraphQLInt, GraphQLList, GraphQLNonNull } from 'graphql'
import { Pid, AggregatePid } from './type'
import {
  PidWhereUniqueInput,
  PidWhereInput,
  PidOrderByWithRelationInput,
} from '../inputs'
import { PidScalarFieldEnum } from '../enums'
import { AppContext } from '../../context'
export const pidQueries = {
  pid: {
    extensions: {
      model: 'Pid',
      op: 'findUnique',
      permType: 'READ',
    },
    type: Pid,
    args: {
      where: { type: new GraphQLNonNull(PidWhereUniqueInput) },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.pid.findUnique(args)
    },
  },
  pids: {
    extensions: {
      model: 'Pid',
      op: 'findMany',
      permType: 'READ',
    },
    type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(Pid))),
    args: {
      where: { type: PidWhereInput },
      orderBy: { type: new GraphQLList(PidOrderByWithRelationInput) },
      cursor: { type: PidWhereUniqueInput },
      skip: { type: GraphQLInt },
      take: { type: GraphQLInt },
      distinct: { type: new GraphQLList(PidScalarFieldEnum) },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.pid.findMany(args)
    },
  },
  pidFirst: {
    extensions: {
      model: 'Pid',
      op: 'findFirst',
      permType: 'READ',
    },
    type: Pid,
    args: {
      where: { type: PidWhereInput },
      orderBy: { type: new GraphQLList(PidOrderByWithRelationInput) },
      cursor: { type: PidWhereUniqueInput },
      skip: { type: GraphQLInt },
      take: { type: GraphQLInt },
      distinct: { type: new GraphQLList(PidScalarFieldEnum) },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.pid.findFirst(args)
    },
  },
  pidsCount: {
    extensions: {
      model: 'Pid',
      op: 'count',
      permType: 'READ',
    },
    type: new GraphQLNonNull(GraphQLInt),
    args: {
      where: { type: PidWhereInput },
      orderBy: { type: new GraphQLList(PidOrderByWithRelationInput) },
      cursor: { type: PidWhereUniqueInput },
      skip: { type: GraphQLInt },
      take: { type: GraphQLInt },
      distinct: { type: new GraphQLList(PidScalarFieldEnum) },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.pid.count(args)
    },
  },
  pidsAggregate: {
    extensions: {
      model: 'Pid',
      op: 'aggregate',
      permType: 'READ',
    },
    type: new GraphQLNonNull(AggregatePid),
    args: {
      where: { type: PidWhereInput },
      orderBy: { type: new GraphQLList(PidOrderByWithRelationInput) },
      cursor: { type: PidWhereUniqueInput },
      skip: { type: GraphQLInt },
      take: { type: GraphQLInt },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.pid.aggregate(args)
    },
  },
}
