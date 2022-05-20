---
id: variable-create-nested-many-without-device-input
title: VariableCreateNestedManyWithoutDeviceInput
---

 # VariableCreateNestedManyWithoutDeviceInput





```graphql
type VariableCreateNestedManyWithoutDeviceInput {
  create: [VariableCreateWithoutDeviceInput!]
  connectOrCreate: [VariableCreateOrConnectWithoutDeviceInput!]
  createMany: VariableCreateManyDeviceInputEnvelope
  connect: [VariableFilterUnique!]
}
```


## Fields

### `create` ([`VariableCreateWithoutDeviceInput`](/inputs/variable-create-without-device-input))




### `connectOrCreate` ([`VariableCreateOrConnectWithoutDeviceInput`](/inputs/variable-create-or-connect-without-device-input))




### `createMany` ([`VariableCreateManyDeviceInputEnvelope`](/inputs/variable-create-many-device-input-envelope))




### `connect` ([`VariableFilterUnique`](/inputs/variable-filter-unique))






