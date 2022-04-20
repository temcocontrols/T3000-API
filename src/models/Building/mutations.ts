import { GraphQLBoolean, GraphQLNonNull, GraphQLList } from 'graphql'
import { Building } from './type'
import { AffectedRowsOutput } from '../types'
import {
  BuildingCreateInput,
  BuildingUpdateInput,
  BuildingWhereUniqueInput,
  BuildingWhereInput,
  BuildingUpdateManyMutationInput,
  BuildingCreateManyInput,
} from '../inputs'
import { AppContext } from '../../context'

export const buildingMutations = {
  createBuilding: {
    extensions: {
      model: 'Building',
      op: 'createOne',
      permType: 'CREATE',
    },
    type: new GraphQLNonNull(Building),
    args: {
      data: { type: new GraphQLNonNull(BuildingCreateInput) },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.building.create(args)
    },
  },
  updateBuilding: {
    extensions: {
      model: 'Building',
      op: 'updateOne',
      permType: 'UPDATE',
    },
    type: new GraphQLNonNull(Building),
    args: {
      where: { type: new GraphQLNonNull(BuildingWhereUniqueInput) },
      data: { type: new GraphQLNonNull(BuildingUpdateInput) },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.building.update(args)
    },
  },
  deleteBuilding: {
    extensions: {
      model: 'Building',
      op: 'deleteOne',
      permType: 'DELETE',
    },
    type: Building,
    args: {
      where: { type: new GraphQLNonNull(BuildingWhereUniqueInput) },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.building.delete(args)
    },
  },
  upsertBuilding: {
    extensions: {
      model: 'Building',
      op: 'upsertOne',
      permType: 'UPSERT',
    },
    type: new GraphQLNonNull(Building),
    args: {
      where: { type: new GraphQLNonNull(BuildingWhereUniqueInput) },
      create: { type: new GraphQLNonNull(BuildingCreateInput) },
      update: { type: new GraphQLNonNull(BuildingUpdateInput) },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.building.upsert(args)
    },
  },
  createBuildings: {
    extensions: {
      model: 'Building',
      op: 'createMany',
      permType: 'CREATE',
    },
    type: new GraphQLNonNull(AffectedRowsOutput),
    args: {
      data: {
        type: new GraphQLNonNull(
          new GraphQLList(new GraphQLNonNull(BuildingCreateManyInput)),
        ),
      },
      skipDuplicates: { type: GraphQLBoolean },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.building.createMany(args)
    },
  },
  updateBuildings: {
    extensions: {
      model: 'Building',
      op: 'updateMany',
      permType: 'UPDATE',
    },
    type: new GraphQLNonNull(AffectedRowsOutput),
    args: {
      where: { type: new GraphQLNonNull(BuildingWhereInput) },
      data: { type: new GraphQLNonNull(BuildingUpdateManyMutationInput) },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.building.updateMany(args)
    },
  },
  deleteBuildings: {
    extensions: {
      model: 'Building',
      op: 'deleteMany',
      permType: 'DELETE',
    },
    type: new GraphQLNonNull(AffectedRowsOutput),
    args: {
      where: { type: new GraphQLNonNull(BuildingWhereInput) },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.building.deleteMany(args)
    },
  },
}
