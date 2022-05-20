---
id: device-filter
title: DeviceFilter
---

 # DeviceFilter





```graphql
type DeviceFilter {
  AND: [DeviceFilter!]
  OR: [DeviceFilter!]
  NOT: [DeviceFilter!]
  id: IntFilter
  connection: EnumDeviceConnectionFilter
  productType: StringFilter
  alias: StringNullableFilter
  serialNumber: IntNullableFilter
  networkId: IntNullableFilter
  floor: StringNullableFilter
  room: StringNullableFilter
  buildingId: IntNullableFilter
  building: BuildingFilter
  inputs: InputListRelationFilter
  outputs: OutputListRelationFilter
  pids: PidListRelationFilter
  variables: VariableListRelationFilter
  graphics: GraphicListRelationFilter
  programs: ProgramListRelationFilter
  holidays: HolidayListRelationFilter
  schedules: ScheduleListRelationFilter
  createdAt: DateTimeFilter
  updatedAt: DateTimeFilter
}
```


## Fields

### `AND` ([`DeviceFilter`](/inputs/device-filter))




### `OR` ([`DeviceFilter`](/inputs/device-filter))




### `NOT` ([`DeviceFilter`](/inputs/device-filter))




### `id` ([`IntFilter`](/inputs/int-filter))




### `connection` ([`EnumDeviceConnectionFilter`](/inputs/enum-device-connection-filter))




### `productType` ([`StringFilter`](/inputs/string-filter))




### `alias` ([`StringNullableFilter`](/inputs/string-nullable-filter))




### `serialNumber` ([`IntNullableFilter`](/inputs/int-nullable-filter))




### `networkId` ([`IntNullableFilter`](/inputs/int-nullable-filter))




### `floor` ([`StringNullableFilter`](/inputs/string-nullable-filter))




### `room` ([`StringNullableFilter`](/inputs/string-nullable-filter))




### `buildingId` ([`IntNullableFilter`](/inputs/int-nullable-filter))




### `building` ([`BuildingFilter`](/inputs/building-filter))




### `inputs` ([`InputListRelationFilter`](/inputs/input-list-relation-filter))




### `outputs` ([`OutputListRelationFilter`](/inputs/output-list-relation-filter))




### `pids` ([`PidListRelationFilter`](/inputs/pid-list-relation-filter))




### `variables` ([`VariableListRelationFilter`](/inputs/variable-list-relation-filter))




### `graphics` ([`GraphicListRelationFilter`](/inputs/graphic-list-relation-filter))




### `programs` ([`ProgramListRelationFilter`](/inputs/program-list-relation-filter))




### `holidays` ([`HolidayListRelationFilter`](/inputs/holiday-list-relation-filter))




### `schedules` ([`ScheduleListRelationFilter`](/inputs/schedule-list-relation-filter))




### `createdAt` ([`DateTimeFilter`](/inputs/date-time-filter))




### `updatedAt` ([`DateTimeFilter`](/inputs/date-time-filter))






