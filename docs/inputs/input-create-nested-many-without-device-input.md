---
id: input-create-nested-many-without-device-input
title: InputCreateNestedManyWithoutDeviceInput
---

 # InputCreateNestedManyWithoutDeviceInput





```graphql
type InputCreateNestedManyWithoutDeviceInput {
  create: [InputCreateWithoutDeviceInput!]
  connectOrCreate: [InputCreateOrConnectWithoutDeviceInput!]
  createMany: InputCreateManyDeviceInputEnvelope
  connect: [InputFilterUnique!]
}
```


## Fields

### `create` ([`InputCreateWithoutDeviceInput`](/inputs/input-create-without-device-input))




### `connectOrCreate` ([`InputCreateOrConnectWithoutDeviceInput`](/inputs/input-create-or-connect-without-device-input))




### `createMany` ([`InputCreateManyDeviceInputEnvelope`](/inputs/input-create-many-device-input-envelope))




### `connect` ([`InputFilterUnique`](/inputs/input-filter-unique))






