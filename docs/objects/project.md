---
id: project
title: Project
---

 # Project





```graphql
type Project {
  id: String!
  name: String!
  slug: String
  description: String
  imageFileId: Int
  image: File
  buildings(
  where: BuildingFilter
  orderBy: BuildingOrderByWithRelationInput
  cursor: BuildingFilterUnique
  take: Int
  skip: Int
  distinct: [BuildingScalarFieldEnum!]
): [Building!]!
  createdAt: DateTime!
  updatedAt: DateTime!
  _count: ProjectCountOutputType
}
```


## Fields

### `id` ([`String`](/scalars/string))




### `name` ([`String`](/scalars/string))




### `slug` ([`String`](/scalars/string))




### `description` ([`String`](/scalars/string))




### `imageFileId` ([`Int`](/scalars/int))




### `image` ([`File`](/objects/file))




### `buildings` ([`Building`](/objects/building))


- #### `where` ([`BuildingFilter`](/inputs/building-filter))




- #### `orderBy` ([`BuildingOrderByWithRelationInput`](/inputs/building-order-by-with-relation-input))




- #### `cursor` ([`BuildingFilterUnique`](/inputs/building-filter-unique))




- #### `take` ([`Int`](/scalars/int))




- #### `skip` ([`Int`](/scalars/int))




- #### `distinct` ([`BuildingScalarFieldEnum`](/enums/building-scalar-field-enum))




### `createdAt` ([`DateTime`](/scalars/date-time))




### `updatedAt` ([`DateTime`](/scalars/date-time))




### `_count` ([`ProjectCountOutputType`](/objects/project-count-output-type))






