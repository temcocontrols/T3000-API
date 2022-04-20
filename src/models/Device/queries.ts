import { GraphQLInt, GraphQLList, GraphQLNonNull } from 'graphql'
import { Device, AggregateDevice } from './type'
import {
  DeviceWhereUniqueInput,
  DeviceWhereInput,
  DeviceOrderByWithRelationInput,
} from '../inputs'
import { DeviceScalarFieldEnum } from '../enums'
import { AppContext } from '../../context'
export const deviceQueries = {
  device: {
    extensions: {
      model: 'Device',
      op: 'findUnique',
      permType: 'READ',
    },
    type: Device,
    args: {
      where: { type: new GraphQLNonNull(DeviceWhereUniqueInput) },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.device.findUnique(args)
    },
  },
  devices: {
    extensions: {
      model: 'Device',
      op: 'findMany',
      permType: 'READ',
    },
    type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(Device))),
    args: {
      where: { type: DeviceWhereInput },
      orderBy: { type: new GraphQLList(DeviceOrderByWithRelationInput) },
      cursor: { type: DeviceWhereUniqueInput },
      skip: { type: GraphQLInt },
      take: { type: GraphQLInt },
      distinct: { type: new GraphQLList(DeviceScalarFieldEnum) },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.device.findMany(args)
    },
  },
  deviceFirst: {
    extensions: {
      model: 'Device',
      op: 'findFirst',
      permType: 'READ',
    },
    type: Device,
    args: {
      where: { type: DeviceWhereInput },
      orderBy: { type: new GraphQLList(DeviceOrderByWithRelationInput) },
      cursor: { type: DeviceWhereUniqueInput },
      skip: { type: GraphQLInt },
      take: { type: GraphQLInt },
      distinct: { type: new GraphQLList(DeviceScalarFieldEnum) },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.device.findFirst(args)
    },
  },
  devicesCount: {
    extensions: {
      model: 'Device',
      op: 'count',
      permType: 'READ',
    },
    type: new GraphQLNonNull(GraphQLInt),
    args: {
      where: { type: DeviceWhereInput },
      orderBy: { type: new GraphQLList(DeviceOrderByWithRelationInput) },
      cursor: { type: DeviceWhereUniqueInput },
      skip: { type: GraphQLInt },
      take: { type: GraphQLInt },
      distinct: { type: new GraphQLList(DeviceScalarFieldEnum) },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.device.count(args)
    },
  },
  devicesAggregate: {
    extensions: {
      model: 'Device',
      op: 'aggregate',
      permType: 'READ',
    },
    type: new GraphQLNonNull(AggregateDevice),
    args: {
      where: { type: DeviceWhereInput },
      orderBy: { type: new GraphQLList(DeviceOrderByWithRelationInput) },
      cursor: { type: DeviceWhereUniqueInput },
      skip: { type: GraphQLInt },
      take: { type: GraphQLInt },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.device.aggregate(args)
    },
  },
}
