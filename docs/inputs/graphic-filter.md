---
id: graphic-filter
title: GraphicFilter
---

 # GraphicFilter





```graphql
type GraphicFilter {
  AND: [GraphicFilter!]
  OR: [GraphicFilter!]
  NOT: [GraphicFilter!]
  id: IntFilter
  index: IntFilter
  label: StringNullableFilter
  fullLabel: StringNullableFilter
  fileId: IntNullableFilter
  picture: FileFilter
  elementCount: IntFilter
  binaryArray: StringNullableFilter
  createdAt: DateTimeFilter
  updatedAt: DateTimeFilter
  Device: DeviceFilter
  deviceId: IntNullableFilter
}
```


## Fields

### `AND` ([`GraphicFilter`](/inputs/graphic-filter))




### `OR` ([`GraphicFilter`](/inputs/graphic-filter))




### `NOT` ([`GraphicFilter`](/inputs/graphic-filter))




### `id` ([`IntFilter`](/inputs/int-filter))




### `index` ([`IntFilter`](/inputs/int-filter))




### `label` ([`StringNullableFilter`](/inputs/string-nullable-filter))




### `fullLabel` ([`StringNullableFilter`](/inputs/string-nullable-filter))




### `fileId` ([`IntNullableFilter`](/inputs/int-nullable-filter))




### `picture` ([`FileFilter`](/inputs/file-filter))




### `elementCount` ([`IntFilter`](/inputs/int-filter))




### `binaryArray` ([`StringNullableFilter`](/inputs/string-nullable-filter))




### `createdAt` ([`DateTimeFilter`](/inputs/date-time-filter))




### `updatedAt` ([`DateTimeFilter`](/inputs/date-time-filter))




### `Device` ([`DeviceFilter`](/inputs/device-filter))




### `deviceId` ([`IntNullableFilter`](/inputs/int-nullable-filter))






