---
id: graphic
title: Graphic
---

 # Graphic





```graphql
type Graphic {
  id: Int!
  index: Int!
  label: String
  fullLabel: String
  fileId: Int
  picture: File
  elementCount: Int!
  binaryArray: String
  createdAt: DateTime!
  updatedAt: DateTime!
  Device: Device
  deviceId: Int
}
```


## Fields

### `id` ([`Int`](/scalars/int))




### `index` ([`Int`](/scalars/int))




### `label` ([`String`](/scalars/string))




### `fullLabel` ([`String`](/scalars/string))




### `fileId` ([`Int`](/scalars/int))




### `picture` ([`File`](/objects/file))




### `elementCount` ([`Int`](/scalars/int))




### `binaryArray` ([`String`](/scalars/string))




### `createdAt` ([`DateTime`](/scalars/date-time))




### `updatedAt` ([`DateTime`](/scalars/date-time))




### `Device` ([`Device`](/objects/device))




### `deviceId` ([`Int`](/scalars/int))






