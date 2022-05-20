---
id: holiday
title: Holiday
---

 # Holiday





```graphql
type Holiday {
  id: Int!
  index: Int!
  label: String
  fullLabel: String
  autoManual: AutoManual!
  value: String
  days: [DateTime!]!
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




### `autoManual` ([`AutoManual`](/enums/auto-manual))




### `value` ([`String`](/scalars/string))




### `days` ([`DateTime`](/scalars/date-time))




### `binaryArray` ([`String`](/scalars/string))




### `createdAt` ([`DateTime`](/scalars/date-time))




### `updatedAt` ([`DateTime`](/scalars/date-time))




### `Device` ([`Device`](/objects/device))




### `deviceId` ([`Int`](/scalars/int))






