---
id: schedule
title: Schedule
---

 # Schedule





```graphql
type Schedule {
  id: Int!
  index: Int!
  label: String
  fullLabel: String
  autoManual: AutoManual!
  output: String
  holiday1: String
  status1: String
  holiday2: String
  status2: String
  binaryArray: String
  createdAt: DateTime!
  updatedAt: DateTime!
  Device: Device
  deviceId: Int
  times(
  where: ScheduleTimeFilter
  orderBy: ScheduleTimeOrderByWithRelationInput
  cursor: ScheduleTimeFilterUnique
  take: Int
  skip: Int
  distinct: [ScheduleTimeScalarFieldEnum!]
): [ScheduleTime!]!
  _count: ScheduleCountOutputType
}
```


## Fields

### `id` ([`Int`](/scalars/int))




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




### `Device` ([`Device`](/objects/device))




### `deviceId` ([`Int`](/scalars/int))




### `times` ([`ScheduleTime`](/objects/schedule-time))


- #### `where` ([`ScheduleTimeFilter`](/inputs/schedule-time-filter))




- #### `orderBy` ([`ScheduleTimeOrderByWithRelationInput`](/inputs/schedule-time-order-by-with-relation-input))




- #### `cursor` ([`ScheduleTimeFilterUnique`](/inputs/schedule-time-filter-unique))




- #### `take` ([`Int`](/scalars/int))




- #### `skip` ([`Int`](/scalars/int))




- #### `distinct` ([`ScheduleTimeScalarFieldEnum`](/enums/schedule-time-scalar-field-enum))




### `_count` ([`ScheduleCountOutputType`](/objects/schedule-count-output-type))






