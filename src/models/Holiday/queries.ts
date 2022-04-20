import { GraphQLInt, GraphQLList, GraphQLNonNull } from 'graphql'
import { Holiday, AggregateHoliday } from './type'
import {
  HolidayWhereUniqueInput,
  HolidayWhereInput,
  HolidayOrderByWithRelationInput,
} from '../inputs'
import { HolidayScalarFieldEnum } from '../enums'
import { AppContext } from '../../context'
export const holidayQueries = {
  holiday: {
    extensions: {
      model: 'Holiday',
      op: 'findUnique',
      permType: 'READ',
    },
    type: Holiday,
    args: {
      where: { type: new GraphQLNonNull(HolidayWhereUniqueInput) },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.holiday.findUnique(args)
    },
  },
  holidays: {
    extensions: {
      model: 'Holiday',
      op: 'findMany',
      permType: 'READ',
    },
    type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(Holiday))),
    args: {
      where: { type: HolidayWhereInput },
      orderBy: { type: new GraphQLList(HolidayOrderByWithRelationInput) },
      cursor: { type: HolidayWhereUniqueInput },
      skip: { type: GraphQLInt },
      take: { type: GraphQLInt },
      distinct: { type: new GraphQLList(HolidayScalarFieldEnum) },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.holiday.findMany(args)
    },
  },
  holidayFirst: {
    extensions: {
      model: 'Holiday',
      op: 'findFirst',
      permType: 'READ',
    },
    type: Holiday,
    args: {
      where: { type: HolidayWhereInput },
      orderBy: { type: new GraphQLList(HolidayOrderByWithRelationInput) },
      cursor: { type: HolidayWhereUniqueInput },
      skip: { type: GraphQLInt },
      take: { type: GraphQLInt },
      distinct: { type: new GraphQLList(HolidayScalarFieldEnum) },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.holiday.findFirst(args)
    },
  },
  holidaysCount: {
    extensions: {
      model: 'Holiday',
      op: 'count',
      permType: 'READ',
    },
    type: new GraphQLNonNull(GraphQLInt),
    args: {
      where: { type: HolidayWhereInput },
      orderBy: { type: new GraphQLList(HolidayOrderByWithRelationInput) },
      cursor: { type: HolidayWhereUniqueInput },
      skip: { type: GraphQLInt },
      take: { type: GraphQLInt },
      distinct: { type: new GraphQLList(HolidayScalarFieldEnum) },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.holiday.count(args)
    },
  },
  holidaysAggregate: {
    extensions: {
      model: 'Holiday',
      op: 'aggregate',
      permType: 'READ',
    },
    type: new GraphQLNonNull(AggregateHoliday),
    args: {
      where: { type: HolidayWhereInput },
      orderBy: { type: new GraphQLList(HolidayOrderByWithRelationInput) },
      cursor: { type: HolidayWhereUniqueInput },
      skip: { type: GraphQLInt },
      take: { type: GraphQLInt },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.holiday.aggregate(args)
    },
  },
}
