import {
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean,
  GraphQLFloat,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
} from 'graphql'
import { GraphQLDateTime, GraphQLJSON } from 'graphql-scalars'
import { Device, Project } from '../types'
import { BuildingProtocol, DeviceScalarFieldEnum } from '../enums'
import {
  DeviceOrderByWithRelationInput,
  DeviceWhereInput,
  DeviceWhereUniqueInput,
} from '../inputs'

export const Building = new GraphQLObjectType({
  name: 'Building',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLInt),
    },
    title: {
      type: new GraphQLNonNull(GraphQLString),
    },
    protocol: {
      type: BuildingProtocol,
    },
    ip: {
      type: GraphQLString,
    },
    modbusTcpPort: {
      type: GraphQLString,
    },
    comPort: {
      type: GraphQLString,
    },
    baudRate: {
      type: GraphQLInt,
    },
    country: {
      type: GraphQLString,
    },
    state: {
      type: GraphQLString,
    },
    city: {
      type: GraphQLString,
    },
    street: {
      type: GraphQLString,
    },
    zip: {
      type: GraphQLString,
    },
    engineering: {
      type: new GraphQLNonNull(GraphQLString),
    },
    devices: {
      type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(Device))),
      args: {
        where: { type: DeviceWhereInput },
        orderBy: { type: DeviceOrderByWithRelationInput },
        cursor: { type: DeviceWhereUniqueInput },
        take: { type: GraphQLInt },
        skip: { type: GraphQLInt },
        distinct: {
          type: new GraphQLList(new GraphQLNonNull(DeviceScalarFieldEnum)),
        },
      },
    },
    createdAt: {
      type: new GraphQLNonNull(GraphQLDateTime),
    },
    updatedAt: {
      type: new GraphQLNonNull(GraphQLDateTime),
    },
    Project: {
      type: new GraphQLNonNull(Project),
    },
    projectId: {
      type: new GraphQLNonNull(GraphQLString),
    },

    _count: {
      type: BuildingCountOutputType,
    },
  }),
})

export const AggregateBuilding = new GraphQLObjectType({
  name: 'AggregateBuilding',
  fields: () => ({
    _count: { type: BuildingCountAggregateOutputType },
    _avg: { type: BuildingAvgAggregateOutputType },
    _sum: { type: BuildingSumAggregateOutputType },
    _min: { type: BuildingMinAggregateOutputType },
    _max: { type: BuildingMaxAggregateOutputType },
  }),
})

export const BuildingGroupByOutputType = new GraphQLObjectType({
  name: 'BuildingGroupByOutputType',
  fields: () => ({
    id: { type: GraphQLInt },
    title: { type: GraphQLString },
    protocol: { type: BuildingProtocol },
    ip: { type: GraphQLString },
    modbusTcpPort: { type: GraphQLString },
    comPort: { type: GraphQLString },
    baudRate: { type: GraphQLInt },
    country: { type: GraphQLString },
    state: { type: GraphQLString },
    city: { type: GraphQLString },
    street: { type: GraphQLString },
    zip: { type: GraphQLString },
    engineering: { type: GraphQLString },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
    projectId: { type: GraphQLString },
    _count: { type: BuildingCountAggregateOutputType },
    _avg: { type: BuildingAvgAggregateOutputType },
    _sum: { type: BuildingSumAggregateOutputType },
    _min: { type: BuildingMinAggregateOutputType },
    _max: { type: BuildingMaxAggregateOutputType },
  }),
})

export const BuildingCountOutputType = new GraphQLObjectType({
  name: 'BuildingCountOutputType',
  fields: () => ({
    devices: { type: GraphQLInt },
  }),
})

export const BuildingCountAggregateOutputType = new GraphQLObjectType({
  name: 'BuildingCountAggregateOutputType',
  fields: () => ({
    id: { type: GraphQLInt },
    title: { type: GraphQLInt },
    protocol: { type: GraphQLInt },
    ip: { type: GraphQLInt },
    modbusTcpPort: { type: GraphQLInt },
    comPort: { type: GraphQLInt },
    baudRate: { type: GraphQLInt },
    country: { type: GraphQLInt },
    state: { type: GraphQLInt },
    city: { type: GraphQLInt },
    street: { type: GraphQLInt },
    zip: { type: GraphQLInt },
    engineering: { type: GraphQLInt },
    createdAt: { type: GraphQLInt },
    updatedAt: { type: GraphQLInt },
    projectId: { type: GraphQLInt },
    _all: { type: GraphQLInt },
  }),
})

export const BuildingAvgAggregateOutputType = new GraphQLObjectType({
  name: 'BuildingAvgAggregateOutputType',
  fields: () => ({
    id: { type: GraphQLFloat },
    baudRate: { type: GraphQLFloat },
  }),
})

export const BuildingSumAggregateOutputType = new GraphQLObjectType({
  name: 'BuildingSumAggregateOutputType',
  fields: () => ({
    id: { type: GraphQLInt },
    baudRate: { type: GraphQLInt },
  }),
})

export const BuildingMinAggregateOutputType = new GraphQLObjectType({
  name: 'BuildingMinAggregateOutputType',
  fields: () => ({
    id: { type: GraphQLInt },
    title: { type: GraphQLString },
    protocol: { type: BuildingProtocol },
    ip: { type: GraphQLString },
    modbusTcpPort: { type: GraphQLString },
    comPort: { type: GraphQLString },
    baudRate: { type: GraphQLInt },
    country: { type: GraphQLString },
    state: { type: GraphQLString },
    city: { type: GraphQLString },
    street: { type: GraphQLString },
    zip: { type: GraphQLString },
    engineering: { type: GraphQLString },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
    projectId: { type: GraphQLString },
  }),
})

export const BuildingMaxAggregateOutputType = new GraphQLObjectType({
  name: 'BuildingMaxAggregateOutputType',
  fields: () => ({
    id: { type: GraphQLInt },
    title: { type: GraphQLString },
    protocol: { type: BuildingProtocol },
    ip: { type: GraphQLString },
    modbusTcpPort: { type: GraphQLString },
    comPort: { type: GraphQLString },
    baudRate: { type: GraphQLInt },
    country: { type: GraphQLString },
    state: { type: GraphQLString },
    city: { type: GraphQLString },
    street: { type: GraphQLString },
    zip: { type: GraphQLString },
    engineering: { type: GraphQLString },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
    projectId: { type: GraphQLString },
  }),
})
