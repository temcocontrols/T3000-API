---
id: file
title: File
---

 # File





```graphql
type File {
  id: Int!
  name: String!
  mimeType: String!
  path: String!
  size: Int
  createdAt: DateTime!
  updatedAt: DateTime!
  meta: JSON
  tags: [String!]!
  Graphic(
  where: GraphicFilter
  orderBy: GraphicOrderByWithRelationInput
  cursor: GraphicFilterUnique
  take: Int
  skip: Int
  distinct: [GraphicScalarFieldEnum!]
): [Graphic!]!
  Project(
  where: ProjectFilter
  orderBy: ProjectOrderByWithRelationInput
  cursor: ProjectFilterUnique
  take: Int
  skip: Int
  distinct: [ProjectScalarFieldEnum!]
): [Project!]!
  _count: FileCountOutputType
}
```


## Fields

### `id` ([`Int`](/scalars/int))




### `name` ([`String`](/scalars/string))




### `mimeType` ([`String`](/scalars/string))




### `path` ([`String`](/scalars/string))




### `size` ([`Int`](/scalars/int))




### `createdAt` ([`DateTime`](/scalars/date-time))




### `updatedAt` ([`DateTime`](/scalars/date-time))




### `meta` ([`JSON`](/scalars/json))




### `tags` ([`String`](/scalars/string))




### `Graphic` ([`Graphic`](/objects/graphic))


- #### `where` ([`GraphicFilter`](/inputs/graphic-filter))




- #### `orderBy` ([`GraphicOrderByWithRelationInput`](/inputs/graphic-order-by-with-relation-input))




- #### `cursor` ([`GraphicFilterUnique`](/inputs/graphic-filter-unique))




- #### `take` ([`Int`](/scalars/int))




- #### `skip` ([`Int`](/scalars/int))




- #### `distinct` ([`GraphicScalarFieldEnum`](/enums/graphic-scalar-field-enum))




### `Project` ([`Project`](/objects/project))


- #### `where` ([`ProjectFilter`](/inputs/project-filter))




- #### `orderBy` ([`ProjectOrderByWithRelationInput`](/inputs/project-order-by-with-relation-input))




- #### `cursor` ([`ProjectFilterUnique`](/inputs/project-filter-unique))




- #### `take` ([`Int`](/scalars/int))




- #### `skip` ([`Int`](/scalars/int))




- #### `distinct` ([`ProjectScalarFieldEnum`](/enums/project-scalar-field-enum))




### `_count` ([`FileCountOutputType`](/objects/file-count-output-type))






