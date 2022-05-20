---
id: variable-scalar-filter
title: VariableScalarFilter
---

 # VariableScalarFilter





```graphql
type VariableScalarFilter {
  AND: [VariableScalarFilter!]
  OR: [VariableScalarFilter!]
  NOT: [VariableScalarFilter!]
  id: IntFilter
  index: IntFilter
  label: StringNullableFilter
  fullLabel: StringNullableFilter
  autoManual: EnumAutoManualFilter
  value: StringNullableFilter
  units: StringNullableFilter
  binaryArray: StringNullableFilter
  createdAt: DateTimeFilter
  updatedAt: DateTimeFilter
  deviceId: IntNullableFilter
}
```


## Fields

### `AND` ([`VariableScalarFilter`](/inputs/variable-scalar-filter))




### `OR` ([`VariableScalarFilter`](/inputs/variable-scalar-filter))




### `NOT` ([`VariableScalarFilter`](/inputs/variable-scalar-filter))




### `id` ([`IntFilter`](/inputs/int-filter))




### `index` ([`IntFilter`](/inputs/int-filter))




### `label` ([`StringNullableFilter`](/inputs/string-nullable-filter))




### `fullLabel` ([`StringNullableFilter`](/inputs/string-nullable-filter))




### `autoManual` ([`EnumAutoManualFilter`](/inputs/enum-auto-manual-filter))




### `value` ([`StringNullableFilter`](/inputs/string-nullable-filter))




### `units` ([`StringNullableFilter`](/inputs/string-nullable-filter))




### `binaryArray` ([`StringNullableFilter`](/inputs/string-nullable-filter))




### `createdAt` ([`DateTimeFilter`](/inputs/date-time-filter))




### `updatedAt` ([`DateTimeFilter`](/inputs/date-time-filter))




### `deviceId` ([`IntNullableFilter`](/inputs/int-nullable-filter))






