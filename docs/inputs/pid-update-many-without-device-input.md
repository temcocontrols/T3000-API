---
id: pid-update-many-without-device-input
title: PidUpdateManyWithoutDeviceInput
---

 # PidUpdateManyWithoutDeviceInput





```graphql
type PidUpdateManyWithoutDeviceInput {
  create: [PidCreateWithoutDeviceInput!]
  connectOrCreate: [PidCreateOrConnectWithoutDeviceInput!]
  upsert: [PidUpsertWithWhereUniqueWithoutDeviceInput!]
  createMany: PidCreateManyDeviceInputEnvelope
  set: [PidFilterUnique!]
  disconnect: [PidFilterUnique!]
  delete: [PidFilterUnique!]
  connect: [PidFilterUnique!]
  update: [PidUpdateWithWhereUniqueWithoutDeviceInput!]
  updateMany: [PidUpdateManyWithWhereWithoutDeviceInput!]
  deleteMany: [PidScalarFilter!]
}
```


## Fields

### `create` ([`PidCreateWithoutDeviceInput`](/inputs/pid-create-without-device-input))




### `connectOrCreate` ([`PidCreateOrConnectWithoutDeviceInput`](/inputs/pid-create-or-connect-without-device-input))




### `upsert` ([`PidUpsertWithWhereUniqueWithoutDeviceInput`](/inputs/pid-upsert-with-where-unique-without-device-input))




### `createMany` ([`PidCreateManyDeviceInputEnvelope`](/inputs/pid-create-many-device-input-envelope))




### `set` ([`PidFilterUnique`](/inputs/pid-filter-unique))




### `disconnect` ([`PidFilterUnique`](/inputs/pid-filter-unique))




### `delete` ([`PidFilterUnique`](/inputs/pid-filter-unique))




### `connect` ([`PidFilterUnique`](/inputs/pid-filter-unique))




### `update` ([`PidUpdateWithWhereUniqueWithoutDeviceInput`](/inputs/pid-update-with-where-unique-without-device-input))




### `updateMany` ([`PidUpdateManyWithWhereWithoutDeviceInput`](/inputs/pid-update-many-with-where-without-device-input))




### `deleteMany` ([`PidScalarFilter`](/inputs/pid-scalar-filter))






