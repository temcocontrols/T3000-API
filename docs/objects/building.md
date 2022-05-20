---
id: building
title: Building
---

 # Building





```graphql
type Building {
  id: Int!
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
  engineering: String!
  devices(
  where: DeviceFilter
  orderBy: DeviceOrderByWithRelationInput
  cursor: DeviceFilterUnique
  take: Int
  skip: Int
  distinct: [DeviceScalarFieldEnum!]
): [Device!]!
  createdAt: DateTime!
  updatedAt: DateTime!
  Project: Project!
  projectId: String!
  _count: BuildingCountOutputType
}
```


## Fields

### `id` ([`Int`](/scalars/int))




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




### `devices` ([`Device`](/objects/device))


- #### `where` ([`DeviceFilter`](/inputs/device-filter))




- #### `orderBy` ([`DeviceOrderByWithRelationInput`](/inputs/device-order-by-with-relation-input))




- #### `cursor` ([`DeviceFilterUnique`](/inputs/device-filter-unique))




- #### `take` ([`Int`](/scalars/int))




- #### `skip` ([`Int`](/scalars/int))




- #### `distinct` ([`DeviceScalarFieldEnum`](/enums/device-scalar-field-enum))




### `createdAt` ([`DateTime`](/scalars/date-time))




### `updatedAt` ([`DateTime`](/scalars/date-time))




### `Project` ([`Project`](/objects/project))




### `projectId` ([`String`](/scalars/string))




### `_count` ([`BuildingCountOutputType`](/objects/building-count-output-type))






