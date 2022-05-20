---
id: device-order-by-with-relation-input
title: DeviceOrderByWithRelationInput
---

 # DeviceOrderByWithRelationInput





```graphql
type DeviceOrderByWithRelationInput {
  id: SortOrder
  connection: SortOrder
  productType: SortOrder
  alias: SortOrder
  serialNumber: SortOrder
  networkId: SortOrder
  floor: SortOrder
  room: SortOrder
  buildingId: SortOrder
  building: BuildingOrderByWithRelationInput
  inputs: InputOrderByRelationAggregateInput
  outputs: OutputOrderByRelationAggregateInput
  pids: PidOrderByRelationAggregateInput
  variables: VariableOrderByRelationAggregateInput
  graphics: GraphicOrderByRelationAggregateInput
  programs: ProgramOrderByRelationAggregateInput
  holidays: HolidayOrderByRelationAggregateInput
  schedules: ScheduleOrderByRelationAggregateInput
  createdAt: SortOrder
  updatedAt: SortOrder
}
```


## Fields

### `id` ([`SortOrder`](/enums/sort-order))




### `connection` ([`SortOrder`](/enums/sort-order))




### `productType` ([`SortOrder`](/enums/sort-order))




### `alias` ([`SortOrder`](/enums/sort-order))




### `serialNumber` ([`SortOrder`](/enums/sort-order))




### `networkId` ([`SortOrder`](/enums/sort-order))




### `floor` ([`SortOrder`](/enums/sort-order))




### `room` ([`SortOrder`](/enums/sort-order))




### `buildingId` ([`SortOrder`](/enums/sort-order))




### `building` ([`BuildingOrderByWithRelationInput`](/inputs/building-order-by-with-relation-input))




### `inputs` ([`InputOrderByRelationAggregateInput`](/inputs/input-order-by-relation-aggregate-input))




### `outputs` ([`OutputOrderByRelationAggregateInput`](/inputs/output-order-by-relation-aggregate-input))




### `pids` ([`PidOrderByRelationAggregateInput`](/inputs/pid-order-by-relation-aggregate-input))




### `variables` ([`VariableOrderByRelationAggregateInput`](/inputs/variable-order-by-relation-aggregate-input))




### `graphics` ([`GraphicOrderByRelationAggregateInput`](/inputs/graphic-order-by-relation-aggregate-input))




### `programs` ([`ProgramOrderByRelationAggregateInput`](/inputs/program-order-by-relation-aggregate-input))




### `holidays` ([`HolidayOrderByRelationAggregateInput`](/inputs/holiday-order-by-relation-aggregate-input))




### `schedules` ([`ScheduleOrderByRelationAggregateInput`](/inputs/schedule-order-by-relation-aggregate-input))




### `createdAt` ([`SortOrder`](/enums/sort-order))




### `updatedAt` ([`SortOrder`](/enums/sort-order))






