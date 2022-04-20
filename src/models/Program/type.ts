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

export const Program = new GraphQLObjectType({
  name: 'Program',
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
    status: {
      type: GraphQLString,
    },
    autoManual: {
      type: new GraphQLNonNull(AutoManual),
    },
    size: {
      type: GraphQLInt,
    },
    executionTime: {
      type: new GraphQLNonNull(GraphQLInt),
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

export const AggregateProgram = new GraphQLObjectType({
  name: 'AggregateProgram',
  fields: () => ({
    _count: { type: ProgramCountAggregateOutputType },
    _avg: { type: ProgramAvgAggregateOutputType },
    _sum: { type: ProgramSumAggregateOutputType },
    _min: { type: ProgramMinAggregateOutputType },
    _max: { type: ProgramMaxAggregateOutputType },
  }),
})

export const ProgramGroupByOutputType = new GraphQLObjectType({
  name: 'ProgramGroupByOutputType',
  fields: () => ({
    id: { type: GraphQLInt },
    index: { type: GraphQLInt },
    label: { type: GraphQLString },
    fullLabel: { type: GraphQLString },
    status: { type: GraphQLString },
    autoManual: { type: AutoManual },
    size: { type: GraphQLInt },
    executionTime: { type: GraphQLInt },
    binaryArray: { type: GraphQLString },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
    deviceId: { type: GraphQLInt },
    _count: { type: ProgramCountAggregateOutputType },
    _avg: { type: ProgramAvgAggregateOutputType },
    _sum: { type: ProgramSumAggregateOutputType },
    _min: { type: ProgramMinAggregateOutputType },
    _max: { type: ProgramMaxAggregateOutputType },
  }),
})

export const ProgramCountAggregateOutputType = new GraphQLObjectType({
  name: 'ProgramCountAggregateOutputType',
  fields: () => ({
    id: { type: GraphQLInt },
    index: { type: GraphQLInt },
    label: { type: GraphQLInt },
    fullLabel: { type: GraphQLInt },
    status: { type: GraphQLInt },
    autoManual: { type: GraphQLInt },
    size: { type: GraphQLInt },
    executionTime: { type: GraphQLInt },
    binaryArray: { type: GraphQLInt },
    createdAt: { type: GraphQLInt },
    updatedAt: { type: GraphQLInt },
    deviceId: { type: GraphQLInt },
    _all: { type: GraphQLInt },
  }),
})

export const ProgramAvgAggregateOutputType = new GraphQLObjectType({
  name: 'ProgramAvgAggregateOutputType',
  fields: () => ({
    id: { type: GraphQLFloat },
    index: { type: GraphQLFloat },
    size: { type: GraphQLFloat },
    executionTime: { type: GraphQLFloat },
    deviceId: { type: GraphQLFloat },
  }),
})

export const ProgramSumAggregateOutputType = new GraphQLObjectType({
  name: 'ProgramSumAggregateOutputType',
  fields: () => ({
    id: { type: GraphQLInt },
    index: { type: GraphQLInt },
    size: { type: GraphQLInt },
    executionTime: { type: GraphQLInt },
    deviceId: { type: GraphQLInt },
  }),
})

export const ProgramMinAggregateOutputType = new GraphQLObjectType({
  name: 'ProgramMinAggregateOutputType',
  fields: () => ({
    id: { type: GraphQLInt },
    index: { type: GraphQLInt },
    label: { type: GraphQLString },
    fullLabel: { type: GraphQLString },
    status: { type: GraphQLString },
    autoManual: { type: AutoManual },
    size: { type: GraphQLInt },
    executionTime: { type: GraphQLInt },
    binaryArray: { type: GraphQLString },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
    deviceId: { type: GraphQLInt },
  }),
})

export const ProgramMaxAggregateOutputType = new GraphQLObjectType({
  name: 'ProgramMaxAggregateOutputType',
  fields: () => ({
    id: { type: GraphQLInt },
    index: { type: GraphQLInt },
    label: { type: GraphQLString },
    fullLabel: { type: GraphQLString },
    status: { type: GraphQLString },
    autoManual: { type: AutoManual },
    size: { type: GraphQLInt },
    executionTime: { type: GraphQLInt },
    binaryArray: { type: GraphQLString },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
    deviceId: { type: GraphQLInt },
  }),
})
