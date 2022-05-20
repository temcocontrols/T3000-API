---
id: file-update-without-graphic-input
title: FileUpdateWithoutGraphicInput
---

 # FileUpdateWithoutGraphicInput





```graphql
type FileUpdateWithoutGraphicInput {
  name: String
  mimeType: String
  path: String
  size: Int
  createdAt: DateTime
  updatedAt: DateTime
  meta: JSON
  tags: [String!]
  Project: ProjectUpdateManyWithoutImageInput
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




### `Project` ([`ProjectUpdateManyWithoutImageInput`](/inputs/project-update-many-without-image-input))






