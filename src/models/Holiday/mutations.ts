import { GraphQLBoolean, GraphQLNonNull, GraphQLList } from 'graphql'
import { Holiday } from './type'
import { AffectedRowsOutput } from '../types'
import {
  HolidayCreateInput,
  HolidayUpdateInput,
  HolidayWhereUniqueInput,
  HolidayWhereInput,
  HolidayUpdateManyMutationInput,
  HolidayCreateManyInput,
} from '../inputs'
import { AppContext } from '../../context'

export const holidayMutations = {
  createHoliday: {
    extensions: {
      model: 'Holiday',
      op: 'createOne',
      permType: 'CREATE',
    },
    type: new GraphQLNonNull(Holiday),
    args: {
      data: { type: new GraphQLNonNull(HolidayCreateInput) },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.holiday.create(args)
    },
  },
  updateHoliday: {
    extensions: {
      model: 'Holiday',
      op: 'updateOne',
      permType: 'UPDATE',
    },
    type: new GraphQLNonNull(Holiday),
    args: {
      where: { type: new GraphQLNonNull(HolidayWhereUniqueInput) },
      data: { type: new GraphQLNonNull(HolidayUpdateInput) },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.holiday.update(args)
    },
  },
  deleteHoliday: {
    extensions: {
      model: 'Holiday',
      op: 'deleteOne',
      permType: 'DELETE',
    },
    type: Holiday,
    args: {
      where: { type: new GraphQLNonNull(HolidayWhereUniqueInput) },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.holiday.delete(args)
    },
  },
  upsertHoliday: {
    extensions: {
      model: 'Holiday',
      op: 'upsertOne',
      permType: 'UPSERT',
    },
    type: new GraphQLNonNull(Holiday),
    args: {
      where: { type: new GraphQLNonNull(HolidayWhereUniqueInput) },
      create: { type: new GraphQLNonNull(HolidayCreateInput) },
      update: { type: new GraphQLNonNull(HolidayUpdateInput) },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.holiday.upsert(args)
    },
  },
  createHolidays: {
    extensions: {
      model: 'Holiday',
      op: 'createMany',
      permType: 'CREATE',
    },
    type: new GraphQLNonNull(AffectedRowsOutput),
    args: {
      data: {
        type: new GraphQLNonNull(
          new GraphQLList(new GraphQLNonNull(HolidayCreateManyInput)),
        ),
      },
      skipDuplicates: { type: GraphQLBoolean },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.holiday.createMany(args)
    },
  },
  updateHolidays: {
    extensions: {
      model: 'Holiday',
      op: 'updateMany',
      permType: 'UPDATE',
    },
    type: new GraphQLNonNull(AffectedRowsOutput),
    args: {
      where: { type: new GraphQLNonNull(HolidayWhereInput) },
      data: { type: new GraphQLNonNull(HolidayUpdateManyMutationInput) },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.holiday.updateMany(args)
    },
  },
  deleteHolidays: {
    extensions: {
      model: 'Holiday',
      op: 'deleteMany',
      permType: 'DELETE',
    },
    type: new GraphQLNonNull(AffectedRowsOutput),
    args: {
      where: { type: new GraphQLNonNull(HolidayWhereInput) },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.holiday.deleteMany(args)
    },
  },
}
