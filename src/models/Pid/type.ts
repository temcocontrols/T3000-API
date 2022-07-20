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
import { Device } from '../types'
import { AutoManual } from '../enums'

export const Pid = new GraphQLObjectType({
  name: 'Pid',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLInt),
    },
    index: {
      type: new GraphQLNonNull(GraphQLInt),
    },
    input: {
      type: GraphQLString,
    },
    inputValue: {
      type: GraphQLString,
    },
    inputUnits: {
      type: GraphQLString,
    },
    autoManual: {
      type: new GraphQLNonNull(AutoManual),
    },
    output: {
      type: GraphQLString,
    },
    setpoint: {
      type: GraphQLString,
    },
    setpointValue: {
      type: GraphQLFloat,
    },
    setpointUnits: {
      type: GraphQLString,
    },
    action: {
      type: GraphQLString,
    },
    pidProp: {
      type: GraphQLInt,
    },
    pidInt: {
      type: GraphQLInt,
    },
    pidTime: {
      type: GraphQLString,
    },
    pidDer: {
      type: GraphQLFloat,
    },
    bias: {
      type: GraphQLInt,
    },
    binaryArray: {
      type: GraphQLString,
    },
    createdAt: {
      type: new GraphQLNonNull(GraphQLDateTime),
    },
    updatedAt: {
      type: new GraphQLNonNull(GraphQLDateTime),
    },
    Device: {
      type: Device,
    },
    deviceId: {
      type: GraphQLInt,
    },
  }),
})

export const AggregatePid = new GraphQLObjectType({
  name: 'AggregatePid',
  fields: () => ({
    _count: { type: PidCountAggregateOutputType },
    _avg: { type: PidAvgAggregateOutputType },
    _sum: { type: PidSumAggregateOutputType },
    _min: { type: PidMinAggregateOutputType },
    _max: { type: PidMaxAggregateOutputType },
  }),
})

export const PidGroupByOutputType = new GraphQLObjectType({
  name: 'PidGroupByOutputType',
  fields: () => ({
    id: { type: GraphQLInt },
    index: { type: GraphQLInt },
    input: { type: GraphQLString },
    inputValue: { type: GraphQLString },
    inputUnits: { type: GraphQLString },
    autoManual: { type: AutoManual },
    output: { type: GraphQLString },
    setpoint: { type: GraphQLString },
    setpointValue: { type: GraphQLFloat },
    setpointUnits: { type: GraphQLString },
    action: { type: GraphQLString },
    pidProp: { type: GraphQLInt },
    pidInt: { type: GraphQLInt },
    pidTime: { type: GraphQLString },
    pidDer: { type: GraphQLFloat },
    bias: { type: GraphQLInt },
    binaryArray: { type: GraphQLString },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
    deviceId: { type: GraphQLInt },
    _count: { type: PidCountAggregateOutputType },
    _avg: { type: PidAvgAggregateOutputType },
    _sum: { type: PidSumAggregateOutputType },
    _min: { type: PidMinAggregateOutputType },
    _max: { type: PidMaxAggregateOutputType },
  }),
})

export const PidCountAggregateOutputType = new GraphQLObjectType({
  name: 'PidCountAggregateOutputType',
  fields: () => ({
    id: { type: GraphQLInt },
    index: { type: GraphQLInt },
    input: { type: GraphQLInt },
    inputValue: { type: GraphQLInt },
    inputUnits: { type: GraphQLInt },
    autoManual: { type: GraphQLInt },
    output: { type: GraphQLInt },
    setpoint: { type: GraphQLInt },
    setpointValue: { type: GraphQLInt },
    setpointUnits: { type: GraphQLInt },
    action: { type: GraphQLInt },
    pidProp: { type: GraphQLInt },
    pidInt: { type: GraphQLInt },
    pidTime: { type: GraphQLInt },
    pidDer: { type: GraphQLInt },
    bias: { type: GraphQLInt },
    binaryArray: { type: GraphQLInt },
    createdAt: { type: GraphQLInt },
    updatedAt: { type: GraphQLInt },
    deviceId: { type: GraphQLInt },
    _all: { type: GraphQLInt },
  }),
})

export const PidAvgAggregateOutputType = new GraphQLObjectType({
  name: 'PidAvgAggregateOutputType',
  fields: () => ({
    id: { type: GraphQLFloat },
    index: { type: GraphQLFloat },
    setpointValue: { type: GraphQLFloat },
    pidProp: { type: GraphQLFloat },
    pidInt: { type: GraphQLFloat },
    pidDer: { type: GraphQLFloat },
    bias: { type: GraphQLFloat },
    deviceId: { type: GraphQLFloat },
  }),
})

export const PidSumAggregateOutputType = new GraphQLObjectType({
  name: 'PidSumAggregateOutputType',
  fields: () => ({
    id: { type: GraphQLInt },
    index: { type: GraphQLInt },
    setpointValue: { type: GraphQLFloat },
    pidProp: { type: GraphQLInt },
    pidInt: { type: GraphQLInt },
    pidDer: { type: GraphQLFloat },
    bias: { type: GraphQLInt },
    deviceId: { type: GraphQLInt },
  }),
})

export const PidMinAggregateOutputType = new GraphQLObjectType({
  name: 'PidMinAggregateOutputType',
  fields: () => ({
    id: { type: GraphQLInt },
    index: { type: GraphQLInt },
    input: { type: GraphQLString },
    inputValue: { type: GraphQLString },
    inputUnits: { type: GraphQLString },
    autoManual: { type: AutoManual },
    output: { type: GraphQLString },
    setpoint: { type: GraphQLString },
    setpointValue: { type: GraphQLFloat },
    setpointUnits: { type: GraphQLString },
    action: { type: GraphQLString },
    pidProp: { type: GraphQLInt },
    pidInt: { type: GraphQLInt },
    pidTime: { type: GraphQLString },
    pidDer: { type: GraphQLFloat },
    bias: { type: GraphQLInt },
    binaryArray: { type: GraphQLString },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
    deviceId: { type: GraphQLInt },
  }),
})

export const PidMaxAggregateOutputType = new GraphQLObjectType({
  name: 'PidMaxAggregateOutputType',
  fields: () => ({
    id: { type: GraphQLInt },
    index: { type: GraphQLInt },
    input: { type: GraphQLString },
    inputValue: { type: GraphQLString },
    inputUnits: { type: GraphQLString },
    autoManual: { type: AutoManual },
    output: { type: GraphQLString },
    setpoint: { type: GraphQLString },
    setpointValue: { type: GraphQLFloat },
    setpointUnits: { type: GraphQLString },
    action: { type: GraphQLString },
    pidProp: { type: GraphQLInt },
    pidInt: { type: GraphQLInt },
    pidTime: { type: GraphQLString },
    pidDer: { type: GraphQLFloat },
    bias: { type: GraphQLInt },
    binaryArray: { type: GraphQLString },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
    deviceId: { type: GraphQLInt },
  }),
})
