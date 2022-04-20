import { GraphQLInt, GraphQLList, GraphQLNonNull } from 'graphql'
import { Schedule, AggregateSchedule } from './type'
import {
  ScheduleWhereUniqueInput,
  ScheduleWhereInput,
  ScheduleOrderByWithRelationInput,
} from '../inputs'
import { ScheduleScalarFieldEnum } from '../enums'
import { AppContext } from '../../context'
export const scheduleQueries = {
  schedule: {
    extensions: {
      model: 'Schedule',
      op: 'findUnique',
      permType: 'READ',
    },
    type: Schedule,
    args: {
      where: { type: new GraphQLNonNull(ScheduleWhereUniqueInput) },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.schedule.findUnique(args)
    },
  },
  schedules: {
    extensions: {
      model: 'Schedule',
      op: 'findMany',
      permType: 'READ',
    },
    type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(Schedule))),
    args: {
      where: { type: ScheduleWhereInput },
      orderBy: { type: new GraphQLList(ScheduleOrderByWithRelationInput) },
      cursor: { type: ScheduleWhereUniqueInput },
      skip: { type: GraphQLInt },
      take: { type: GraphQLInt },
      distinct: { type: new GraphQLList(ScheduleScalarFieldEnum) },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.schedule.findMany(args)
    },
  },
  scheduleFirst: {
    extensions: {
      model: 'Schedule',
      op: 'findFirst',
      permType: 'READ',
    },
    type: Schedule,
    args: {
      where: { type: ScheduleWhereInput },
      orderBy: { type: new GraphQLList(ScheduleOrderByWithRelationInput) },
      cursor: { type: ScheduleWhereUniqueInput },
      skip: { type: GraphQLInt },
      take: { type: GraphQLInt },
      distinct: { type: new GraphQLList(ScheduleScalarFieldEnum) },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.schedule.findFirst(args)
    },
  },
  schedulesCount: {
    extensions: {
      model: 'Schedule',
      op: 'count',
      permType: 'READ',
    },
    type: new GraphQLNonNull(GraphQLInt),
    args: {
      where: { type: ScheduleWhereInput },
      orderBy: { type: new GraphQLList(ScheduleOrderByWithRelationInput) },
      cursor: { type: ScheduleWhereUniqueInput },
      skip: { type: GraphQLInt },
      take: { type: GraphQLInt },
      distinct: { type: new GraphQLList(ScheduleScalarFieldEnum) },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.schedule.count(args)
    },
  },
  schedulesAggregate: {
    extensions: {
      model: 'Schedule',
      op: 'aggregate',
      permType: 'READ',
    },
    type: new GraphQLNonNull(AggregateSchedule),
    args: {
      where: { type: ScheduleWhereInput },
      orderBy: { type: new GraphQLList(ScheduleOrderByWithRelationInput) },
      cursor: { type: ScheduleWhereUniqueInput },
      skip: { type: GraphQLInt },
      take: { type: GraphQLInt },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.schedule.aggregate(args)
    },
  },
}
