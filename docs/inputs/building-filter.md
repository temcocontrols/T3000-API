---
id: building-filter
title: BuildingFilter
---

 # BuildingFilter





```graphql
type BuildingFilter {
  AND: [BuildingFilter!]
  OR: [BuildingFilter!]
  NOT: [BuildingFilter!]
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
  devices: DeviceListRelationFilter
  createdAt: DateTimeFilter
  updatedAt: DateTimeFilter
  Project: ProjectFilter
  projectId: StringFilter
}
```


## Fields

### `AND` ([`BuildingFilter`](/inputs/building-filter))




### `OR` ([`BuildingFilter`](/inputs/building-filter))




### `NOT` ([`BuildingFilter`](/inputs/building-filter))




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




### `devices` ([`DeviceListRelationFilter`](/inputs/device-list-relation-filter))




### `createdAt` ([`DateTimeFilter`](/inputs/date-time-filter))




### `updatedAt` ([`DateTimeFilter`](/inputs/date-time-filter))




### `Project` ([`ProjectFilter`](/inputs/project-filter))




### `projectId` ([`StringFilter`](/inputs/string-filter))






