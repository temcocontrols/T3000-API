---
id: device-create-nested-many-without-building-input
title: DeviceCreateNestedManyWithoutBuildingInput
---

 # DeviceCreateNestedManyWithoutBuildingInput





```graphql
type DeviceCreateNestedManyWithoutBuildingInput {
  create: [DeviceCreateWithoutBuildingInput!]
  connectOrCreate: [DeviceCreateOrConnectWithoutBuildingInput!]
  createMany: DeviceCreateManyBuildingInputEnvelope
  connect: [DeviceFilterUnique!]
}
```


## Fields

### `create` ([`DeviceCreateWithoutBuildingInput`](/inputs/device-create-without-building-input))




### `connectOrCreate` ([`DeviceCreateOrConnectWithoutBuildingInput`](/inputs/device-create-or-connect-without-building-input))




### `createMany` ([`DeviceCreateManyBuildingInputEnvelope`](/inputs/device-create-many-building-input-envelope))




### `connect` ([`DeviceFilterUnique`](/inputs/device-filter-unique))






