---
id: building-update-without-devices-input
title: BuildingUpdateWithoutDevicesInput
---

 # BuildingUpdateWithoutDevicesInput





```graphql
type BuildingUpdateWithoutDevicesInput {
  title: String
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
  createdAt: DateTime
  updatedAt: DateTime
  Project: ProjectUpdateOneRequiredWithoutBuildingsInput
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




### `createdAt` ([`DateTime`](/scalars/date-time))




### `updatedAt` ([`DateTime`](/scalars/date-time))




### `Project` ([`ProjectUpdateOneRequiredWithoutBuildingsInput`](/inputs/project-update-one-required-without-buildings-input))






