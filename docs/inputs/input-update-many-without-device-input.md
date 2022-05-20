---
id: input-update-many-without-device-input
title: InputUpdateManyWithoutDeviceInput
---

 # InputUpdateManyWithoutDeviceInput





```graphql
type InputUpdateManyWithoutDeviceInput {
  create: [InputCreateWithoutDeviceInput!]
  connectOrCreate: [InputCreateOrConnectWithoutDeviceInput!]
  upsert: [InputUpsertWithWhereUniqueWithoutDeviceInput!]
  createMany: InputCreateManyDeviceInputEnvelope
  set: [InputFilterUnique!]
  disconnect: [InputFilterUnique!]
  delete: [InputFilterUnique!]
  connect: [InputFilterUnique!]
  update: [InputUpdateWithWhereUniqueWithoutDeviceInput!]
  updateMany: [InputUpdateManyWithWhereWithoutDeviceInput!]
  deleteMany: [InputScalarFilter!]
}
```


## Fields

### `create` ([`InputCreateWithoutDeviceInput`](/inputs/input-create-without-device-input))




### `connectOrCreate` ([`InputCreateOrConnectWithoutDeviceInput`](/inputs/input-create-or-connect-without-device-input))




### `upsert` ([`InputUpsertWithWhereUniqueWithoutDeviceInput`](/inputs/input-upsert-with-where-unique-without-device-input))




### `createMany` ([`InputCreateManyDeviceInputEnvelope`](/inputs/input-create-many-device-input-envelope))




### `set` ([`InputFilterUnique`](/inputs/input-filter-unique))




### `disconnect` ([`InputFilterUnique`](/inputs/input-filter-unique))




### `delete` ([`InputFilterUnique`](/inputs/input-filter-unique))




### `connect` ([`InputFilterUnique`](/inputs/input-filter-unique))




### `update` ([`InputUpdateWithWhereUniqueWithoutDeviceInput`](/inputs/input-update-with-where-unique-without-device-input))




### `updateMany` ([`InputUpdateManyWithWhereWithoutDeviceInput`](/inputs/input-update-many-with-where-without-device-input))




### `deleteMany` ([`InputScalarFilter`](/inputs/input-scalar-filter))






