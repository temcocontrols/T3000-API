---
id: graphic-create-nested-many-without-device-input
title: GraphicCreateNestedManyWithoutDeviceInput
---

 # GraphicCreateNestedManyWithoutDeviceInput





```graphql
type GraphicCreateNestedManyWithoutDeviceInput {
  create: [GraphicCreateWithoutDeviceInput!]
  connectOrCreate: [GraphicCreateOrConnectWithoutDeviceInput!]
  createMany: GraphicCreateManyDeviceInputEnvelope
  connect: [GraphicFilterUnique!]
}
```


## Fields

### `create` ([`GraphicCreateWithoutDeviceInput`](/inputs/graphic-create-without-device-input))




### `connectOrCreate` ([`GraphicCreateOrConnectWithoutDeviceInput`](/inputs/graphic-create-or-connect-without-device-input))




### `createMany` ([`GraphicCreateManyDeviceInputEnvelope`](/inputs/graphic-create-many-device-input-envelope))




### `connect` ([`GraphicFilterUnique`](/inputs/graphic-filter-unique))






