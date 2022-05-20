---
id: output-scalar-filter
title: OutputScalarFilter
---

 # OutputScalarFilter





```graphql
type OutputScalarFilter {
  AND: [OutputScalarFilter!]
  OR: [OutputScalarFilter!]
  NOT: [OutputScalarFilter!]
  id: IntFilter
  index: IntFilter
  panel: IntFilter
  label: StringNullableFilter
  fullLabel: StringNullableFilter
  autoManual: EnumAutoManualNullableFilter
  hoaSwitch: StringNullableFilter
  value: StringNullableFilter
  units: StringNullableFilter
  range: StringNullableFilter
  lowVoltage: FloatNullableFilter
  highVoltage: FloatNullableFilter
  pwmPeriod: IntNullableFilter
  status: StringFilter
  type: StringNullableFilter
  binaryArray: StringNullableFilter
  createdAt: DateTimeFilter
  updatedAt: DateTimeFilter
  deviceId: IntNullableFilter
}
```


## Fields

### `AND` ([`OutputScalarFilter`](/inputs/output-scalar-filter))




### `OR` ([`OutputScalarFilter`](/inputs/output-scalar-filter))




### `NOT` ([`OutputScalarFilter`](/inputs/output-scalar-filter))




### `id` ([`IntFilter`](/inputs/int-filter))




### `index` ([`IntFilter`](/inputs/int-filter))




### `panel` ([`IntFilter`](/inputs/int-filter))




### `label` ([`StringNullableFilter`](/inputs/string-nullable-filter))




### `fullLabel` ([`StringNullableFilter`](/inputs/string-nullable-filter))




### `autoManual` ([`EnumAutoManualNullableFilter`](/inputs/enum-auto-manual-nullable-filter))




### `hoaSwitch` ([`StringNullableFilter`](/inputs/string-nullable-filter))




### `value` ([`StringNullableFilter`](/inputs/string-nullable-filter))




### `units` ([`StringNullableFilter`](/inputs/string-nullable-filter))




### `range` ([`StringNullableFilter`](/inputs/string-nullable-filter))




### `lowVoltage` ([`FloatNullableFilter`](/inputs/float-nullable-filter))




### `highVoltage` ([`FloatNullableFilter`](/inputs/float-nullable-filter))




### `pwmPeriod` ([`IntNullableFilter`](/inputs/int-nullable-filter))




### `status` ([`StringFilter`](/inputs/string-filter))




### `type` ([`StringNullableFilter`](/inputs/string-nullable-filter))




### `binaryArray` ([`StringNullableFilter`](/inputs/string-nullable-filter))




### `createdAt` ([`DateTimeFilter`](/inputs/date-time-filter))




### `updatedAt` ([`DateTimeFilter`](/inputs/date-time-filter))




### `deviceId` ([`IntNullableFilter`](/inputs/int-nullable-filter))






