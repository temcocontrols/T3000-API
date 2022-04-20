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

export const Input = new GraphQLObjectType({
  name: 'Input',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLInt),
    },
    index: {
      type: new GraphQLNonNull(GraphQLInt),
    },
    panel: {
      type: new GraphQLNonNull(GraphQLInt),
    },
    label: {
      type: GraphQLString,
    },
    fullLabel: {
      type: GraphQLString,
    },
    autoManual: {
      type: new GraphQLNonNull(AutoManual),
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
    calibration: {
      type: GraphQLFloat,
    },
    sign: {
      type: GraphQLString,
    },
    filter: {
      type: GraphQLInt,
    },
    status: {
      type: new GraphQLNonNull(GraphQLString),
    },
    signalType: {
      type: GraphQLString,
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

export const AggregateInput = new GraphQLObjectType({
  name: 'AggregateInput',
  fields: () => ({
    _count: { type: InputCountAggregateOutputType },
    _avg: { type: InputAvgAggregateOutputType },
    _sum: { type: InputSumAggregateOutputType },
    _min: { type: InputMinAggregateOutputType },
    _max: { type: InputMaxAggregateOutputType },
  }),
})

export const InputGroupByOutputType = new GraphQLObjectType({
  name: 'InputGroupByOutputType',
  fields: () => ({
    id: { type: GraphQLInt },
    index: { type: GraphQLInt },
    panel: { type: GraphQLInt },
    label: { type: GraphQLString },
    fullLabel: { type: GraphQLString },
    autoManual: { type: AutoManual },
    value: { type: GraphQLString },
    units: { type: GraphQLString },
    range: { type: GraphQLString },
    calibration: { type: GraphQLFloat },
    sign: { type: GraphQLString },
    filter: { type: GraphQLInt },
    status: { type: GraphQLString },
    signalType: { type: GraphQLString },
    type: { type: GraphQLString },
    binaryArray: { type: GraphQLString },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
    deviceId: { type: GraphQLInt },
    _count: { type: InputCountAggregateOutputType },
    _avg: { type: InputAvgAggregateOutputType },
    _sum: { type: InputSumAggregateOutputType },
    _min: { type: InputMinAggregateOutputType },
    _max: { type: InputMaxAggregateOutputType },
  }),
})

export const InputCountAggregateOutputType = new GraphQLObjectType({
  name: 'InputCountAggregateOutputType',
  fields: () => ({
    id: { type: GraphQLInt },
    index: { type: GraphQLInt },
    panel: { type: GraphQLInt },
    label: { type: GraphQLInt },
    fullLabel: { type: GraphQLInt },
    autoManual: { type: GraphQLInt },
    value: { type: GraphQLInt },
    units: { type: GraphQLInt },
    range: { type: GraphQLInt },
    calibration: { type: GraphQLInt },
    sign: { type: GraphQLInt },
    filter: { type: GraphQLInt },
    status: { type: GraphQLInt },
    signalType: { type: GraphQLInt },
    type: { type: GraphQLInt },
    binaryArray: { type: GraphQLInt },
    createdAt: { type: GraphQLInt },
    updatedAt: { type: GraphQLInt },
    deviceId: { type: GraphQLInt },
    _all: { type: GraphQLInt },
  }),
})

export const InputAvgAggregateOutputType = new GraphQLObjectType({
  name: 'InputAvgAggregateOutputType',
  fields: () => ({
    id: { type: GraphQLFloat },
    index: { type: GraphQLFloat },
    panel: { type: GraphQLFloat },
    calibration: { type: GraphQLFloat },
    filter: { type: GraphQLFloat },
    deviceId: { type: GraphQLFloat },
  }),
})

export const InputSumAggregateOutputType = new GraphQLObjectType({
  name: 'InputSumAggregateOutputType',
  fields: () => ({
    id: { type: GraphQLInt },
    index: { type: GraphQLInt },
    panel: { type: GraphQLInt },
    calibration: { type: GraphQLFloat },
    filter: { type: GraphQLInt },
    deviceId: { type: GraphQLInt },
  }),
})

export const InputMinAggregateOutputType = new GraphQLObjectType({
  name: 'InputMinAggregateOutputType',
  fields: () => ({
    id: { type: GraphQLInt },
    index: { type: GraphQLInt },
    panel: { type: GraphQLInt },
    label: { type: GraphQLString },
    fullLabel: { type: GraphQLString },
    autoManual: { type: AutoManual },
    value: { type: GraphQLString },
    units: { type: GraphQLString },
    range: { type: GraphQLString },
    calibration: { type: GraphQLFloat },
    sign: { type: GraphQLString },
    filter: { type: GraphQLInt },
    status: { type: GraphQLString },
    signalType: { type: GraphQLString },
    type: { type: GraphQLString },
    binaryArray: { type: GraphQLString },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
    deviceId: { type: GraphQLInt },
  }),
})

export const InputMaxAggregateOutputType = new GraphQLObjectType({
  name: 'InputMaxAggregateOutputType',
  fields: () => ({
    id: { type: GraphQLInt },
    index: { type: GraphQLInt },
    panel: { type: GraphQLInt },
    label: { type: GraphQLString },
    fullLabel: { type: GraphQLString },
    autoManual: { type: AutoManual },
    value: { type: GraphQLString },
    units: { type: GraphQLString },
    range: { type: GraphQLString },
    calibration: { type: GraphQLFloat },
    sign: { type: GraphQLString },
    filter: { type: GraphQLInt },
    status: { type: GraphQLString },
    signalType: { type: GraphQLString },
    type: { type: GraphQLString },
    binaryArray: { type: GraphQLString },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
    deviceId: { type: GraphQLInt },
  }),
})
