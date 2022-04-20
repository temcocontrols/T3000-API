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
import { File, Building } from '../types'
import { BuildingScalarFieldEnum } from '../enums'
import {
  BuildingOrderByWithRelationInput,
  BuildingWhereInput,
  BuildingWhereUniqueInput,
} from '../inputs'

export const Project = new GraphQLObjectType({
  name: 'Project',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLInt),
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    slug: {
      type: new GraphQLNonNull(GraphQLString),
    },
    description: {
      type: GraphQLString,
    },
    imageFileId: {
      type: GraphQLInt,
    },
    image: {
      type: File,
    },
    buildings: {
      type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(Building))),
      args: {
        where: { type: BuildingWhereInput },
        orderBy: { type: BuildingOrderByWithRelationInput },
        cursor: { type: BuildingWhereUniqueInput },
        take: { type: GraphQLInt },
        skip: { type: GraphQLInt },
        distinct: {
          type: new GraphQLList(new GraphQLNonNull(BuildingScalarFieldEnum)),
        },
      },
    },
    createdAt: {
      type: new GraphQLNonNull(GraphQLDateTime),
    },
    updatedAt: {
      type: new GraphQLNonNull(GraphQLDateTime),
    },
    authorId: {
      type: new GraphQLNonNull(GraphQLString),
    },

    _count: {
      type: ProjectCountOutputType,
    },
  }),
})

export const AggregateProject = new GraphQLObjectType({
  name: 'AggregateProject',
  fields: () => ({
    _count: { type: ProjectCountAggregateOutputType },
    _avg: { type: ProjectAvgAggregateOutputType },
    _sum: { type: ProjectSumAggregateOutputType },
    _min: { type: ProjectMinAggregateOutputType },
    _max: { type: ProjectMaxAggregateOutputType },
  }),
})

export const ProjectGroupByOutputType = new GraphQLObjectType({
  name: 'ProjectGroupByOutputType',
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    slug: { type: GraphQLString },
    description: { type: GraphQLString },
    imageFileId: { type: GraphQLInt },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
    authorId: { type: GraphQLString },
    _count: { type: ProjectCountAggregateOutputType },
    _avg: { type: ProjectAvgAggregateOutputType },
    _sum: { type: ProjectSumAggregateOutputType },
    _min: { type: ProjectMinAggregateOutputType },
    _max: { type: ProjectMaxAggregateOutputType },
  }),
})

export const ProjectCountOutputType = new GraphQLObjectType({
  name: 'ProjectCountOutputType',
  fields: () => ({
    buildings: { type: GraphQLInt },
  }),
})

export const ProjectCountAggregateOutputType = new GraphQLObjectType({
  name: 'ProjectCountAggregateOutputType',
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLInt },
    slug: { type: GraphQLInt },
    description: { type: GraphQLInt },
    imageFileId: { type: GraphQLInt },
    createdAt: { type: GraphQLInt },
    updatedAt: { type: GraphQLInt },
    authorId: { type: GraphQLInt },
    _all: { type: GraphQLInt },
  }),
})

export const ProjectAvgAggregateOutputType = new GraphQLObjectType({
  name: 'ProjectAvgAggregateOutputType',
  fields: () => ({
    id: { type: GraphQLFloat },
    imageFileId: { type: GraphQLFloat },
  }),
})

export const ProjectSumAggregateOutputType = new GraphQLObjectType({
  name: 'ProjectSumAggregateOutputType',
  fields: () => ({
    id: { type: GraphQLInt },
    imageFileId: { type: GraphQLInt },
  }),
})

export const ProjectMinAggregateOutputType = new GraphQLObjectType({
  name: 'ProjectMinAggregateOutputType',
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    slug: { type: GraphQLString },
    description: { type: GraphQLString },
    imageFileId: { type: GraphQLInt },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
    authorId: { type: GraphQLString },
  }),
})

export const ProjectMaxAggregateOutputType = new GraphQLObjectType({
  name: 'ProjectMaxAggregateOutputType',
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    slug: { type: GraphQLString },
    description: { type: GraphQLString },
    imageFileId: { type: GraphQLInt },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
    authorId: { type: GraphQLString },
  }),
})
