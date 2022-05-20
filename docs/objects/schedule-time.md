---
id: schedule-time
title: ScheduleTime
---

 # ScheduleTime





```graphql
type ScheduleTime {
  id: Int!
  status: String!
  monday: DateTime
  tuesday: DateTime
  wednesday: DateTime
  thursday: DateTime
  friday: DateTime
  saterday: DateTime
  sunday: DateTime
  holiday1: DateTime
  holiday2: DateTime
  createdAt: DateTime!
  updatedAt: DateTime!
  Schedule: Schedule
  scheduleId: Int
}
```


## Fields

### `id` ([`Int`](/scalars/int))




### `status` ([`String`](/scalars/string))




### `monday` ([`DateTime`](/scalars/date-time))




### `tuesday` ([`DateTime`](/scalars/date-time))




### `wednesday` ([`DateTime`](/scalars/date-time))




### `thursday` ([`DateTime`](/scalars/date-time))




### `friday` ([`DateTime`](/scalars/date-time))




### `saterday` ([`DateTime`](/scalars/date-time))




### `sunday` ([`DateTime`](/scalars/date-time))




### `holiday1` ([`DateTime`](/scalars/date-time))




### `holiday2` ([`DateTime`](/scalars/date-time))




### `createdAt` ([`DateTime`](/scalars/date-time))




### `updatedAt` ([`DateTime`](/scalars/date-time))




### `Schedule` ([`Schedule`](/objects/schedule))




### `scheduleId` ([`Int`](/scalars/int))






