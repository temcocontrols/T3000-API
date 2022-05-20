---
id: building-create-without-project-input
title: BuildingCreateWithoutProjectInput
---

 # BuildingCreateWithoutProjectInput





```graphql
type BuildingCreateWithoutProjectInput {
  title: String!
  protocol: BuildingProtocol
  ip: String
  modbusTcpPort: String
  comPort: String
  baudRate: Int
  country: String
  state: String
  city: String
  street: String
  zip: String
  engineering: String
  devices: DeviceCreateNestedManyWithoutBuildingInput
  createdAt: DateTime
  updatedAt: DateTime
}
```


## Fields

### `title` ([`String`](/scalars/string))




### `protocol` ([`BuildingProtocol`](/enums/building-protocol))




### `ip` ([`String`](/scalars/string))




### `modbusTcpPort` ([`String`](/scalars/string))




### `comPort` ([`String`](/scalars/string))




### `baudRate` ([`Int`](/scalars/int))




### `country` ([`String`](/scalars/string))




### `state` ([`String`](/scalars/string))




### `city` ([`String`](/scalars/string))




### `street` ([`String`](/scalars/string))




### `zip` ([`String`](/scalars/string))




### `engineering` ([`String`](/scalars/string))




### `devices` ([`DeviceCreateNestedManyWithoutBuildingInput`](/inputs/device-create-nested-many-without-building-input))




### `createdAt` ([`DateTime`](/scalars/date-time))




### `updatedAt` ([`DateTime`](/scalars/date-time))






