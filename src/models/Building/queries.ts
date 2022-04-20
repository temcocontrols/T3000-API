import { GraphQLInt, GraphQLList, GraphQLNonNull } from 'graphql'
import { Building, AggregateBuilding } from './type'
import {
  BuildingWhereUniqueInput,
  BuildingWhereInput,
  BuildingOrderByWithRelationInput,
} from '../inputs'
import { BuildingScalarFieldEnum } from '../enums'
import { AppContext } from '../../context'
export const buildingQueries = {
  building: {
    extensions: {
      model: 'Building',
      op: 'findUnique',
      permType: 'READ',
    },
    type: Building,
    args: {
      where: { type: new GraphQLNonNull(BuildingWhereUniqueInput) },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.building.findUnique(args)
    },
  },
  buildings: {
    extensions: {
      model: 'Building',
      op: 'findMany',
      permType: 'READ',
    },
    type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(Building))),
    args: {
      where: { type: BuildingWhereInput },
      orderBy: { type: new GraphQLList(BuildingOrderByWithRelationInput) },
      cursor: { type: BuildingWhereUniqueInput },
      skip: { type: GraphQLInt },
      take: { type: GraphQLInt },
      distinct: { type: new GraphQLList(BuildingScalarFieldEnum) },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.building.findMany(args)
    },
  },
  buildingFirst: {
    extensions: {
      model: 'Building',
      op: 'findFirst',
      permType: 'READ',
    },
    type: Building,
    args: {
      where: { type: BuildingWhereInput },
      orderBy: { type: new GraphQLList(BuildingOrderByWithRelationInput) },
      cursor: { type: BuildingWhereUniqueInput },
      skip: { type: GraphQLInt },
      take: { type: GraphQLInt },
      distinct: { type: new GraphQLList(BuildingScalarFieldEnum) },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.building.findFirst(args)
    },
  },
  buildingsCount: {
    extensions: {
      model: 'Building',
      op: 'count',
      permType: 'READ',
    },
    type: new GraphQLNonNull(GraphQLInt),
    args: {
      where: { type: BuildingWhereInput },
      orderBy: { type: new GraphQLList(BuildingOrderByWithRelationInput) },
      cursor: { type: BuildingWhereUniqueInput },
      skip: { type: GraphQLInt },
      take: { type: GraphQLInt },
      distinct: { type: new GraphQLList(BuildingScalarFieldEnum) },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.building.count(args)
    },
  },
  buildingsAggregate: {
    extensions: {
      model: 'Building',
      op: 'aggregate',
      permType: 'READ',
    },
    type: new GraphQLNonNull(AggregateBuilding),
    args: {
      where: { type: BuildingWhereInput },
      orderBy: { type: new GraphQLList(BuildingOrderByWithRelationInput) },
      cursor: { type: BuildingWhereUniqueInput },
      skip: { type: GraphQLInt },
      take: { type: GraphQLInt },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.building.aggregate(args)
    },
  },
}
