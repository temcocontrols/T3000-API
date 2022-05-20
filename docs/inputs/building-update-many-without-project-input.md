---
id: building-update-many-without-project-input
title: BuildingUpdateManyWithoutProjectInput
---

 # BuildingUpdateManyWithoutProjectInput





```graphql
type BuildingUpdateManyWithoutProjectInput {
  create: [BuildingCreateWithoutProjectInput!]
  connectOrCreate: [BuildingCreateOrConnectWithoutProjectInput!]
  upsert: [BuildingUpsertWithWhereUniqueWithoutProjectInput!]
  createMany: BuildingCreateManyProjectInputEnvelope
  set: [BuildingFilterUnique!]
  disconnect: [BuildingFilterUnique!]
  delete: [BuildingFilterUnique!]
  connect: [BuildingFilterUnique!]
  update: [BuildingUpdateWithWhereUniqueWithoutProjectInput!]
  updateMany: [BuildingUpdateManyWithWhereWithoutProjectInput!]
  deleteMany: [BuildingScalarFilter!]
}
```


## Fields

### `create` ([`BuildingCreateWithoutProjectInput`](/inputs/building-create-without-project-input))




### `connectOrCreate` ([`BuildingCreateOrConnectWithoutProjectInput`](/inputs/building-create-or-connect-without-project-input))




### `upsert` ([`BuildingUpsertWithWhereUniqueWithoutProjectInput`](/inputs/building-upsert-with-where-unique-without-project-input))




### `createMany` ([`BuildingCreateManyProjectInputEnvelope`](/inputs/building-create-many-project-input-envelope))




### `set` ([`BuildingFilterUnique`](/inputs/building-filter-unique))




### `disconnect` ([`BuildingFilterUnique`](/inputs/building-filter-unique))




### `delete` ([`BuildingFilterUnique`](/inputs/building-filter-unique))




### `connect` ([`BuildingFilterUnique`](/inputs/building-filter-unique))




### `update` ([`BuildingUpdateWithWhereUniqueWithoutProjectInput`](/inputs/building-update-with-where-unique-without-project-input))




### `updateMany` ([`BuildingUpdateManyWithWhereWithoutProjectInput`](/inputs/building-update-many-with-where-without-project-input))




### `deleteMany` ([`BuildingScalarFilter`](/inputs/building-scalar-filter))






