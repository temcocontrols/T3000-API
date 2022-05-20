---
id: program-scalar-filter
title: ProgramScalarFilter
---

 # ProgramScalarFilter





```graphql
type ProgramScalarFilter {
  AND: [ProgramScalarFilter!]
  OR: [ProgramScalarFilter!]
  NOT: [ProgramScalarFilter!]
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
  deviceId: IntNullableFilter
}
```


## Fields

### `AND` ([`ProgramScalarFilter`](/inputs/program-scalar-filter))




### `OR` ([`ProgramScalarFilter`](/inputs/program-scalar-filter))




### `NOT` ([`ProgramScalarFilter`](/inputs/program-scalar-filter))




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




### `deviceId` ([`IntNullableFilter`](/inputs/int-nullable-filter))






