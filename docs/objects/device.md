---
id: device
title: Device
---

 # Device





```graphql
type Device {
  id: Int!
  connection: DeviceConnection!
  productType: String!
  alias: String
  serialNumber: Int
  networkId: Int
  floor: String
  room: String
  buildingId: Int
  building: Building
  inputs(
  where: InputFilter
  orderBy: InputOrderByWithRelationInput
  cursor: InputFilterUnique
  take: Int
  skip: Int
  distinct: [InputScalarFieldEnum!]
): [Input!]!
  outputs(
  where: OutputFilter
  orderBy: OutputOrderByWithRelationInput
  cursor: OutputFilterUnique
  take: Int
  skip: Int
  distinct: [OutputScalarFieldEnum!]
): [Output!]!
  pids(
  where: PidFilter
  orderBy: PidOrderByWithRelationInput
  cursor: PidFilterUnique
  take: Int
  skip: Int
  distinct: [PidScalarFieldEnum!]
): [Pid!]!
  variables(
  where: VariableFilter
  orderBy: VariableOrderByWithRelationInput
  cursor: VariableFilterUnique
  take: Int
  skip: Int
  distinct: [VariableScalarFieldEnum!]
): [Variable!]!
  graphics(
  where: GraphicFilter
  orderBy: GraphicOrderByWithRelationInput
  cursor: GraphicFilterUnique
  take: Int
  skip: Int
  distinct: [GraphicScalarFieldEnum!]
): [Graphic!]!
  programs(
  where: ProgramFilter
  orderBy: ProgramOrderByWithRelationInput
  cursor: ProgramFilterUnique
  take: Int
  skip: Int
  distinct: [ProgramScalarFieldEnum!]
): [Program!]!
  holidays(
  where: HolidayFilter
  orderBy: HolidayOrderByWithRelationInput
  cursor: HolidayFilterUnique
  take: Int
  skip: Int
  distinct: [HolidayScalarFieldEnum!]
): [Holiday!]!
  schedules(
  where: ScheduleFilter
  orderBy: ScheduleOrderByWithRelationInput
  cursor: ScheduleFilterUnique
  take: Int
  skip: Int
  distinct: [ScheduleScalarFieldEnum!]
): [Schedule!]!
  createdAt: DateTime!
  updatedAt: DateTime!
  _count: DeviceCountOutputType
}
```


## Fields

### `id` ([`Int`](/scalars/int))




### `connection` ([`DeviceConnection`](/enums/device-connection))




### `productType` ([`String`](/scalars/string))




### `alias` ([`String`](/scalars/string))




### `serialNumber` ([`Int`](/scalars/int))




### `networkId` ([`Int`](/scalars/int))




### `floor` ([`String`](/scalars/string))




### `room` ([`String`](/scalars/string))




### `buildingId` ([`Int`](/scalars/int))




### `building` ([`Building`](/objects/building))




### `inputs` ([`Input`](/objects/input))


- #### `where` ([`InputFilter`](/inputs/input-filter))




- #### `orderBy` ([`InputOrderByWithRelationInput`](/inputs/input-order-by-with-relation-input))




- #### `cursor` ([`InputFilterUnique`](/inputs/input-filter-unique))




- #### `take` ([`Int`](/scalars/int))




- #### `skip` ([`Int`](/scalars/int))




- #### `distinct` ([`InputScalarFieldEnum`](/enums/input-scalar-field-enum))




### `outputs` ([`Output`](/objects/output))


- #### `where` ([`OutputFilter`](/inputs/output-filter))




- #### `orderBy` ([`OutputOrderByWithRelationInput`](/inputs/output-order-by-with-relation-input))




- #### `cursor` ([`OutputFilterUnique`](/inputs/output-filter-unique))




- #### `take` ([`Int`](/scalars/int))




- #### `skip` ([`Int`](/scalars/int))




- #### `distinct` ([`OutputScalarFieldEnum`](/enums/output-scalar-field-enum))




### `pids` ([`Pid`](/objects/pid))


- #### `where` ([`PidFilter`](/inputs/pid-filter))




- #### `orderBy` ([`PidOrderByWithRelationInput`](/inputs/pid-order-by-with-relation-input))




- #### `cursor` ([`PidFilterUnique`](/inputs/pid-filter-unique))




- #### `take` ([`Int`](/scalars/int))




- #### `skip` ([`Int`](/scalars/int))




- #### `distinct` ([`PidScalarFieldEnum`](/enums/pid-scalar-field-enum))




### `variables` ([`Variable`](/objects/variable))


- #### `where` ([`VariableFilter`](/inputs/variable-filter))




- #### `orderBy` ([`VariableOrderByWithRelationInput`](/inputs/variable-order-by-with-relation-input))




- #### `cursor` ([`VariableFilterUnique`](/inputs/variable-filter-unique))




- #### `take` ([`Int`](/scalars/int))




- #### `skip` ([`Int`](/scalars/int))




- #### `distinct` ([`VariableScalarFieldEnum`](/enums/variable-scalar-field-enum))




### `graphics` ([`Graphic`](/objects/graphic))


- #### `where` ([`GraphicFilter`](/inputs/graphic-filter))




- #### `orderBy` ([`GraphicOrderByWithRelationInput`](/inputs/graphic-order-by-with-relation-input))




- #### `cursor` ([`GraphicFilterUnique`](/inputs/graphic-filter-unique))




- #### `take` ([`Int`](/scalars/int))




- #### `skip` ([`Int`](/scalars/int))




- #### `distinct` ([`GraphicScalarFieldEnum`](/enums/graphic-scalar-field-enum))




### `programs` ([`Program`](/objects/program))


- #### `where` ([`ProgramFilter`](/inputs/program-filter))




- #### `orderBy` ([`ProgramOrderByWithRelationInput`](/inputs/program-order-by-with-relation-input))




- #### `cursor` ([`ProgramFilterUnique`](/inputs/program-filter-unique))




- #### `take` ([`Int`](/scalars/int))




- #### `skip` ([`Int`](/scalars/int))




- #### `distinct` ([`ProgramScalarFieldEnum`](/enums/program-scalar-field-enum))




### `holidays` ([`Holiday`](/objects/holiday))


- #### `where` ([`HolidayFilter`](/inputs/holiday-filter))




- #### `orderBy` ([`HolidayOrderByWithRelationInput`](/inputs/holiday-order-by-with-relation-input))




- #### `cursor` ([`HolidayFilterUnique`](/inputs/holiday-filter-unique))




- #### `take` ([`Int`](/scalars/int))




- #### `skip` ([`Int`](/scalars/int))




- #### `distinct` ([`HolidayScalarFieldEnum`](/enums/holiday-scalar-field-enum))




### `schedules` ([`Schedule`](/objects/schedule))


- #### `where` ([`ScheduleFilter`](/inputs/schedule-filter))




- #### `orderBy` ([`ScheduleOrderByWithRelationInput`](/inputs/schedule-order-by-with-relation-input))




- #### `cursor` ([`ScheduleFilterUnique`](/inputs/schedule-filter-unique))




- #### `take` ([`Int`](/scalars/int))




- #### `skip` ([`Int`](/scalars/int))




- #### `distinct` ([`ScheduleScalarFieldEnum`](/enums/schedule-scalar-field-enum))




### `createdAt` ([`DateTime`](/scalars/date-time))




### `updatedAt` ([`DateTime`](/scalars/date-time))




### `_count` ([`DeviceCountOutputType`](/objects/device-count-output-type))






