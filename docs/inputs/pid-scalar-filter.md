---
id: pid-scalar-filter
title: PidScalarFilter
---

 # PidScalarFilter





```graphql
type PidScalarFilter {
  AND: [PidScalarFilter!]
  OR: [PidScalarFilter!]
  NOT: [PidScalarFilter!]
  id: IntFilter
  index: IntFilter
  input: StringNullableFilter
  inputValue: FloatNullableFilter
  inputUnits: StringNullableFilter
  autoManual: EnumAutoManualFilter
  output: StringNullableFilter
  setpoint: StringNullableFilter
  setpointValue: FloatNullableFilter
  setpointUnits: StringNullableFilter
  action: StringNullableFilter
  pidProp: IntNullableFilter
  pidInt: IntNullableFilter
  pidTime: StringNullableFilter
  pidDer: FloatNullableFilter
  bias: IntNullableFilter
  binaryArray: StringNullableFilter
  createdAt: DateTimeFilter
  updatedAt: DateTimeFilter
  deviceId: IntNullableFilter
}
```


## Fields

### `AND` ([`PidScalarFilter`](/inputs/pid-scalar-filter))




### `OR` ([`PidScalarFilter`](/inputs/pid-scalar-filter))




### `NOT` ([`PidScalarFilter`](/inputs/pid-scalar-filter))




### `id` ([`IntFilter`](/inputs/int-filter))




### `index` ([`IntFilter`](/inputs/int-filter))




### `input` ([`StringNullableFilter`](/inputs/string-nullable-filter))




### `inputValue` ([`FloatNullableFilter`](/inputs/float-nullable-filter))




### `inputUnits` ([`StringNullableFilter`](/inputs/string-nullable-filter))




### `autoManual` ([`EnumAutoManualFilter`](/inputs/enum-auto-manual-filter))




### `output` ([`StringNullableFilter`](/inputs/string-nullable-filter))




### `setpoint` ([`StringNullableFilter`](/inputs/string-nullable-filter))




### `setpointValue` ([`FloatNullableFilter`](/inputs/float-nullable-filter))




### `setpointUnits` ([`StringNullableFilter`](/inputs/string-nullable-filter))




### `action` ([`StringNullableFilter`](/inputs/string-nullable-filter))




### `pidProp` ([`IntNullableFilter`](/inputs/int-nullable-filter))




### `pidInt` ([`IntNullableFilter`](/inputs/int-nullable-filter))




### `pidTime` ([`StringNullableFilter`](/inputs/string-nullable-filter))




### `pidDer` ([`FloatNullableFilter`](/inputs/float-nullable-filter))




### `bias` ([`IntNullableFilter`](/inputs/int-nullable-filter))




### `binaryArray` ([`StringNullableFilter`](/inputs/string-nullable-filter))




### `createdAt` ([`DateTimeFilter`](/inputs/date-time-filter))




### `updatedAt` ([`DateTimeFilter`](/inputs/date-time-filter))




### `deviceId` ([`IntNullableFilter`](/inputs/int-nullable-filter))






