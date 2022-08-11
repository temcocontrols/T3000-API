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

export const Output = new GraphQLObjectType({
  name: 'Output',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLInt),
    },
    index: {
      type: new GraphQLNonNull(GraphQLInt),
    },
    label: {
      type: GraphQLString,
    },
    fullLabel: {
      type: GraphQLString,
    },
    autoManual: {
      type: AutoManual,
    },
    hoaSwitch: {
      type: GraphQLString,
    },
    value: {
      type: GraphQLString,
    },
    units: {
      type: GraphQLString,
    },
    range: {
      type: GraphQLString,
    },
    lowVoltage: {
      type: GraphQLFloat,
    },
    highVoltage: {
      type: GraphQLFloat,
    },
    pwmPeriod: {
      type: GraphQLInt,
    },
    status: {
      type: new GraphQLNonNull(GraphQLString),
    },
    type: {
      type: GraphQLString,
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

export const AggregateOutput = new GraphQLObjectType({
  name: 'AggregateOutput',
  fields: () => ({
    _count: { type: OutputCountAggregateOutputType },
    _avg: { type: OutputAvgAggregateOutputType },
    _sum: { type: OutputSumAggregateOutputType },
    _min: { type: OutputMinAggregateOutputType },
    _max: { type: OutputMaxAggregateOutputType },
  }),
})

export const OutputGroupByOutputType = new GraphQLObjectType({
  name: 'OutputGroupByOutputType',
  fields: () => ({
    id: { type: GraphQLInt },
    index: { type: GraphQLInt },
    label: { type: GraphQLString },
    fullLabel: { type: GraphQLString },
    autoManual: { type: AutoManual },
    hoaSwitch: { type: GraphQLString },
    value: { type: GraphQLString },
    units: { type: GraphQLString },
    range: { type: GraphQLString },
    lowVoltage: { type: GraphQLFloat },
    highVoltage: { type: GraphQLFloat },
    pwmPeriod: { type: GraphQLInt },
    status: { type: GraphQLString },
    type: { type: GraphQLString },
    binaryArray: { type: GraphQLString },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
    deviceId: { type: GraphQLInt },
    _count: { type: OutputCountAggregateOutputType },
    _avg: { type: OutputAvgAggregateOutputType },
    _sum: { type: OutputSumAggregateOutputType },
    _min: { type: OutputMinAggregateOutputType },
    _max: { type: OutputMaxAggregateOutputType },
  }),
})

export const OutputCountAggregateOutputType = new GraphQLObjectType({
  name: 'OutputCountAggregateOutputType',
  fields: () => ({
    id: { type: GraphQLInt },
    index: { type: GraphQLInt },
    label: { type: GraphQLInt },
    fullLabel: { type: GraphQLInt },
    autoManual: { type: GraphQLInt },
    hoaSwitch: { type: GraphQLInt },
    value: { type: GraphQLInt },
    units: { type: GraphQLInt },
    range: { type: GraphQLInt },
    lowVoltage: { type: GraphQLInt },
    highVoltage: { type: GraphQLInt },
    pwmPeriod: { type: GraphQLInt },
    status: { type: GraphQLInt },
    type: { type: GraphQLInt },
    binaryArray: { type: GraphQLInt },
    createdAt: { type: GraphQLInt },
    updatedAt: { type: GraphQLInt },
    deviceId: { type: GraphQLInt },
    _all: { type: GraphQLInt },
  }),
})

export const OutputAvgAggregateOutputType = new GraphQLObjectType({
  name: 'OutputAvgAggregateOutputType',
  fields: () => ({
    id: { type: GraphQLFloat },
    index: { type: GraphQLFloat },
    lowVoltage: { type: GraphQLFloat },
    highVoltage: { type: GraphQLFloat },
    pwmPeriod: { type: GraphQLFloat },
    deviceId: { type: GraphQLFloat },
  }),
})

export const OutputSumAggregateOutputType = new GraphQLObjectType({
  name: 'OutputSumAggregateOutputType',
  fields: () => ({
    id: { type: GraphQLInt },
    index: { type: GraphQLInt },
    lowVoltage: { type: GraphQLFloat },
    highVoltage: { type: GraphQLFloat },
    pwmPeriod: { type: GraphQLInt },
    deviceId: { type: GraphQLInt },
  }),
})

export const OutputMinAggregateOutputType = new GraphQLObjectType({
  name: 'OutputMinAggregateOutputType',
  fields: () => ({
    id: { type: GraphQLInt },
    index: { type: GraphQLInt },
    label: { type: GraphQLString },
    fullLabel: { type: GraphQLString },
    autoManual: { type: AutoManual },
    hoaSwitch: { type: GraphQLString },
    value: { type: GraphQLString },
    units: { type: GraphQLString },
    range: { type: GraphQLString },
    lowVoltage: { type: GraphQLFloat },
    highVoltage: { type: GraphQLFloat },
    pwmPeriod: { type: GraphQLInt },
    status: { type: GraphQLString },
    type: { type: GraphQLString },
    binaryArray: { type: GraphQLString },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
    deviceId: { type: GraphQLInt },
  }),
})

export const OutputMaxAggregateOutputType = new GraphQLObjectType({
  name: 'OutputMaxAggregateOutputType',
  fields: () => ({
    id: { type: GraphQLInt },
    index: { type: GraphQLInt },
    label: { type: GraphQLString },
    fullLabel: { type: GraphQLString },
    autoManual: { type: AutoManual },
    hoaSwitch: { type: GraphQLString },
    value: { type: GraphQLString },
    units: { type: GraphQLString },
    range: { type: GraphQLString },
    lowVoltage: { type: GraphQLFloat },
    highVoltage: { type: GraphQLFloat },
    pwmPeriod: { type: GraphQLInt },
    status: { type: GraphQLString },
    type: { type: GraphQLString },
    binaryArray: { type: GraphQLString },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
    deviceId: { type: GraphQLInt },
  }),
})
