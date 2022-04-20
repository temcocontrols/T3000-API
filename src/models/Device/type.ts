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
import {
  Building,
  Input,
  Output,
  Pid,
  Variable,
  Graphic,
  Program,
  Holiday,
  Schedule,
} from '../types'
import {
  DeviceConnection,
  InputScalarFieldEnum,
  OutputScalarFieldEnum,
  PidScalarFieldEnum,
  VariableScalarFieldEnum,
  GraphicScalarFieldEnum,
  ProgramScalarFieldEnum,
  HolidayScalarFieldEnum,
  ScheduleScalarFieldEnum,
} from '../enums'
import {
  InputOrderByWithRelationInput,
  InputWhereInput,
  InputWhereUniqueInput,
  OutputOrderByWithRelationInput,
  OutputWhereInput,
  OutputWhereUniqueInput,
  PidOrderByWithRelationInput,
  PidWhereInput,
  PidWhereUniqueInput,
  VariableOrderByWithRelationInput,
  VariableWhereInput,
  VariableWhereUniqueInput,
  GraphicOrderByWithRelationInput,
  GraphicWhereInput,
  GraphicWhereUniqueInput,
  ProgramOrderByWithRelationInput,
  ProgramWhereInput,
  ProgramWhereUniqueInput,
  HolidayOrderByWithRelationInput,
  HolidayWhereInput,
  HolidayWhereUniqueInput,
  ScheduleOrderByWithRelationInput,
  ScheduleWhereInput,
  ScheduleWhereUniqueInput,
} from '../inputs'

export const Device = new GraphQLObjectType({
  name: 'Device',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLInt),
    },
    connection: {
      type: new GraphQLNonNull(DeviceConnection),
    },
    productType: {
      type: new GraphQLNonNull(GraphQLString),
    },
    alias: {
      type: GraphQLString,
    },
    serialNumber: {
      type: GraphQLInt,
    },
    networkId: {
      type: GraphQLInt,
    },
    floor: {
      type: GraphQLString,
    },
    room: {
      type: GraphQLString,
    },
    buildingId: {
      type: GraphQLInt,
    },
    building: {
      type: Building,
    },
    inputs: {
      type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(Input))),
      args: {
        where: { type: InputWhereInput },
        orderBy: { type: InputOrderByWithRelationInput },
        cursor: { type: InputWhereUniqueInput },
        take: { type: GraphQLInt },
        skip: { type: GraphQLInt },
        distinct: {
          type: new GraphQLList(new GraphQLNonNull(InputScalarFieldEnum)),
        },
      },
    },
    outputs: {
      type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(Output))),
      args: {
        where: { type: OutputWhereInput },
        orderBy: { type: OutputOrderByWithRelationInput },
        cursor: { type: OutputWhereUniqueInput },
        take: { type: GraphQLInt },
        skip: { type: GraphQLInt },
        distinct: {
          type: new GraphQLList(new GraphQLNonNull(OutputScalarFieldEnum)),
        },
      },
    },
    pids: {
      type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(Pid))),
      args: {
        where: { type: PidWhereInput },
        orderBy: { type: PidOrderByWithRelationInput },
        cursor: { type: PidWhereUniqueInput },
        take: { type: GraphQLInt },
        skip: { type: GraphQLInt },
        distinct: {
          type: new GraphQLList(new GraphQLNonNull(PidScalarFieldEnum)),
        },
      },
    },
    variables: {
      type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(Variable))),
      args: {
        where: { type: VariableWhereInput },
        orderBy: { type: VariableOrderByWithRelationInput },
        cursor: { type: VariableWhereUniqueInput },
        take: { type: GraphQLInt },
        skip: { type: GraphQLInt },
        distinct: {
          type: new GraphQLList(new GraphQLNonNull(VariableScalarFieldEnum)),
        },
      },
    },
    graphics: {
      type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(Graphic))),
      args: {
        where: { type: GraphicWhereInput },
        orderBy: { type: GraphicOrderByWithRelationInput },
        cursor: { type: GraphicWhereUniqueInput },
        take: { type: GraphQLInt },
        skip: { type: GraphQLInt },
        distinct: {
          type: new GraphQLList(new GraphQLNonNull(GraphicScalarFieldEnum)),
        },
      },
    },
    programs: {
      type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(Program))),
      args: {
        where: { type: ProgramWhereInput },
        orderBy: { type: ProgramOrderByWithRelationInput },
        cursor: { type: ProgramWhereUniqueInput },
        take: { type: GraphQLInt },
        skip: { type: GraphQLInt },
        distinct: {
          type: new GraphQLList(new GraphQLNonNull(ProgramScalarFieldEnum)),
        },
      },
    },
    holidays: {
      type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(Holiday))),
      args: {
        where: { type: HolidayWhereInput },
        orderBy: { type: HolidayOrderByWithRelationInput },
        cursor: { type: HolidayWhereUniqueInput },
        take: { type: GraphQLInt },
        skip: { type: GraphQLInt },
        distinct: {
          type: new GraphQLList(new GraphQLNonNull(HolidayScalarFieldEnum)),
        },
      },
    },
    schedules: {
      type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(Schedule))),
      args: {
        where: { type: ScheduleWhereInput },
        orderBy: { type: ScheduleOrderByWithRelationInput },
        cursor: { type: ScheduleWhereUniqueInput },
        take: { type: GraphQLInt },
        skip: { type: GraphQLInt },
        distinct: {
          type: new GraphQLList(new GraphQLNonNull(ScheduleScalarFieldEnum)),
        },
      },
    },
    createdAt: {
      type: new GraphQLNonNull(GraphQLDateTime),
    },
    updatedAt: {
      type: new GraphQLNonNull(GraphQLDateTime),
    },

    _count: {
      type: DeviceCountOutputType,
    },
  }),
})

export const AggregateDevice = new GraphQLObjectType({
  name: 'AggregateDevice',
  fields: () => ({
    _count: { type: DeviceCountAggregateOutputType },
    _avg: { type: DeviceAvgAggregateOutputType },
    _sum: { type: DeviceSumAggregateOutputType },
    _min: { type: DeviceMinAggregateOutputType },
    _max: { type: DeviceMaxAggregateOutputType },
  }),
})

export const DeviceGroupByOutputType = new GraphQLObjectType({
  name: 'DeviceGroupByOutputType',
  fields: () => ({
    id: { type: GraphQLInt },
    connection: { type: DeviceConnection },
    productType: { type: GraphQLString },
    alias: { type: GraphQLString },
    serialNumber: { type: GraphQLInt },
    networkId: { type: GraphQLInt },
    floor: { type: GraphQLString },
    room: { type: GraphQLString },
    buildingId: { type: GraphQLInt },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
    _count: { type: DeviceCountAggregateOutputType },
    _avg: { type: DeviceAvgAggregateOutputType },
    _sum: { type: DeviceSumAggregateOutputType },
    _min: { type: DeviceMinAggregateOutputType },
    _max: { type: DeviceMaxAggregateOutputType },
  }),
})

export const DeviceCountOutputType = new GraphQLObjectType({
  name: 'DeviceCountOutputType',
  fields: () => ({
    inputs: { type: GraphQLInt },
    outputs: { type: GraphQLInt },
    pids: { type: GraphQLInt },
    variables: { type: GraphQLInt },
    graphics: { type: GraphQLInt },
    programs: { type: GraphQLInt },
    holidays: { type: GraphQLInt },
    schedules: { type: GraphQLInt },
  }),
})

export const DeviceCountAggregateOutputType = new GraphQLObjectType({
  name: 'DeviceCountAggregateOutputType',
  fields: () => ({
    id: { type: GraphQLInt },
    connection: { type: GraphQLInt },
    productType: { type: GraphQLInt },
    alias: { type: GraphQLInt },
    serialNumber: { type: GraphQLInt },
    networkId: { type: GraphQLInt },
    floor: { type: GraphQLInt },
    room: { type: GraphQLInt },
    buildingId: { type: GraphQLInt },
    createdAt: { type: GraphQLInt },
    updatedAt: { type: GraphQLInt },
    _all: { type: GraphQLInt },
  }),
})

export const DeviceAvgAggregateOutputType = new GraphQLObjectType({
  name: 'DeviceAvgAggregateOutputType',
  fields: () => ({
    id: { type: GraphQLFloat },
    serialNumber: { type: GraphQLFloat },
    networkId: { type: GraphQLFloat },
    buildingId: { type: GraphQLFloat },
  }),
})

export const DeviceSumAggregateOutputType = new GraphQLObjectType({
  name: 'DeviceSumAggregateOutputType',
  fields: () => ({
    id: { type: GraphQLInt },
    serialNumber: { type: GraphQLInt },
    networkId: { type: GraphQLInt },
    buildingId: { type: GraphQLInt },
  }),
})

export const DeviceMinAggregateOutputType = new GraphQLObjectType({
  name: 'DeviceMinAggregateOutputType',
  fields: () => ({
    id: { type: GraphQLInt },
    connection: { type: DeviceConnection },
    productType: { type: GraphQLString },
    alias: { type: GraphQLString },
    serialNumber: { type: GraphQLInt },
    networkId: { type: GraphQLInt },
    floor: { type: GraphQLString },
    room: { type: GraphQLString },
    buildingId: { type: GraphQLInt },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
  }),
})

export const DeviceMaxAggregateOutputType = new GraphQLObjectType({
  name: 'DeviceMaxAggregateOutputType',
  fields: () => ({
    id: { type: GraphQLInt },
    connection: { type: DeviceConnection },
    productType: { type: GraphQLString },
    alias: { type: GraphQLString },
    serialNumber: { type: GraphQLInt },
    networkId: { type: GraphQLInt },
    floor: { type: GraphQLString },
    room: { type: GraphQLString },
    buildingId: { type: GraphQLInt },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
  }),
})
