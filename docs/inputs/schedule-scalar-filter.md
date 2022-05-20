---
id: schedule-scalar-filter
title: ScheduleScalarFilter
---

 # ScheduleScalarFilter





```graphql
type ScheduleScalarFilter {
  AND: [ScheduleScalarFilter!]
  OR: [ScheduleScalarFilter!]
  NOT: [ScheduleScalarFilter!]
  id: IntFilter
  index: IntFilter
  label: StringNullableFilter
  fullLabel: StringNullableFilter
  autoManual: EnumAutoManualFilter
  output: StringNullableFilter
  holiday1: StringNullableFilter
  status1: StringNullableFilter
  holiday2: StringNullableFilter
  status2: StringNullableFilter
  binaryArray: StringNullableFilter
  createdAt: DateTimeFilter
  updatedAt: DateTimeFilter
  deviceId: IntNullableFilter
}
```


## Fields

### `AND` ([`ScheduleScalarFilter`](/inputs/schedule-scalar-filter))




### `OR` ([`ScheduleScalarFilter`](/inputs/schedule-scalar-filter))




### `NOT` ([`ScheduleScalarFilter`](/inputs/schedule-scalar-filter))




### `id` ([`IntFilter`](/inputs/int-filter))




### `index` ([`IntFilter`](/inputs/int-filter))




### `label` ([`StringNullableFilter`](/inputs/string-nullable-filter))




### `fullLabel` ([`StringNullableFilter`](/inputs/string-nullable-filter))




### `autoManual` ([`EnumAutoManualFilter`](/inputs/enum-auto-manual-filter))




### `output` ([`StringNullableFilter`](/inputs/string-nullable-filter))




### `holiday1` ([`StringNullableFilter`](/inputs/string-nullable-filter))




### `status1` ([`StringNullableFilter`](/inputs/string-nullable-filter))




### `holiday2` ([`StringNullableFilter`](/inputs/string-nullable-filter))




### `status2` ([`StringNullableFilter`](/inputs/string-nullable-filter))




### `binaryArray` ([`StringNullableFilter`](/inputs/string-nullable-filter))




### `createdAt` ([`DateTimeFilter`](/inputs/date-time-filter))




### `updatedAt` ([`DateTimeFilter`](/inputs/date-time-filter))




### `deviceId` ([`IntNullableFilter`](/inputs/int-nullable-filter))






