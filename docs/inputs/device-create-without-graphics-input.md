---
id: device-create-without-graphics-input
title: DeviceCreateWithoutGraphicsInput
---

 # DeviceCreateWithoutGraphicsInput





```graphql
type DeviceCreateWithoutGraphicsInput {
  connection: DeviceConnection!
  productType: String!
  alias: String
  serialNumber: Int
  networkId: Int
  floor: String
  room: String
  building: BuildingCreateNestedOneWithoutDevicesInput
  inputs: InputCreateNestedManyWithoutDeviceInput
  outputs: OutputCreateNestedManyWithoutDeviceInput
  pids: PidCreateNestedManyWithoutDeviceInput
  variables: VariableCreateNestedManyWithoutDeviceInput
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




### `building` ([`BuildingCreateNestedOneWithoutDevicesInput`](/inputs/building-create-nested-one-without-devices-input))




### `inputs` ([`InputCreateNestedManyWithoutDeviceInput`](/inputs/input-create-nested-many-without-device-input))




### `outputs` ([`OutputCreateNestedManyWithoutDeviceInput`](/inputs/output-create-nested-many-without-device-input))




### `pids` ([`PidCreateNestedManyWithoutDeviceInput`](/inputs/pid-create-nested-many-without-device-input))




### `variables` ([`VariableCreateNestedManyWithoutDeviceInput`](/inputs/variable-create-nested-many-without-device-input))




### `programs` ([`ProgramCreateNestedManyWithoutDeviceInput`](/inputs/program-create-nested-many-without-device-input))




### `holidays` ([`HolidayCreateNestedManyWithoutDeviceInput`](/inputs/holiday-create-nested-many-without-device-input))




### `schedules` ([`ScheduleCreateNestedManyWithoutDeviceInput`](/inputs/schedule-create-nested-many-without-device-input))




### `createdAt` ([`DateTime`](/scalars/date-time))




### `updatedAt` ([`DateTime`](/scalars/date-time))






