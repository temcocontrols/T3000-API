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

export const Variable = new GraphQLObjectType({
  name: 'Variable',
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
      type: new GraphQLNonNull(AutoManual),
    },
    value: {
      type: GraphQLString,
    },
    units: {
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

export const AggregateVariable = new GraphQLObjectType({
  name: 'AggregateVariable',
  fields: () => ({
    _count: { type: VariableCountAggregateOutputType },
    _avg: { type: VariableAvgAggregateOutputType },
    _sum: { type: VariableSumAggregateOutputType },
    _min: { type: VariableMinAggregateOutputType },
    _max: { type: VariableMaxAggregateOutputType },
  }),
})

export const VariableGroupByOutputType = new GraphQLObjectType({
  name: 'VariableGroupByOutputType',
  fields: () => ({
    id: { type: GraphQLInt },
    index: { type: GraphQLInt },
    label: { type: GraphQLString },
    fullLabel: { type: GraphQLString },
    autoManual: { type: AutoManual },
    value: { type: GraphQLString },
    units: { type: GraphQLString },
    binaryArray: { type: GraphQLString },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
    deviceId: { type: GraphQLInt },
    _count: { type: VariableCountAggregateOutputType },
    _avg: { type: VariableAvgAggregateOutputType },
    _sum: { type: VariableSumAggregateOutputType },
    _min: { type: VariableMinAggregateOutputType },
    _max: { type: VariableMaxAggregateOutputType },
  }),
})

export const VariableCountAggregateOutputType = new GraphQLObjectType({
  name: 'VariableCountAggregateOutputType',
  fields: () => ({
    id: { type: GraphQLInt },
    index: { type: GraphQLInt },
    label: { type: GraphQLInt },
    fullLabel: { type: GraphQLInt },
    autoManual: { type: GraphQLInt },
    value: { type: GraphQLInt },
    units: { type: GraphQLInt },
    binaryArray: { type: GraphQLInt },
    createdAt: { type: GraphQLInt },
    updatedAt: { type: GraphQLInt },
    deviceId: { type: GraphQLInt },
    _all: { type: GraphQLInt },
  }),
})

export const VariableAvgAggregateOutputType = new GraphQLObjectType({
  name: 'VariableAvgAggregateOutputType',
  fields: () => ({
    id: { type: GraphQLFloat },
    index: { type: GraphQLFloat },
    deviceId: { type: GraphQLFloat },
  }),
})

export const VariableSumAggregateOutputType = new GraphQLObjectType({
  name: 'VariableSumAggregateOutputType',
  fields: () => ({
    id: { type: GraphQLInt },
    index: { type: GraphQLInt },
    deviceId: { type: GraphQLInt },
  }),
})

export const VariableMinAggregateOutputType = new GraphQLObjectType({
  name: 'VariableMinAggregateOutputType',
  fields: () => ({
    id: { type: GraphQLInt },
    index: { type: GraphQLInt },
    label: { type: GraphQLString },
    fullLabel: { type: GraphQLString },
    autoManual: { type: AutoManual },
    value: { type: GraphQLString },
    units: { type: GraphQLString },
    binaryArray: { type: GraphQLString },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
    deviceId: { type: GraphQLInt },
  }),
})

export const VariableMaxAggregateOutputType = new GraphQLObjectType({
  name: 'VariableMaxAggregateOutputType',
  fields: () => ({
    id: { type: GraphQLInt },
    index: { type: GraphQLInt },
    label: { type: GraphQLString },
    fullLabel: { type: GraphQLString },
    autoManual: { type: AutoManual },
    value: { type: GraphQLString },
    units: { type: GraphQLString },
    binaryArray: { type: GraphQLString },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
    deviceId: { type: GraphQLInt },
  }),
})
