import { GraphQLBoolean, GraphQLNonNull, GraphQLList } from 'graphql'
import { ScheduleTime } from './type'
import { AffectedRowsOutput } from '../types'
import {
  ScheduleTimeCreateInput,
  ScheduleTimeUpdateInput,
  ScheduleTimeWhereUniqueInput,
  ScheduleTimeWhereInput,
  ScheduleTimeUpdateManyMutationInput,
  ScheduleTimeCreateManyInput,
} from '../inputs'
import { AppContext } from '../../context'

export const scheduleTimeMutations = {
  createScheduleTime: {
    extensions: {
      model: 'ScheduleTime',
      op: 'createOne',
      permType: 'CREATE',
    },
    type: new GraphQLNonNull(ScheduleTime),
    args: {
      data: { type: new GraphQLNonNull(ScheduleTimeCreateInput) },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.scheduleTime.create(args)
    },
  },
  updateScheduleTime: {
    extensions: {
      model: 'ScheduleTime',
      op: 'updateOne',
      permType: 'UPDATE',
    },
    type: new GraphQLNonNull(ScheduleTime),
    args: {
      where: { type: new GraphQLNonNull(ScheduleTimeWhereUniqueInput) },
      data: { type: new GraphQLNonNull(ScheduleTimeUpdateInput) },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.scheduleTime.update(args)
    },
  },
  deleteScheduleTime: {
    extensions: {
      model: 'ScheduleTime',
      op: 'deleteOne',
      permType: 'DELETE',
    },
    type: ScheduleTime,
    args: {
      where: { type: new GraphQLNonNull(ScheduleTimeWhereUniqueInput) },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.scheduleTime.delete(args)
    },
  },
  upsertScheduleTime: {
    extensions: {
      model: 'ScheduleTime',
      op: 'upsertOne',
      permType: 'UPSERT',
    },
    type: new GraphQLNonNull(ScheduleTime),
    args: {
      where: { type: new GraphQLNonNull(ScheduleTimeWhereUniqueInput) },
      create: { type: new GraphQLNonNull(ScheduleTimeCreateInput) },
      update: { type: new GraphQLNonNull(ScheduleTimeUpdateInput) },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.scheduleTime.upsert(args)
    },
  },
  createScheduleTimes: {
    extensions: {
      model: 'ScheduleTime',
      op: 'createMany',
      permType: 'CREATE',
    },
    type: new GraphQLNonNull(AffectedRowsOutput),
    args: {
      data: {
        type: new GraphQLNonNull(
          new GraphQLList(new GraphQLNonNull(ScheduleTimeCreateManyInput)),
        ),
      },
      skipDuplicates: { type: GraphQLBoolean },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.scheduleTime.createMany(args)
    },
  },
  updateScheduleTimes: {
    extensions: {
      model: 'ScheduleTime',
      op: 'updateMany',
      permType: 'UPDATE',
    },
    type: new GraphQLNonNull(AffectedRowsOutput),
    args: {
      where: { type: new GraphQLNonNull(ScheduleTimeWhereInput) },
      data: { type: new GraphQLNonNull(ScheduleTimeUpdateManyMutationInput) },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.scheduleTime.updateMany(args)
    },
  },
  deleteScheduleTimes: {
    extensions: {
      model: 'ScheduleTime',
      op: 'deleteMany',
      permType: 'DELETE',
    },
    type: new GraphQLNonNull(AffectedRowsOutput),
    args: {
      where: { type: new GraphQLNonNull(ScheduleTimeWhereInput) },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.scheduleTime.deleteMany(args)
    },
  },
}
