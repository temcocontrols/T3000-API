---
id: schedule-time-filter
title: ScheduleTimeFilter
---

 # ScheduleTimeFilter





```graphql
type ScheduleTimeFilter {
  AND: [ScheduleTimeFilter!]
  OR: [ScheduleTimeFilter!]
  NOT: [ScheduleTimeFilter!]
  id: IntFilter
  status: StringFilter
  monday: DateTimeNullableFilter
  tuesday: DateTimeNullableFilter
  wednesday: DateTimeNullableFilter
  thursday: DateTimeNullableFilter
  friday: DateTimeNullableFilter
  saterday: DateTimeNullableFilter
  sunday: DateTimeNullableFilter
  holiday1: DateTimeNullableFilter
  holiday2: DateTimeNullableFilter
  createdAt: DateTimeFilter
  updatedAt: DateTimeFilter
  Schedule: ScheduleFilter
  scheduleId: IntNullableFilter
}
```


## Fields

### `AND` ([`ScheduleTimeFilter`](/inputs/schedule-time-filter))




### `OR` ([`ScheduleTimeFilter`](/inputs/schedule-time-filter))




### `NOT` ([`ScheduleTimeFilter`](/inputs/schedule-time-filter))




### `id` ([`IntFilter`](/inputs/int-filter))




### `status` ([`StringFilter`](/inputs/string-filter))




### `monday` ([`DateTimeNullableFilter`](/inputs/date-time-nullable-filter))




### `tuesday` ([`DateTimeNullableFilter`](/inputs/date-time-nullable-filter))




### `wednesday` ([`DateTimeNullableFilter`](/inputs/date-time-nullable-filter))




### `thursday` ([`DateTimeNullableFilter`](/inputs/date-time-nullable-filter))




### `friday` ([`DateTimeNullableFilter`](/inputs/date-time-nullable-filter))




### `saterday` ([`DateTimeNullableFilter`](/inputs/date-time-nullable-filter))




### `sunday` ([`DateTimeNullableFilter`](/inputs/date-time-nullable-filter))




### `holiday1` ([`DateTimeNullableFilter`](/inputs/date-time-nullable-filter))




### `holiday2` ([`DateTimeNullableFilter`](/inputs/date-time-nullable-filter))




### `createdAt` ([`DateTimeFilter`](/inputs/date-time-filter))




### `updatedAt` ([`DateTimeFilter`](/inputs/date-time-filter))




### `Schedule` ([`ScheduleFilter`](/inputs/schedule-filter))




### `scheduleId` ([`IntNullableFilter`](/inputs/int-nullable-filter))






