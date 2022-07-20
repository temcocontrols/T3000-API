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
import { Schedule } from '../types'

export const ScheduleTime = new GraphQLObjectType({
  name: 'ScheduleTime',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLInt),
    },
    status: {
      type: new GraphQLNonNull(GraphQLString),
    },
    monday: {
      type: GraphQLString,
    },
    tuesday: {
      type: GraphQLString,
    },
    wednesday: {
      type: GraphQLString,
    },
    thursday: {
      type: GraphQLString,
    },
    friday: {
      type: GraphQLString,
    },
    saterday: {
      type: GraphQLString,
    },
    sunday: {
      type: GraphQLString,
    },
    holiday1: {
      type: GraphQLString,
    },
    holiday2: {
      type: GraphQLString,
    },
    createdAt: {
      type: new GraphQLNonNull(GraphQLDateTime),
    },
    updatedAt: {
      type: new GraphQLNonNull(GraphQLDateTime),
    },
    Schedule: {
      type: Schedule,
    },
    scheduleId: {
      type: GraphQLInt,
    },
  }),
})

export const AggregateScheduleTime = new GraphQLObjectType({
  name: 'AggregateScheduleTime',
  fields: () => ({
    _count: { type: ScheduleTimeCountAggregateOutputType },
    _avg: { type: ScheduleTimeAvgAggregateOutputType },
    _sum: { type: ScheduleTimeSumAggregateOutputType },
    _min: { type: ScheduleTimeMinAggregateOutputType },
    _max: { type: ScheduleTimeMaxAggregateOutputType },
  }),
})

export const ScheduleTimeGroupByOutputType = new GraphQLObjectType({
  name: 'ScheduleTimeGroupByOutputType',
  fields: () => ({
    id: { type: GraphQLInt },
    status: { type: GraphQLString },
    monday: { type: GraphQLString },
    tuesday: { type: GraphQLString },
    wednesday: { type: GraphQLString },
    thursday: { type: GraphQLString },
    friday: { type: GraphQLString },
    saterday: { type: GraphQLString },
    sunday: { type: GraphQLString },
    holiday1: { type: GraphQLString },
    holiday2: { type: GraphQLString },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
    scheduleId: { type: GraphQLInt },
    _count: { type: ScheduleTimeCountAggregateOutputType },
    _avg: { type: ScheduleTimeAvgAggregateOutputType },
    _sum: { type: ScheduleTimeSumAggregateOutputType },
    _min: { type: ScheduleTimeMinAggregateOutputType },
    _max: { type: ScheduleTimeMaxAggregateOutputType },
  }),
})

export const ScheduleTimeCountAggregateOutputType = new GraphQLObjectType({
  name: 'ScheduleTimeCountAggregateOutputType',
  fields: () => ({
    id: { type: GraphQLInt },
    status: { type: GraphQLInt },
    monday: { type: GraphQLInt },
    tuesday: { type: GraphQLInt },
    wednesday: { type: GraphQLInt },
    thursday: { type: GraphQLInt },
    friday: { type: GraphQLInt },
    saterday: { type: GraphQLInt },
    sunday: { type: GraphQLInt },
    holiday1: { type: GraphQLInt },
    holiday2: { type: GraphQLInt },
    createdAt: { type: GraphQLInt },
    updatedAt: { type: GraphQLInt },
    scheduleId: { type: GraphQLInt },
    _all: { type: GraphQLInt },
  }),
})

export const ScheduleTimeAvgAggregateOutputType = new GraphQLObjectType({
  name: 'ScheduleTimeAvgAggregateOutputType',
  fields: () => ({
    id: { type: GraphQLFloat },
    scheduleId: { type: GraphQLFloat },
  }),
})

export const ScheduleTimeSumAggregateOutputType = new GraphQLObjectType({
  name: 'ScheduleTimeSumAggregateOutputType',
  fields: () => ({
    id: { type: GraphQLInt },
    scheduleId: { type: GraphQLInt },
  }),
})

export const ScheduleTimeMinAggregateOutputType = new GraphQLObjectType({
  name: 'ScheduleTimeMinAggregateOutputType',
  fields: () => ({
    id: { type: GraphQLInt },
    status: { type: GraphQLString },
    monday: { type: GraphQLString },
    tuesday: { type: GraphQLString },
    wednesday: { type: GraphQLString },
    thursday: { type: GraphQLString },
    friday: { type: GraphQLString },
    saterday: { type: GraphQLString },
    sunday: { type: GraphQLString },
    holiday1: { type: GraphQLString },
    holiday2: { type: GraphQLString },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
    scheduleId: { type: GraphQLInt },
  }),
})

export const ScheduleTimeMaxAggregateOutputType = new GraphQLObjectType({
  name: 'ScheduleTimeMaxAggregateOutputType',
  fields: () => ({
    id: { type: GraphQLInt },
    status: { type: GraphQLString },
    monday: { type: GraphQLString },
    tuesday: { type: GraphQLString },
    wednesday: { type: GraphQLString },
    thursday: { type: GraphQLString },
    friday: { type: GraphQLString },
    saterday: { type: GraphQLString },
    sunday: { type: GraphQLString },
    holiday1: { type: GraphQLString },
    holiday2: { type: GraphQLString },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
    scheduleId: { type: GraphQLInt },
  }),
})
