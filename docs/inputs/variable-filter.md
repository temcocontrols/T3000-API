---
id: variable-filter
title: VariableFilter
---

 # VariableFilter





```graphql
type VariableFilter {
  AND: [VariableFilter!]
  OR: [VariableFilter!]
  NOT: [VariableFilter!]
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
  Device: DeviceFilter
  deviceId: IntNullableFilter
}
```


## Fields

### `AND` ([`VariableFilter`](/inputs/variable-filter))




### `OR` ([`VariableFilter`](/inputs/variable-filter))




### `NOT` ([`VariableFilter`](/inputs/variable-filter))




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




### `Device` ([`DeviceFilter`](/inputs/device-filter))




### `deviceId` ([`IntNullableFilter`](/inputs/int-nullable-filter))






