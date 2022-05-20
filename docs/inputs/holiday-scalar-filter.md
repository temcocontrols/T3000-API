---
id: holiday-scalar-filter
title: HolidayScalarFilter
---

 # HolidayScalarFilter





```graphql
type HolidayScalarFilter {
  AND: [HolidayScalarFilter!]
  OR: [HolidayScalarFilter!]
  NOT: [HolidayScalarFilter!]
  id: IntFilter
  index: IntFilter
  label: StringNullableFilter
  fullLabel: StringNullableFilter
  autoManual: EnumAutoManualFilter
  value: StringNullableFilter
  days: DateTimeNullableListFilter
  binaryArray: StringNullableFilter
  createdAt: DateTimeFilter
  updatedAt: DateTimeFilter
  deviceId: IntNullableFilter
}
```


## Fields

### `AND` ([`HolidayScalarFilter`](/inputs/holiday-scalar-filter))




### `OR` ([`HolidayScalarFilter`](/inputs/holiday-scalar-filter))




### `NOT` ([`HolidayScalarFilter`](/inputs/holiday-scalar-filter))




### `id` ([`IntFilter`](/inputs/int-filter))




### `index` ([`IntFilter`](/inputs/int-filter))




### `label` ([`StringNullableFilter`](/inputs/string-nullable-filter))




### `fullLabel` ([`StringNullableFilter`](/inputs/string-nullable-filter))




### `autoManual` ([`EnumAutoManualFilter`](/inputs/enum-auto-manual-filter))




### `value` ([`StringNullableFilter`](/inputs/string-nullable-filter))




### `days` ([`DateTimeNullableListFilter`](/inputs/date-time-nullable-list-filter))




### `binaryArray` ([`StringNullableFilter`](/inputs/string-nullable-filter))




### `createdAt` ([`DateTimeFilter`](/inputs/date-time-filter))




### `updatedAt` ([`DateTimeFilter`](/inputs/date-time-filter))




### `deviceId` ([`IntNullableFilter`](/inputs/int-nullable-filter))






