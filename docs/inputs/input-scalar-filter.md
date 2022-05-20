---
id: input-scalar-filter
title: InputScalarFilter
---

 # InputScalarFilter





```graphql
type InputScalarFilter {
  AND: [InputScalarFilter!]
  OR: [InputScalarFilter!]
  NOT: [InputScalarFilter!]
  id: IntFilter
  index: IntFilter
  panel: IntFilter
  label: StringNullableFilter
  fullLabel: StringNullableFilter
  autoManual: EnumAutoManualFilter
  value: StringNullableFilter
  units: StringNullableFilter
  range: StringNullableFilter
  calibration: FloatNullableFilter
  sign: StringNullableFilter
  filter: IntNullableFilter
  status: StringFilter
  signalType: StringNullableFilter
  type: StringNullableFilter
  binaryArray: StringNullableFilter
  createdAt: DateTimeFilter
  updatedAt: DateTimeFilter
  deviceId: IntNullableFilter
}
```


## Fields

### `AND` ([`InputScalarFilter`](/inputs/input-scalar-filter))




### `OR` ([`InputScalarFilter`](/inputs/input-scalar-filter))




### `NOT` ([`InputScalarFilter`](/inputs/input-scalar-filter))




### `id` ([`IntFilter`](/inputs/int-filter))




### `index` ([`IntFilter`](/inputs/int-filter))




### `panel` ([`IntFilter`](/inputs/int-filter))




### `label` ([`StringNullableFilter`](/inputs/string-nullable-filter))




### `fullLabel` ([`StringNullableFilter`](/inputs/string-nullable-filter))




### `autoManual` ([`EnumAutoManualFilter`](/inputs/enum-auto-manual-filter))




### `value` ([`StringNullableFilter`](/inputs/string-nullable-filter))




### `units` ([`StringNullableFilter`](/inputs/string-nullable-filter))




### `range` ([`StringNullableFilter`](/inputs/string-nullable-filter))




### `calibration` ([`FloatNullableFilter`](/inputs/float-nullable-filter))




### `sign` ([`StringNullableFilter`](/inputs/string-nullable-filter))




### `filter` ([`IntNullableFilter`](/inputs/int-nullable-filter))




### `status` ([`StringFilter`](/inputs/string-filter))




### `signalType` ([`StringNullableFilter`](/inputs/string-nullable-filter))




### `type` ([`StringNullableFilter`](/inputs/string-nullable-filter))




### `binaryArray` ([`StringNullableFilter`](/inputs/string-nullable-filter))




### `createdAt` ([`DateTimeFilter`](/inputs/date-time-filter))




### `updatedAt` ([`DateTimeFilter`](/inputs/date-time-filter))




### `deviceId` ([`IntNullableFilter`](/inputs/int-nullable-filter))






