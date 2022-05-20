---
id: output-create-nested-many-without-device-input
title: OutputCreateNestedManyWithoutDeviceInput
---

 # OutputCreateNestedManyWithoutDeviceInput





```graphql
type OutputCreateNestedManyWithoutDeviceInput {
  create: [OutputCreateWithoutDeviceInput!]
  connectOrCreate: [OutputCreateOrConnectWithoutDeviceInput!]
  createMany: OutputCreateManyDeviceInputEnvelope
  connect: [OutputFilterUnique!]
}
```


## Fields

### `create` ([`OutputCreateWithoutDeviceInput`](/inputs/output-create-without-device-input))




### `connectOrCreate` ([`OutputCreateOrConnectWithoutDeviceInput`](/inputs/output-create-or-connect-without-device-input))




### `createMany` ([`OutputCreateManyDeviceInputEnvelope`](/inputs/output-create-many-device-input-envelope))




### `connect` ([`OutputFilterUnique`](/inputs/output-filter-unique))






