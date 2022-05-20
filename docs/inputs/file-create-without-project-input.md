---
id: file-create-without-project-input
title: FileCreateWithoutProjectInput
---

 # FileCreateWithoutProjectInput





```graphql
type FileCreateWithoutProjectInput {
  name: String!
  mimeType: String!
  path: String!
  size: Int
  createdAt: DateTime
  updatedAt: DateTime
  meta: JSON
  tags: [String!]
  Graphic: GraphicCreateNestedManyWithoutPictureInput
}
```


## Fields

### `name` ([`String`](/scalars/string))




### `mimeType` ([`String`](/scalars/string))




### `path` ([`String`](/scalars/string))




### `size` ([`Int`](/scalars/int))




### `createdAt` ([`DateTime`](/scalars/date-time))




### `updatedAt` ([`DateTime`](/scalars/date-time))




### `meta` ([`JSON`](/scalars/json))




### `tags` ([`String`](/scalars/string))




### `Graphic` ([`GraphicCreateNestedManyWithoutPictureInput`](/inputs/graphic-create-nested-many-without-picture-input))






