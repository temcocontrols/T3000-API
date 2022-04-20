import { GraphQLBoolean, GraphQLNonNull, GraphQLList } from 'graphql'
import { Device } from './type'
import { AffectedRowsOutput } from '../types'
import {
  DeviceCreateInput,
  DeviceUpdateInput,
  DeviceWhereUniqueInput,
  DeviceWhereInput,
  DeviceUpdateManyMutationInput,
  DeviceCreateManyInput,
} from '../inputs'
import { AppContext } from '../../context'

export const deviceMutations = {
  createDevice: {
    extensions: {
      model: 'Device',
      op: 'createOne',
      permType: 'CREATE',
    },
    type: new GraphQLNonNull(Device),
    args: {
      data: { type: new GraphQLNonNull(DeviceCreateInput) },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.device.create(args)
    },
  },
  updateDevice: {
    extensions: {
      model: 'Device',
      op: 'updateOne',
      permType: 'UPDATE',
    },
    type: new GraphQLNonNull(Device),
    args: {
      where: { type: new GraphQLNonNull(DeviceWhereUniqueInput) },
      data: { type: new GraphQLNonNull(DeviceUpdateInput) },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.device.update(args)
    },
  },
  deleteDevice: {
    extensions: {
      model: 'Device',
      op: 'deleteOne',
      permType: 'DELETE',
    },
    type: Device,
    args: {
      where: { type: new GraphQLNonNull(DeviceWhereUniqueInput) },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.device.delete(args)
    },
  },
  upsertDevice: {
    extensions: {
      model: 'Device',
      op: 'upsertOne',
      permType: 'UPSERT',
    },
    type: new GraphQLNonNull(Device),
    args: {
      where: { type: new GraphQLNonNull(DeviceWhereUniqueInput) },
      create: { type: new GraphQLNonNull(DeviceCreateInput) },
      update: { type: new GraphQLNonNull(DeviceUpdateInput) },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.device.upsert(args)
    },
  },
  createDevices: {
    extensions: {
      model: 'Device',
      op: 'createMany',
      permType: 'CREATE',
    },
    type: new GraphQLNonNull(AffectedRowsOutput),
    args: {
      data: {
        type: new GraphQLNonNull(
          new GraphQLList(new GraphQLNonNull(DeviceCreateManyInput)),
        ),
      },
      skipDuplicates: { type: GraphQLBoolean },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.device.createMany(args)
    },
  },
  updateDevices: {
    extensions: {
      model: 'Device',
      op: 'updateMany',
      permType: 'UPDATE',
    },
    type: new GraphQLNonNull(AffectedRowsOutput),
    args: {
      where: { type: new GraphQLNonNull(DeviceWhereInput) },
      data: { type: new GraphQLNonNull(DeviceUpdateManyMutationInput) },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.device.updateMany(args)
    },
  },
  deleteDevices: {
    extensions: {
      model: 'Device',
      op: 'deleteMany',
      permType: 'DELETE',
    },
    type: new GraphQLNonNull(AffectedRowsOutput),
    args: {
      where: { type: new GraphQLNonNull(DeviceWhereInput) },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.device.deleteMany(args)
    },
  },
}
