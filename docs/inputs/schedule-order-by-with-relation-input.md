---
id: schedule-order-by-with-relation-input
title: ScheduleOrderByWithRelationInput
---

 # ScheduleOrderByWithRelationInput





```graphql
type ScheduleOrderByWithRelationInput {
  id: SortOrder
  index: SortOrder
  label: SortOrder
  fullLabel: SortOrder
  autoManual: SortOrder
  output: SortOrder
  holiday1: SortOrder
  status1: SortOrder
  holiday2: SortOrder
  status2: SortOrder
  binaryArray: SortOrder
  createdAt: SortOrder
  updatedAt: SortOrder
  Device: DeviceOrderByWithRelationInput
  deviceId: SortOrder
  times: ScheduleTimeOrderByRelationAggregateInput
}
```


## Fields

### `id` ([`SortOrder`](/enums/sort-order))




### `index` ([`SortOrder`](/enums/sort-order))




### `label` ([`SortOrder`](/enums/sort-order))




### `fullLabel` ([`SortOrder`](/enums/sort-order))




### `autoManual` ([`SortOrder`](/enums/sort-order))




### `output` ([`SortOrder`](/enums/sort-order))




### `holiday1` ([`SortOrder`](/enums/sort-order))




### `status1` ([`SortOrder`](/enums/sort-order))




### `holiday2` ([`SortOrder`](/enums/sort-order))




### `status2` ([`SortOrder`](/enums/sort-order))




### `binaryArray` ([`SortOrder`](/enums/sort-order))




### `createdAt` ([`SortOrder`](/enums/sort-order))




### `updatedAt` ([`SortOrder`](/enums/sort-order))




### `Device` ([`DeviceOrderByWithRelationInput`](/inputs/device-order-by-with-relation-input))




### `deviceId` ([`SortOrder`](/enums/sort-order))




### `times` ([`ScheduleTimeOrderByRelationAggregateInput`](/inputs/schedule-time-order-by-relation-aggregate-input))






