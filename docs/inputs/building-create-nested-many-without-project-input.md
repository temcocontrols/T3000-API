---
id: building-create-nested-many-without-project-input
title: BuildingCreateNestedManyWithoutProjectInput
---

 # BuildingCreateNestedManyWithoutProjectInput





```graphql
type BuildingCreateNestedManyWithoutProjectInput {
  create: [BuildingCreateWithoutProjectInput!]
  connectOrCreate: [BuildingCreateOrConnectWithoutProjectInput!]
  createMany: BuildingCreateManyProjectInputEnvelope
  connect: [BuildingFilterUnique!]
}
```


## Fields

### `create` ([`BuildingCreateWithoutProjectInput`](/inputs/building-create-without-project-input))




### `connectOrCreate` ([`BuildingCreateOrConnectWithoutProjectInput`](/inputs/building-create-or-connect-without-project-input))




### `createMany` ([`BuildingCreateManyProjectInputEnvelope`](/inputs/building-create-many-project-input-envelope))




### `connect` ([`BuildingFilterUnique`](/inputs/building-filter-unique))






