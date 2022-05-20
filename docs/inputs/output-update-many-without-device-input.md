---
id: output-update-many-without-device-input
title: OutputUpdateManyWithoutDeviceInput
---

 # OutputUpdateManyWithoutDeviceInput





```graphql
type OutputUpdateManyWithoutDeviceInput {
  create: [OutputCreateWithoutDeviceInput!]
  connectOrCreate: [OutputCreateOrConnectWithoutDeviceInput!]
  upsert: [OutputUpsertWithWhereUniqueWithoutDeviceInput!]
  createMany: OutputCreateManyDeviceInputEnvelope
  set: [OutputFilterUnique!]
  disconnect: [OutputFilterUnique!]
  delete: [OutputFilterUnique!]
  connect: [OutputFilterUnique!]
  update: [OutputUpdateWithWhereUniqueWithoutDeviceInput!]
  updateMany: [OutputUpdateManyWithWhereWithoutDeviceInput!]
  deleteMany: [OutputScalarFilter!]
}
```


## Fields

### `create` ([`OutputCreateWithoutDeviceInput`](/inputs/output-create-without-device-input))




### `connectOrCreate` ([`OutputCreateOrConnectWithoutDeviceInput`](/inputs/output-create-or-connect-without-device-input))




### `upsert` ([`OutputUpsertWithWhereUniqueWithoutDeviceInput`](/inputs/output-upsert-with-where-unique-without-device-input))




### `createMany` ([`OutputCreateManyDeviceInputEnvelope`](/inputs/output-create-many-device-input-envelope))




### `set` ([`OutputFilterUnique`](/inputs/output-filter-unique))




### `disconnect` ([`OutputFilterUnique`](/inputs/output-filter-unique))




### `delete` ([`OutputFilterUnique`](/inputs/output-filter-unique))




### `connect` ([`OutputFilterUnique`](/inputs/output-filter-unique))




### `update` ([`OutputUpdateWithWhereUniqueWithoutDeviceInput`](/inputs/output-update-with-where-unique-without-device-input))




### `updateMany` ([`OutputUpdateManyWithWhereWithoutDeviceInput`](/inputs/output-update-many-with-where-without-device-input))




### `deleteMany` ([`OutputScalarFilter`](/inputs/output-scalar-filter))






