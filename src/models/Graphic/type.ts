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
import { File, Device } from '../types'

export const Graphic = new GraphQLObjectType({
  name: 'Graphic',
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
    fileId: {
      type: GraphQLInt,
    },
    picture: {
      type: File,
    },
    elementCount: {
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

export const AggregateGraphic = new GraphQLObjectType({
  name: 'AggregateGraphic',
  fields: () => ({
    _count: { type: GraphicCountAggregateOutputType },
    _avg: { type: GraphicAvgAggregateOutputType },
    _sum: { type: GraphicSumAggregateOutputType },
    _min: { type: GraphicMinAggregateOutputType },
    _max: { type: GraphicMaxAggregateOutputType },
  }),
})

export const GraphicGroupByOutputType = new GraphQLObjectType({
  name: 'GraphicGroupByOutputType',
  fields: () => ({
    id: { type: GraphQLInt },
    index: { type: GraphQLInt },
    label: { type: GraphQLString },
    fullLabel: { type: GraphQLString },
    fileId: { type: GraphQLInt },
    elementCount: { type: GraphQLInt },
    binaryArray: { type: GraphQLString },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
    deviceId: { type: GraphQLInt },
    _count: { type: GraphicCountAggregateOutputType },
    _avg: { type: GraphicAvgAggregateOutputType },
    _sum: { type: GraphicSumAggregateOutputType },
    _min: { type: GraphicMinAggregateOutputType },
    _max: { type: GraphicMaxAggregateOutputType },
  }),
})

export const GraphicCountAggregateOutputType = new GraphQLObjectType({
  name: 'GraphicCountAggregateOutputType',
  fields: () => ({
    id: { type: GraphQLInt },
    index: { type: GraphQLInt },
    label: { type: GraphQLInt },
    fullLabel: { type: GraphQLInt },
    fileId: { type: GraphQLInt },
    elementCount: { type: GraphQLInt },
    binaryArray: { type: GraphQLInt },
    createdAt: { type: GraphQLInt },
    updatedAt: { type: GraphQLInt },
    deviceId: { type: GraphQLInt },
    _all: { type: GraphQLInt },
  }),
})

export const GraphicAvgAggregateOutputType = new GraphQLObjectType({
  name: 'GraphicAvgAggregateOutputType',
  fields: () => ({
    id: { type: GraphQLFloat },
    index: { type: GraphQLFloat },
    fileId: { type: GraphQLFloat },
    elementCount: { type: GraphQLFloat },
    deviceId: { type: GraphQLFloat },
  }),
})

export const GraphicSumAggregateOutputType = new GraphQLObjectType({
  name: 'GraphicSumAggregateOutputType',
  fields: () => ({
    id: { type: GraphQLInt },
    index: { type: GraphQLInt },
    fileId: { type: GraphQLInt },
    elementCount: { type: GraphQLInt },
    deviceId: { type: GraphQLInt },
  }),
})

export const GraphicMinAggregateOutputType = new GraphQLObjectType({
  name: 'GraphicMinAggregateOutputType',
  fields: () => ({
    id: { type: GraphQLInt },
    index: { type: GraphQLInt },
    label: { type: GraphQLString },
    fullLabel: { type: GraphQLString },
    fileId: { type: GraphQLInt },
    elementCount: { type: GraphQLInt },
    binaryArray: { type: GraphQLString },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
    deviceId: { type: GraphQLInt },
  }),
})

export const GraphicMaxAggregateOutputType = new GraphQLObjectType({
  name: 'GraphicMaxAggregateOutputType',
  fields: () => ({
    id: { type: GraphQLInt },
    index: { type: GraphQLInt },
    label: { type: GraphQLString },
    fullLabel: { type: GraphQLString },
    fileId: { type: GraphQLInt },
    elementCount: { type: GraphQLInt },
    binaryArray: { type: GraphQLString },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
    deviceId: { type: GraphQLInt },
  }),
})
