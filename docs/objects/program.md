---
id: program
title: Program
---

 # Program





```graphql
type Program {
  id: Int!
  index: Int!
  label: String
  fullLabel: String
  status: String
  autoManual: AutoManual!
  size: Int
  executionTime: Int!
  sourceCode: String
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




### `status` ([`String`](/scalars/string))




### `autoManual` ([`AutoManual`](/enums/auto-manual))




### `size` ([`Int`](/scalars/int))




### `executionTime` ([`Int`](/scalars/int))




### `sourceCode` ([`String`](/scalars/string))




### `binaryArray` ([`String`](/scalars/string))




### `createdAt` ([`DateTime`](/scalars/date-time))




### `updatedAt` ([`DateTime`](/scalars/date-time))




### `Device` ([`Device`](/objects/device))




### `deviceId` ([`Int`](/scalars/int))






