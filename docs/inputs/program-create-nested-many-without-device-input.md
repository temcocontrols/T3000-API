---
id: program-create-nested-many-without-device-input
title: ProgramCreateNestedManyWithoutDeviceInput
---

 # ProgramCreateNestedManyWithoutDeviceInput





```graphql
type ProgramCreateNestedManyWithoutDeviceInput {
  create: [ProgramCreateWithoutDeviceInput!]
  connectOrCreate: [ProgramCreateOrConnectWithoutDeviceInput!]
  createMany: ProgramCreateManyDeviceInputEnvelope
  connect: [ProgramFilterUnique!]
}
```


## Fields

### `create` ([`ProgramCreateWithoutDeviceInput`](/inputs/program-create-without-device-input))




### `connectOrCreate` ([`ProgramCreateOrConnectWithoutDeviceInput`](/inputs/program-create-or-connect-without-device-input))




### `createMany` ([`ProgramCreateManyDeviceInputEnvelope`](/inputs/program-create-many-device-input-envelope))




### `connect` ([`ProgramFilterUnique`](/inputs/program-filter-unique))






