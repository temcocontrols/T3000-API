import { GraphQLBoolean, GraphQLNonNull, GraphQLList } from 'graphql'
import { Schedule } from './type'
import { AffectedRowsOutput } from '../types'
import {
  ScheduleCreateInput,
  ScheduleUpdateInput,
  ScheduleWhereUniqueInput,
  ScheduleWhereInput,
  ScheduleUpdateManyMutationInput,
  ScheduleCreateManyInput,
} from '../inputs'
import { AppContext } from '../../context'

export const scheduleMutations = {
  createSchedule: {
    extensions: {
      model: 'Schedule',
      op: 'createOne',
      permType: 'CREATE',
    },
    type: new GraphQLNonNull(Schedule),
    args: {
      data: { type: new GraphQLNonNull(ScheduleCreateInput) },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.schedule.create(args)
    },
  },
  updateSchedule: {
    extensions: {
      model: 'Schedule',
      op: 'updateOne',
      permType: 'UPDATE',
    },
    type: new GraphQLNonNull(Schedule),
    args: {
      where: { type: new GraphQLNonNull(ScheduleWhereUniqueInput) },
      data: { type: new GraphQLNonNull(ScheduleUpdateInput) },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.schedule.update(args)
    },
  },
  deleteSchedule: {
    extensions: {
      model: 'Schedule',
      op: 'deleteOne',
      permType: 'DELETE',
    },
    type: Schedule,
    args: {
      where: { type: new GraphQLNonNull(ScheduleWhereUniqueInput) },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.schedule.delete(args)
    },
  },
  upsertSchedule: {
    extensions: {
      model: 'Schedule',
      op: 'upsertOne',
      permType: 'UPSERT',
    },
    type: new GraphQLNonNull(Schedule),
    args: {
      where: { type: new GraphQLNonNull(ScheduleWhereUniqueInput) },
      create: { type: new GraphQLNonNull(ScheduleCreateInput) },
      update: { type: new GraphQLNonNull(ScheduleUpdateInput) },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.schedule.upsert(args)
    },
  },
  createSchedules: {
    extensions: {
      model: 'Schedule',
      op: 'createMany',
      permType: 'CREATE',
    },
    type: new GraphQLNonNull(AffectedRowsOutput),
    args: {
      data: {
        type: new GraphQLNonNull(
          new GraphQLList(new GraphQLNonNull(ScheduleCreateManyInput)),
        ),
      },
      skipDuplicates: { type: GraphQLBoolean },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.schedule.createMany(args)
    },
  },
  updateSchedules: {
    extensions: {
      model: 'Schedule',
      op: 'updateMany',
      permType: 'UPDATE',
    },
    type: new GraphQLNonNull(AffectedRowsOutput),
    args: {
      where: { type: new GraphQLNonNull(ScheduleWhereInput) },
      data: { type: new GraphQLNonNull(ScheduleUpdateManyMutationInput) },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.schedule.updateMany(args)
    },
  },
  deleteSchedules: {
    extensions: {
      model: 'Schedule',
      op: 'deleteMany',
      permType: 'DELETE',
    },
    type: new GraphQLNonNull(AffectedRowsOutput),
    args: {
      where: { type: new GraphQLNonNull(ScheduleWhereInput) },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.schedule.deleteMany(args)
    },
  },
}
