---
id: device-update-many-without-building-input
title: DeviceUpdateManyWithoutBuildingInput
---

 # DeviceUpdateManyWithoutBuildingInput





```graphql
type DeviceUpdateManyWithoutBuildingInput {
  create: [DeviceCreateWithoutBuildingInput!]
  connectOrCreate: [DeviceCreateOrConnectWithoutBuildingInput!]
  upsert: [DeviceUpsertWithWhereUniqueWithoutBuildingInput!]
  createMany: DeviceCreateManyBuildingInputEnvelope
  set: [DeviceFilterUnique!]
  disconnect: [DeviceFilterUnique!]
  delete: [DeviceFilterUnique!]
  connect: [DeviceFilterUnique!]
  update: [DeviceUpdateWithWhereUniqueWithoutBuildingInput!]
  updateMany: [DeviceUpdateManyWithWhereWithoutBuildingInput!]
  deleteMany: [DeviceScalarFilter!]
}
```


## Fields

### `create` ([`DeviceCreateWithoutBuildingInput`](/inputs/device-create-without-building-input))




### `connectOrCreate` ([`DeviceCreateOrConnectWithoutBuildingInput`](/inputs/device-create-or-connect-without-building-input))




### `upsert` ([`DeviceUpsertWithWhereUniqueWithoutBuildingInput`](/inputs/device-upsert-with-where-unique-without-building-input))




### `createMany` ([`DeviceCreateManyBuildingInputEnvelope`](/inputs/device-create-many-building-input-envelope))




### `set` ([`DeviceFilterUnique`](/inputs/device-filter-unique))




### `disconnect` ([`DeviceFilterUnique`](/inputs/device-filter-unique))




### `delete` ([`DeviceFilterUnique`](/inputs/device-filter-unique))




### `connect` ([`DeviceFilterUnique`](/inputs/device-filter-unique))




### `update` ([`DeviceUpdateWithWhereUniqueWithoutBuildingInput`](/inputs/device-update-with-where-unique-without-building-input))




### `updateMany` ([`DeviceUpdateManyWithWhereWithoutBuildingInput`](/inputs/device-update-many-with-where-without-building-input))




### `deleteMany` ([`DeviceScalarFilter`](/inputs/device-scalar-filter))






