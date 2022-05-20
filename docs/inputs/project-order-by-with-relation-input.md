---
id: project-order-by-with-relation-input
title: ProjectOrderByWithRelationInput
---

 # ProjectOrderByWithRelationInput





```graphql
type ProjectOrderByWithRelationInput {
  id: SortOrder
  name: SortOrder
  slug: SortOrder
  description: SortOrder
  imageFileId: SortOrder
  image: FileOrderByWithRelationInput
  buildings: BuildingOrderByRelationAggregateInput
  createdAt: SortOrder
  updatedAt: SortOrder
}
```


## Fields

### `id` ([`SortOrder`](/enums/sort-order))




### `name` ([`SortOrder`](/enums/sort-order))




### `slug` ([`SortOrder`](/enums/sort-order))




### `description` ([`SortOrder`](/enums/sort-order))




### `imageFileId` ([`SortOrder`](/enums/sort-order))




### `image` ([`FileOrderByWithRelationInput`](/inputs/file-order-by-with-relation-input))




### `buildings` ([`BuildingOrderByRelationAggregateInput`](/inputs/building-order-by-relation-aggregate-input))




### `createdAt` ([`SortOrder`](/enums/sort-order))




### `updatedAt` ([`SortOrder`](/enums/sort-order))






