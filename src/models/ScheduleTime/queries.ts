import { GraphQLInt, GraphQLList, GraphQLNonNull } from 'graphql'
import { ScheduleTime, AggregateScheduleTime } from './type'
import {
  ScheduleTimeWhereUniqueInput,
  ScheduleTimeWhereInput,
  ScheduleTimeOrderByWithRelationInput,
} from '../inputs'
import { ScheduleTimeScalarFieldEnum } from '../enums'
import { AppContext } from '../../context'
export const scheduleTimeQueries = {
  scheduleTime: {
    extensions: {
      model: 'ScheduleTime',
      op: 'findUnique',
      permType: 'READ',
    },
    type: ScheduleTime,
    args: {
      where: { type: new GraphQLNonNull(ScheduleTimeWhereUniqueInput) },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.scheduleTime.findUnique(args)
    },
  },
  scheduleTimes: {
    extensions: {
      model: 'ScheduleTime',
      op: 'findMany',
      permType: 'READ',
    },
    type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(ScheduleTime))),
    args: {
      where: { type: ScheduleTimeWhereInput },
      orderBy: { type: new GraphQLList(ScheduleTimeOrderByWithRelationInput) },
      cursor: { type: ScheduleTimeWhereUniqueInput },
      skip: { type: GraphQLInt },
      take: { type: GraphQLInt },
      distinct: { type: new GraphQLList(ScheduleTimeScalarFieldEnum) },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.scheduleTime.findMany(args)
    },
  },
  scheduleTimeFirst: {
    extensions: {
      model: 'ScheduleTime',
      op: 'findFirst',
      permType: 'READ',
    },
    type: ScheduleTime,
    args: {
      where: { type: ScheduleTimeWhereInput },
      orderBy: { type: new GraphQLList(ScheduleTimeOrderByWithRelationInput) },
      cursor: { type: ScheduleTimeWhereUniqueInput },
      skip: { type: GraphQLInt },
      take: { type: GraphQLInt },
      distinct: { type: new GraphQLList(ScheduleTimeScalarFieldEnum) },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.scheduleTime.findFirst(args)
    },
  },
  scheduleTimesCount: {
    extensions: {
      model: 'ScheduleTime',
      op: 'count',
      permType: 'READ',
    },
    type: new GraphQLNonNull(GraphQLInt),
    args: {
      where: { type: ScheduleTimeWhereInput },
      orderBy: { type: new GraphQLList(ScheduleTimeOrderByWithRelationInput) },
      cursor: { type: ScheduleTimeWhereUniqueInput },
      skip: { type: GraphQLInt },
      take: { type: GraphQLInt },
      distinct: { type: new GraphQLList(ScheduleTimeScalarFieldEnum) },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.scheduleTime.count(args)
    },
  },
  scheduleTimesAggregate: {
    extensions: {
      model: 'ScheduleTime',
      op: 'aggregate',
      permType: 'READ',
    },
    type: new GraphQLNonNull(AggregateScheduleTime),
    args: {
      where: { type: ScheduleTimeWhereInput },
      orderBy: { type: new GraphQLList(ScheduleTimeOrderByWithRelationInput) },
      cursor: { type: ScheduleTimeWhereUniqueInput },
      skip: { type: GraphQLInt },
      take: { type: GraphQLInt },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.scheduleTime.aggregate(args)
    },
  },
}
