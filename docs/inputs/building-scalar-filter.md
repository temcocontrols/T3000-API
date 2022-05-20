---
id: building-scalar-filter
title: BuildingScalarFilter
---

 # BuildingScalarFilter





```graphql
type BuildingScalarFilter {
  AND: [BuildingScalarFilter!]
  OR: [BuildingScalarFilter!]
  NOT: [BuildingScalarFilter!]
  id: IntFilter
  title: StringFilter
  protocol: EnumBuildingProtocolNullableFilter
  ip: StringNullableFilter
  modbusTcpPort: StringNullableFilter
  comPort: StringNullableFilter
  baudRate: IntNullableFilter
  country: StringNullableFilter
  state: StringNullableFilter
  city: StringNullableFilter
  street: StringNullableFilter
  zip: StringNullableFilter
  engineering: StringFilter
  createdAt: DateTimeFilter
  updatedAt: DateTimeFilter
  projectId: StringFilter
}
```


## Fields

### `AND` ([`BuildingScalarFilter`](/inputs/building-scalar-filter))




### `OR` ([`BuildingScalarFilter`](/inputs/building-scalar-filter))




### `NOT` ([`BuildingScalarFilter`](/inputs/building-scalar-filter))




### `id` ([`IntFilter`](/inputs/int-filter))




### `title` ([`StringFilter`](/inputs/string-filter))




### `protocol` ([`EnumBuildingProtocolNullableFilter`](/inputs/enum-building-protocol-nullable-filter))




### `ip` ([`StringNullableFilter`](/inputs/string-nullable-filter))




### `modbusTcpPort` ([`StringNullableFilter`](/inputs/string-nullable-filter))




### `comPort` ([`StringNullableFilter`](/inputs/string-nullable-filter))




### `baudRate` ([`IntNullableFilter`](/inputs/int-nullable-filter))




### `country` ([`StringNullableFilter`](/inputs/string-nullable-filter))




### `state` ([`StringNullableFilter`](/inputs/string-nullable-filter))




### `city` ([`StringNullableFilter`](/inputs/string-nullable-filter))




### `street` ([`StringNullableFilter`](/inputs/string-nullable-filter))




### `zip` ([`StringNullableFilter`](/inputs/string-nullable-filter))




### `engineering` ([`StringFilter`](/inputs/string-filter))




### `createdAt` ([`DateTimeFilter`](/inputs/date-time-filter))




### `updatedAt` ([`DateTimeFilter`](/inputs/date-time-filter))




### `projectId` ([`StringFilter`](/inputs/string-filter))






