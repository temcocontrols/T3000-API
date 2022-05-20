---
id: graphic-update-many-without-device-input
title: GraphicUpdateManyWithoutDeviceInput
---

 # GraphicUpdateManyWithoutDeviceInput





```graphql
type GraphicUpdateManyWithoutDeviceInput {
  create: [GraphicCreateWithoutDeviceInput!]
  connectOrCreate: [GraphicCreateOrConnectWithoutDeviceInput!]
  upsert: [GraphicUpsertWithWhereUniqueWithoutDeviceInput!]
  createMany: GraphicCreateManyDeviceInputEnvelope
  set: [GraphicFilterUnique!]
  disconnect: [GraphicFilterUnique!]
  delete: [GraphicFilterUnique!]
  connect: [GraphicFilterUnique!]
  update: [GraphicUpdateWithWhereUniqueWithoutDeviceInput!]
  updateMany: [GraphicUpdateManyWithWhereWithoutDeviceInput!]
  deleteMany: [GraphicScalarFilter!]
}
```


## Fields

### `create` ([`GraphicCreateWithoutDeviceInput`](/inputs/graphic-create-without-device-input))




### `connectOrCreate` ([`GraphicCreateOrConnectWithoutDeviceInput`](/inputs/graphic-create-or-connect-without-device-input))




### `upsert` ([`GraphicUpsertWithWhereUniqueWithoutDeviceInput`](/inputs/graphic-upsert-with-where-unique-without-device-input))




### `createMany` ([`GraphicCreateManyDeviceInputEnvelope`](/inputs/graphic-create-many-device-input-envelope))




### `set` ([`GraphicFilterUnique`](/inputs/graphic-filter-unique))




### `disconnect` ([`GraphicFilterUnique`](/inputs/graphic-filter-unique))




### `delete` ([`GraphicFilterUnique`](/inputs/graphic-filter-unique))




### `connect` ([`GraphicFilterUnique`](/inputs/graphic-filter-unique))




### `update` ([`GraphicUpdateWithWhereUniqueWithoutDeviceInput`](/inputs/graphic-update-with-where-unique-without-device-input))




### `updateMany` ([`GraphicUpdateManyWithWhereWithoutDeviceInput`](/inputs/graphic-update-many-with-where-without-device-input))




### `deleteMany` ([`GraphicScalarFilter`](/inputs/graphic-scalar-filter))






