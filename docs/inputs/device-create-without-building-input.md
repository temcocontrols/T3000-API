---
id: device-create-without-building-input
title: DeviceCreateWithoutBuildingInput
---

 # DeviceCreateWithoutBuildingInput





```graphql
type DeviceCreateWithoutBuildingInput {
  connection: DeviceConnection!
  productType: String!
  alias: String
  serialNumber: Int
  networkId: Int
  floor: String
  room: String
  inputs: InputCreateNestedManyWithoutDeviceInput
  outputs: OutputCreateNestedManyWithoutDeviceInput
  pids: PidCreateNestedManyWithoutDeviceInput
  variables: VariableCreateNestedManyWithoutDeviceInput
  graphics: GraphicCreateNestedManyWithoutDeviceInput
  programs: ProgramCreateNestedManyWithoutDeviceInput
  holidays: HolidayCreateNestedManyWithoutDeviceInput
  schedules: ScheduleCreateNestedManyWithoutDeviceInput
  createdAt: DateTime
  updatedAt: DateTime
}
```


## Fields

### `connection` ([`DeviceConnection`](/enums/device-connection))




### `productType` ([`String`](/scalars/string))




### `alias` ([`String`](/scalars/string))




### `serialNumber` ([`Int`](/scalars/int))




### `networkId` ([`Int`](/scalars/int))




### `floor` ([`String`](/scalars/string))




### `room` ([`String`](/scalars/string))




### `inputs` ([`InputCreateNestedManyWithoutDeviceInput`](/inputs/input-create-nested-many-without-device-input))




### `outputs` ([`OutputCreateNestedManyWithoutDeviceInput`](/inputs/output-create-nested-many-without-device-input))




### `pids` ([`PidCreateNestedManyWithoutDeviceInput`](/inputs/pid-create-nested-many-without-device-input))




### `variables` ([`VariableCreateNestedManyWithoutDeviceInput`](/inputs/variable-create-nested-many-without-device-input))




### `graphics` ([`GraphicCreateNestedManyWithoutDeviceInput`](/inputs/graphic-create-nested-many-without-device-input))




### `programs` ([`ProgramCreateNestedManyWithoutDeviceInput`](/inputs/program-create-nested-many-without-device-input))




### `holidays` ([`HolidayCreateNestedManyWithoutDeviceInput`](/inputs/holiday-create-nested-many-without-device-input))




### `schedules` ([`ScheduleCreateNestedManyWithoutDeviceInput`](/inputs/schedule-create-nested-many-without-device-input))




### `createdAt` ([`DateTime`](/scalars/date-time))




### `updatedAt` ([`DateTime`](/scalars/date-time))






