---
id: variable
title: Variable
---

 # Variable





```graphql
type Variable {
  id: Int!
  index: Int!
  label: String
  fullLabel: String
  autoManual: AutoManual!
  value: String
  units: String
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




### `units` ([`String`](/scalars/string))




### `binaryArray` ([`String`](/scalars/string))




### `createdAt` ([`DateTime`](/scalars/date-time))




### `updatedAt` ([`DateTime`](/scalars/date-time))




### `Device` ([`Device`](/objects/device))




### `deviceId` ([`Int`](/scalars/int))






