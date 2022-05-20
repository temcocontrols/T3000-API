---
id: file-update-without-project-input
title: FileUpdateWithoutProjectInput
---

 # FileUpdateWithoutProjectInput





```graphql
type FileUpdateWithoutProjectInput {
  name: String
  mimeType: String
  path: String
  size: Int
  createdAt: DateTime
  updatedAt: DateTime
  meta: JSON
  tags: [String!]
  Graphic: GraphicUpdateManyWithoutPictureInput
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




### `Graphic` ([`GraphicUpdateManyWithoutPictureInput`](/inputs/graphic-update-many-without-picture-input))






