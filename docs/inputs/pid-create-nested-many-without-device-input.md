---
id: pid-create-nested-many-without-device-input
title: PidCreateNestedManyWithoutDeviceInput
---

 # PidCreateNestedManyWithoutDeviceInput





```graphql
type PidCreateNestedManyWithoutDeviceInput {
  create: [PidCreateWithoutDeviceInput!]
  connectOrCreate: [PidCreateOrConnectWithoutDeviceInput!]
  createMany: PidCreateManyDeviceInputEnvelope
  connect: [PidFilterUnique!]
}
```


## Fields

### `create` ([`PidCreateWithoutDeviceInput`](/inputs/pid-create-without-device-input))




### `connectOrCreate` ([`PidCreateOrConnectWithoutDeviceInput`](/inputs/pid-create-or-connect-without-device-input))




### `createMany` ([`PidCreateManyDeviceInputEnvelope`](/inputs/pid-create-many-device-input-envelope))




### `connect` ([`PidFilterUnique`](/inputs/pid-filter-unique))






