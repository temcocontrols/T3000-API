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

export const Schedule = new GraphQLObjectType({
  name: 'Schedule',
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
    output: {
      type: GraphQLString,
    },
    holiday1: {
      type: GraphQLString,
    },
    status1: {
      type: GraphQLString,
    },
    holiday2: {
      type: GraphQLString,
    },
    status2: {
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

export const AggregateSchedule = new GraphQLObjectType({
  name: 'AggregateSchedule',
  fields: () => ({
    _count: { type: ScheduleCountAggregateOutputType },
    _avg: { type: ScheduleAvgAggregateOutputType },
    _sum: { type: ScheduleSumAggregateOutputType },
    _min: { type: ScheduleMinAggregateOutputType },
    _max: { type: ScheduleMaxAggregateOutputType },
  }),
})

export const ScheduleGroupByOutputType = new GraphQLObjectType({
  name: 'ScheduleGroupByOutputType',
  fields: () => ({
    id: { type: GraphQLInt },
    index: { type: GraphQLInt },
    label: { type: GraphQLString },
    fullLabel: { type: GraphQLString },
    autoManual: { type: AutoManual },
    output: { type: GraphQLString },
    holiday1: { type: GraphQLString },
    status1: { type: GraphQLString },
    holiday2: { type: GraphQLString },
    status2: { type: GraphQLString },
    binaryArray: { type: GraphQLString },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
    deviceId: { type: GraphQLInt },
    _count: { type: ScheduleCountAggregateOutputType },
    _avg: { type: ScheduleAvgAggregateOutputType },
    _sum: { type: ScheduleSumAggregateOutputType },
    _min: { type: ScheduleMinAggregateOutputType },
    _max: { type: ScheduleMaxAggregateOutputType },
  }),
})

export const ScheduleCountAggregateOutputType = new GraphQLObjectType({
  name: 'ScheduleCountAggregateOutputType',
  fields: () => ({
    id: { type: GraphQLInt },
    index: { type: GraphQLInt },
    label: { type: GraphQLInt },
    fullLabel: { type: GraphQLInt },
    autoManual: { type: GraphQLInt },
    output: { type: GraphQLInt },
    holiday1: { type: GraphQLInt },
    status1: { type: GraphQLInt },
    holiday2: { type: GraphQLInt },
    status2: { type: GraphQLInt },
    binaryArray: { type: GraphQLInt },
    createdAt: { type: GraphQLInt },
    updatedAt: { type: GraphQLInt },
    deviceId: { type: GraphQLInt },
    _all: { type: GraphQLInt },
  }),
})

export const ScheduleAvgAggregateOutputType = new GraphQLObjectType({
  name: 'ScheduleAvgAggregateOutputType',
  fields: () => ({
    id: { type: GraphQLFloat },
    index: { type: GraphQLFloat },
    deviceId: { type: GraphQLFloat },
  }),
})

export const ScheduleSumAggregateOutputType = new GraphQLObjectType({
  name: 'ScheduleSumAggregateOutputType',
  fields: () => ({
    id: { type: GraphQLInt },
    index: { type: GraphQLInt },
    deviceId: { type: GraphQLInt },
  }),
})

export const ScheduleMinAggregateOutputType = new GraphQLObjectType({
  name: 'ScheduleMinAggregateOutputType',
  fields: () => ({
    id: { type: GraphQLInt },
    index: { type: GraphQLInt },
    label: { type: GraphQLString },
    fullLabel: { type: GraphQLString },
    autoManual: { type: AutoManual },
    output: { type: GraphQLString },
    holiday1: { type: GraphQLString },
    status1: { type: GraphQLString },
    holiday2: { type: GraphQLString },
    status2: { type: GraphQLString },
    binaryArray: { type: GraphQLString },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
    deviceId: { type: GraphQLInt },
  }),
})

export const ScheduleMaxAggregateOutputType = new GraphQLObjectType({
  name: 'ScheduleMaxAggregateOutputType',
  fields: () => ({
    id: { type: GraphQLInt },
    index: { type: GraphQLInt },
    label: { type: GraphQLString },
    fullLabel: { type: GraphQLString },
    autoManual: { type: AutoManual },
    output: { type: GraphQLString },
    holiday1: { type: GraphQLString },
    status1: { type: GraphQLString },
    holiday2: { type: GraphQLString },
    status2: { type: GraphQLString },
    binaryArray: { type: GraphQLString },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
    deviceId: { type: GraphQLInt },
  }),
})
