---
id: program-update-many-without-device-input
title: ProgramUpdateManyWithoutDeviceInput
---

 # ProgramUpdateManyWithoutDeviceInput





```graphql
type ProgramUpdateManyWithoutDeviceInput {
  create: [ProgramCreateWithoutDeviceInput!]
  connectOrCreate: [ProgramCreateOrConnectWithoutDeviceInput!]
  upsert: [ProgramUpsertWithWhereUniqueWithoutDeviceInput!]
  createMany: ProgramCreateManyDeviceInputEnvelope
  set: [ProgramFilterUnique!]
  disconnect: [ProgramFilterUnique!]
  delete: [ProgramFilterUnique!]
  connect: [ProgramFilterUnique!]
  update: [ProgramUpdateWithWhereUniqueWithoutDeviceInput!]
  updateMany: [ProgramUpdateManyWithWhereWithoutDeviceInput!]
  deleteMany: [ProgramScalarFilter!]
}
```


## Fields

### `create` ([`ProgramCreateWithoutDeviceInput`](/inputs/program-create-without-device-input))




### `connectOrCreate` ([`ProgramCreateOrConnectWithoutDeviceInput`](/inputs/program-create-or-connect-without-device-input))




### `upsert` ([`ProgramUpsertWithWhereUniqueWithoutDeviceInput`](/inputs/program-upsert-with-where-unique-without-device-input))




### `createMany` ([`ProgramCreateManyDeviceInputEnvelope`](/inputs/program-create-many-device-input-envelope))




### `set` ([`ProgramFilterUnique`](/inputs/program-filter-unique))




### `disconnect` ([`ProgramFilterUnique`](/inputs/program-filter-unique))




### `delete` ([`ProgramFilterUnique`](/inputs/program-filter-unique))




### `connect` ([`ProgramFilterUnique`](/inputs/program-filter-unique))




### `update` ([`ProgramUpdateWithWhereUniqueWithoutDeviceInput`](/inputs/program-update-with-where-unique-without-device-input))




### `updateMany` ([`ProgramUpdateManyWithWhereWithoutDeviceInput`](/inputs/program-update-many-with-where-without-device-input))




### `deleteMany` ([`ProgramScalarFilter`](/inputs/program-scalar-filter))






