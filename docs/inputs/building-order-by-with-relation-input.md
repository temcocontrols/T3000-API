---
id: building-order-by-with-relation-input
title: BuildingOrderByWithRelationInput
---

 # BuildingOrderByWithRelationInput





```graphql
type BuildingOrderByWithRelationInput {
  id: SortOrder
  title: SortOrder
  protocol: SortOrder
  ip: SortOrder
  modbusTcpPort: SortOrder
  comPort: SortOrder
  baudRate: SortOrder
  country: SortOrder
  state: SortOrder
  city: SortOrder
  street: SortOrder
  zip: SortOrder
  engineering: SortOrder
  devices: DeviceOrderByRelationAggregateInput
  createdAt: SortOrder
  updatedAt: SortOrder
  Project: ProjectOrderByWithRelationInput
  projectId: SortOrder
}
```


## Fields

### `id` ([`SortOrder`](/enums/sort-order))




### `title` ([`SortOrder`](/enums/sort-order))




### `protocol` ([`SortOrder`](/enums/sort-order))




### `ip` ([`SortOrder`](/enums/sort-order))




### `modbusTcpPort` ([`SortOrder`](/enums/sort-order))




### `comPort` ([`SortOrder`](/enums/sort-order))




### `baudRate` ([`SortOrder`](/enums/sort-order))




### `country` ([`SortOrder`](/enums/sort-order))




### `state` ([`SortOrder`](/enums/sort-order))




### `city` ([`SortOrder`](/enums/sort-order))




### `street` ([`SortOrder`](/enums/sort-order))




### `zip` ([`SortOrder`](/enums/sort-order))




### `engineering` ([`SortOrder`](/enums/sort-order))




### `devices` ([`DeviceOrderByRelationAggregateInput`](/inputs/device-order-by-relation-aggregate-input))




### `createdAt` ([`SortOrder`](/enums/sort-order))




### `updatedAt` ([`SortOrder`](/enums/sort-order))




### `Project` ([`ProjectOrderByWithRelationInput`](/inputs/project-order-by-with-relation-input))




### `projectId` ([`SortOrder`](/enums/sort-order))






