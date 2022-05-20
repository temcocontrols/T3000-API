---
id: device-update-without-graphics-input
title: DeviceUpdateWithoutGraphicsInput
---

 # DeviceUpdateWithoutGraphicsInput





```graphql
type DeviceUpdateWithoutGraphicsInput {
  connection: DeviceConnection
  productType: String
  alias: String
  serialNumber: Int
  networkId: Int
  floor: String
  room: String
  building: BuildingUpdateOneWithoutDevicesInput
  inputs: InputUpdateManyWithoutDeviceInput
  outputs: OutputUpdateManyWithoutDeviceInput
  pids: PidUpdateManyWithoutDeviceInput
  variables: VariableUpdateManyWithoutDeviceInput
  programs: ProgramUpdateManyWithoutDeviceInput
  holidays: HolidayUpdateManyWithoutDeviceInput
  schedules: ScheduleUpdateManyWithoutDeviceInput
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




### `building` ([`BuildingUpdateOneWithoutDevicesInput`](/inputs/building-update-one-without-devices-input))




### `inputs` ([`InputUpdateManyWithoutDeviceInput`](/inputs/input-update-many-without-device-input))




### `outputs` ([`OutputUpdateManyWithoutDeviceInput`](/inputs/output-update-many-without-device-input))




### `pids` ([`PidUpdateManyWithoutDeviceInput`](/inputs/pid-update-many-without-device-input))




### `variables` ([`VariableUpdateManyWithoutDeviceInput`](/inputs/variable-update-many-without-device-input))




### `programs` ([`ProgramUpdateManyWithoutDeviceInput`](/inputs/program-update-many-without-device-input))




### `holidays` ([`HolidayUpdateManyWithoutDeviceInput`](/inputs/holiday-update-many-without-device-input))




### `schedules` ([`ScheduleUpdateManyWithoutDeviceInput`](/inputs/schedule-update-many-without-device-input))




### `createdAt` ([`DateTime`](/scalars/date-time))




### `updatedAt` ([`DateTime`](/scalars/date-time))






