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
import { Graphic, Project } from '../types'
import { GraphicScalarFieldEnum, ProjectScalarFieldEnum } from '../enums'
import {
  GraphicOrderByWithRelationInput,
  GraphicWhereInput,
  GraphicWhereUniqueInput,
  ProjectOrderByWithRelationInput,
  ProjectWhereInput,
  ProjectWhereUniqueInput,
} from '../inputs'

export const File = new GraphQLObjectType({
  name: 'File',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLInt),
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    mimeType: {
      type: new GraphQLNonNull(GraphQLString),
    },
    path: {
      type: new GraphQLNonNull(GraphQLString),
    },
    size: {
      type: GraphQLInt,
    },
    createdAt: {
      type: new GraphQLNonNull(GraphQLDateTime),
    },
    updatedAt: {
      type: new GraphQLNonNull(GraphQLDateTime),
    },
    meta: {
      type: GraphQLJSON,
    },
    tags: {
      type: new GraphQLNonNull(
        new GraphQLList(new GraphQLNonNull(GraphQLString)),
      ),
    },
    Graphic: {
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
    Project: {
      type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(Project))),
      args: {
        where: { type: ProjectWhereInput },
        orderBy: { type: ProjectOrderByWithRelationInput },
        cursor: { type: ProjectWhereUniqueInput },
        take: { type: GraphQLInt },
        skip: { type: GraphQLInt },
        distinct: {
          type: new GraphQLList(new GraphQLNonNull(ProjectScalarFieldEnum)),
        },
      },
    },

    _count: {
      type: FileCountOutputType,
    },
  }),
})

export const AggregateFile = new GraphQLObjectType({
  name: 'AggregateFile',
  fields: () => ({
    _count: { type: FileCountAggregateOutputType },
    _avg: { type: FileAvgAggregateOutputType },
    _sum: { type: FileSumAggregateOutputType },
    _min: { type: FileMinAggregateOutputType },
    _max: { type: FileMaxAggregateOutputType },
  }),
})

export const FileGroupByOutputType = new GraphQLObjectType({
  name: 'FileGroupByOutputType',
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    mimeType: { type: GraphQLString },
    path: { type: GraphQLString },
    size: { type: GraphQLInt },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
    meta: { type: GraphQLJSON },
    tags: { type: new GraphQLList(GraphQLString) },
    _count: { type: FileCountAggregateOutputType },
    _avg: { type: FileAvgAggregateOutputType },
    _sum: { type: FileSumAggregateOutputType },
    _min: { type: FileMinAggregateOutputType },
    _max: { type: FileMaxAggregateOutputType },
  }),
})

export const FileCountOutputType = new GraphQLObjectType({
  name: 'FileCountOutputType',
  fields: () => ({
    Graphic: { type: GraphQLInt },
    Project: { type: GraphQLInt },
  }),
})

export const FileCountAggregateOutputType = new GraphQLObjectType({
  name: 'FileCountAggregateOutputType',
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLInt },
    mimeType: { type: GraphQLInt },
    path: { type: GraphQLInt },
    size: { type: GraphQLInt },
    createdAt: { type: GraphQLInt },
    updatedAt: { type: GraphQLInt },
    meta: { type: GraphQLInt },
    tags: { type: GraphQLInt },
    _all: { type: GraphQLInt },
  }),
})

export const FileAvgAggregateOutputType = new GraphQLObjectType({
  name: 'FileAvgAggregateOutputType',
  fields: () => ({
    id: { type: GraphQLFloat },
    size: { type: GraphQLFloat },
  }),
})

export const FileSumAggregateOutputType = new GraphQLObjectType({
  name: 'FileSumAggregateOutputType',
  fields: () => ({
    id: { type: GraphQLInt },
    size: { type: GraphQLInt },
  }),
})

export const FileMinAggregateOutputType = new GraphQLObjectType({
  name: 'FileMinAggregateOutputType',
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    mimeType: { type: GraphQLString },
    path: { type: GraphQLString },
    size: { type: GraphQLInt },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
  }),
})

export const FileMaxAggregateOutputType = new GraphQLObjectType({
  name: 'FileMaxAggregateOutputType',
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    mimeType: { type: GraphQLString },
    path: { type: GraphQLString },
    size: { type: GraphQLInt },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
  }),
})
