---
id: schedule-update-without-device-input
title: ScheduleUpdateWithoutDeviceInput
---

 # ScheduleUpdateWithoutDeviceInput





```graphql
type ScheduleUpdateWithoutDeviceInput {
  index: Int
  label: String
  fullLabel: String
  autoManual: AutoManual
  output: String
  holiday1: String
  status1: String
  holiday2: String
  status2: String
  binaryArray: String
  createdAt: DateTime
  updatedAt: DateTime
  times: ScheduleTimeUpdateManyWithoutScheduleInput
}
```


## Fields

### `index` ([`Int`](/scalars/int))




### `label` ([`String`](/scalars/string))




### `fullLabel` ([`String`](/scalars/string))




### `autoManual` ([`AutoManual`](/enums/auto-manual))




### `output` ([`String`](/scalars/string))




### `holiday1` ([`String`](/scalars/string))




### `status1` ([`String`](/scalars/string))




### `holiday2` ([`String`](/scalars/string))




### `status2` ([`String`](/scalars/string))




### `binaryArray` ([`String`](/scalars/string))




### `createdAt` ([`DateTime`](/scalars/date-time))




### `updatedAt` ([`DateTime`](/scalars/date-time))




### `times` ([`ScheduleTimeUpdateManyWithoutScheduleInput`](/inputs/schedule-time-update-many-without-schedule-input))






