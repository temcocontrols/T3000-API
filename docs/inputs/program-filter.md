---
id: program-filter
title: ProgramFilter
---

 # ProgramFilter





```graphql
type ProgramFilter {
  AND: [ProgramFilter!]
  OR: [ProgramFilter!]
  NOT: [ProgramFilter!]
  id: IntFilter
  index: IntFilter
  label: StringNullableFilter
  fullLabel: StringNullableFilter
  status: StringNullableFilter
  autoManual: EnumAutoManualFilter
  size: IntNullableFilter
  executionTime: IntFilter
  sourceCode: StringNullableFilter
  binaryArray: StringNullableFilter
  createdAt: DateTimeFilter
  updatedAt: DateTimeFilter
  Device: DeviceFilter
  deviceId: IntNullableFilter
}
```


## Fields

### `AND` ([`ProgramFilter`](/inputs/program-filter))




### `OR` ([`ProgramFilter`](/inputs/program-filter))




### `NOT` ([`ProgramFilter`](/inputs/program-filter))




### `id` ([`IntFilter`](/inputs/int-filter))




### `index` ([`IntFilter`](/inputs/int-filter))




### `label` ([`StringNullableFilter`](/inputs/string-nullable-filter))




### `fullLabel` ([`StringNullableFilter`](/inputs/string-nullable-filter))




### `status` ([`StringNullableFilter`](/inputs/string-nullable-filter))




### `autoManual` ([`EnumAutoManualFilter`](/inputs/enum-auto-manual-filter))




### `size` ([`IntNullableFilter`](/inputs/int-nullable-filter))




### `executionTime` ([`IntFilter`](/inputs/int-filter))




### `sourceCode` ([`StringNullableFilter`](/inputs/string-nullable-filter))




### `binaryArray` ([`StringNullableFilter`](/inputs/string-nullable-filter))




### `createdAt` ([`DateTimeFilter`](/inputs/date-time-filter))




### `updatedAt` ([`DateTimeFilter`](/inputs/date-time-filter))




### `Device` ([`DeviceFilter`](/inputs/device-filter))




### `deviceId` ([`IntNullableFilter`](/inputs/int-nullable-filter))






