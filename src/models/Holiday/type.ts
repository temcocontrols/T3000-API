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

export const Holiday = new GraphQLObjectType({
  name: 'Holiday',
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
    days: {
      type: new GraphQLNonNull(
        new GraphQLList(new GraphQLNonNull(GraphQLDateTime)),
      ),
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

export const AggregateHoliday = new GraphQLObjectType({
  name: 'AggregateHoliday',
  fields: () => ({
    _count: { type: HolidayCountAggregateOutputType },
    _avg: { type: HolidayAvgAggregateOutputType },
    _sum: { type: HolidaySumAggregateOutputType },
    _min: { type: HolidayMinAggregateOutputType },
    _max: { type: HolidayMaxAggregateOutputType },
  }),
})

export const HolidayGroupByOutputType = new GraphQLObjectType({
  name: 'HolidayGroupByOutputType',
  fields: () => ({
    id: { type: GraphQLInt },
    index: { type: GraphQLInt },
    label: { type: GraphQLString },
    fullLabel: { type: GraphQLString },
    autoManual: { type: AutoManual },
    value: { type: GraphQLString },
    days: { type: new GraphQLList(GraphQLDateTime) },
    binaryArray: { type: GraphQLString },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
    deviceId: { type: GraphQLInt },
    _count: { type: HolidayCountAggregateOutputType },
    _avg: { type: HolidayAvgAggregateOutputType },
    _sum: { type: HolidaySumAggregateOutputType },
    _min: { type: HolidayMinAggregateOutputType },
    _max: { type: HolidayMaxAggregateOutputType },
  }),
})

export const HolidayCountAggregateOutputType = new GraphQLObjectType({
  name: 'HolidayCountAggregateOutputType',
  fields: () => ({
    id: { type: GraphQLInt },
    index: { type: GraphQLInt },
    label: { type: GraphQLInt },
    fullLabel: { type: GraphQLInt },
    autoManual: { type: GraphQLInt },
    value: { type: GraphQLInt },
    days: { type: GraphQLInt },
    binaryArray: { type: GraphQLInt },
    createdAt: { type: GraphQLInt },
    updatedAt: { type: GraphQLInt },
    deviceId: { type: GraphQLInt },
    _all: { type: GraphQLInt },
  }),
})

export const HolidayAvgAggregateOutputType = new GraphQLObjectType({
  name: 'HolidayAvgAggregateOutputType',
  fields: () => ({
    id: { type: GraphQLFloat },
    index: { type: GraphQLFloat },
    deviceId: { type: GraphQLFloat },
  }),
})

export const HolidaySumAggregateOutputType = new GraphQLObjectType({
  name: 'HolidaySumAggregateOutputType',
  fields: () => ({
    id: { type: GraphQLInt },
    index: { type: GraphQLInt },
    deviceId: { type: GraphQLInt },
  }),
})

export const HolidayMinAggregateOutputType = new GraphQLObjectType({
  name: 'HolidayMinAggregateOutputType',
  fields: () => ({
    id: { type: GraphQLInt },
    index: { type: GraphQLInt },
    label: { type: GraphQLString },
    fullLabel: { type: GraphQLString },
    autoManual: { type: AutoManual },
    value: { type: GraphQLString },
    binaryArray: { type: GraphQLString },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
    deviceId: { type: GraphQLInt },
  }),
})

export const HolidayMaxAggregateOutputType = new GraphQLObjectType({
  name: 'HolidayMaxAggregateOutputType',
  fields: () => ({
    id: { type: GraphQLInt },
    index: { type: GraphQLInt },
    label: { type: GraphQLString },
    fullLabel: { type: GraphQLString },
    autoManual: { type: AutoManual },
    value: { type: GraphQLString },
    binaryArray: { type: GraphQLString },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
    deviceId: { type: GraphQLInt },
  }),
})
