---
id: variable-update-many-without-device-input
title: VariableUpdateManyWithoutDeviceInput
---

 # VariableUpdateManyWithoutDeviceInput





```graphql
type VariableUpdateManyWithoutDeviceInput {
  create: [VariableCreateWithoutDeviceInput!]
  connectOrCreate: [VariableCreateOrConnectWithoutDeviceInput!]
  upsert: [VariableUpsertWithWhereUniqueWithoutDeviceInput!]
  createMany: VariableCreateManyDeviceInputEnvelope
  set: [VariableFilterUnique!]
  disconnect: [VariableFilterUnique!]
  delete: [VariableFilterUnique!]
  connect: [VariableFilterUnique!]
  update: [VariableUpdateWithWhereUniqueWithoutDeviceInput!]
  updateMany: [VariableUpdateManyWithWhereWithoutDeviceInput!]
  deleteMany: [VariableScalarFilter!]
}
```


## Fields

### `create` ([`VariableCreateWithoutDeviceInput`](/inputs/variable-create-without-device-input))




### `connectOrCreate` ([`VariableCreateOrConnectWithoutDeviceInput`](/inputs/variable-create-or-connect-without-device-input))




### `upsert` ([`VariableUpsertWithWhereUniqueWithoutDeviceInput`](/inputs/variable-upsert-with-where-unique-without-device-input))




### `createMany` ([`VariableCreateManyDeviceInputEnvelope`](/inputs/variable-create-many-device-input-envelope))




### `set` ([`VariableFilterUnique`](/inputs/variable-filter-unique))




### `disconnect` ([`VariableFilterUnique`](/inputs/variable-filter-unique))




### `delete` ([`VariableFilterUnique`](/inputs/variable-filter-unique))




### `connect` ([`VariableFilterUnique`](/inputs/variable-filter-unique))




### `update` ([`VariableUpdateWithWhereUniqueWithoutDeviceInput`](/inputs/variable-update-with-where-unique-without-device-input))




### `updateMany` ([`VariableUpdateManyWithWhereWithoutDeviceInput`](/inputs/variable-update-many-with-where-without-device-input))




### `deleteMany` ([`VariableScalarFilter`](/inputs/variable-scalar-filter))






