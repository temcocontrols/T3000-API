---
id: file-create-without-graphic-input
title: FileCreateWithoutGraphicInput
---

 # FileCreateWithoutGraphicInput





```graphql
type FileCreateWithoutGraphicInput {
  name: String!
  mimeType: String!
  path: String!
  size: Int
  createdAt: DateTime
  updatedAt: DateTime
  meta: JSON
  tags: [String!]
  Project: ProjectCreateNestedManyWithoutImageInput
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




### `Project` ([`ProjectCreateNestedManyWithoutImageInput`](/inputs/project-create-nested-many-without-image-input))






