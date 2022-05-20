---
id: device-scalar-filter
title: DeviceScalarFilter
---

 # DeviceScalarFilter





```graphql
type DeviceScalarFilter {
  AND: [DeviceScalarFilter!]
  OR: [DeviceScalarFilter!]
  NOT: [DeviceScalarFilter!]
  id: IntFilter
  connection: EnumDeviceConnectionFilter
  productType: StringFilter
  alias: StringNullableFilter
  serialNumber: IntNullableFilter
  networkId: IntNullableFilter
  floor: StringNullableFilter
  room: StringNullableFilter
  buildingId: IntNullableFilter
  createdAt: DateTimeFilter
  updatedAt: DateTimeFilter
}
```


## Fields

### `AND` ([`DeviceScalarFilter`](/inputs/device-scalar-filter))




### `OR` ([`DeviceScalarFilter`](/inputs/device-scalar-filter))




### `NOT` ([`DeviceScalarFilter`](/inputs/device-scalar-filter))




### `id` ([`IntFilter`](/inputs/int-filter))




### `connection` ([`EnumDeviceConnectionFilter`](/inputs/enum-device-connection-filter))




### `productType` ([`StringFilter`](/inputs/string-filter))




### `alias` ([`StringNullableFilter`](/inputs/string-nullable-filter))




### `serialNumber` ([`IntNullableFilter`](/inputs/int-nullable-filter))




### `networkId` ([`IntNullableFilter`](/inputs/int-nullable-filter))




### `floor` ([`StringNullableFilter`](/inputs/string-nullable-filter))




### `room` ([`StringNullableFilter`](/inputs/string-nullable-filter))




### `buildingId` ([`IntNullableFilter`](/inputs/int-nullable-filter))




### `createdAt` ([`DateTimeFilter`](/inputs/date-time-filter))




### `updatedAt` ([`DateTimeFilter`](/inputs/date-time-filter))






