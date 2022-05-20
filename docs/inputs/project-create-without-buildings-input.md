---
id: project-create-without-buildings-input
title: ProjectCreateWithoutBuildingsInput
---

 # ProjectCreateWithoutBuildingsInput





```graphql
type ProjectCreateWithoutBuildingsInput {
  id: String
  name: String!
  slug: String
  description: String
  image: FileCreateNestedOneWithoutProjectInput
  createdAt: DateTime
  updatedAt: DateTime
}
```


## Fields

### `id` ([`String`](/scalars/string))




### `name` ([`String`](/scalars/string))




### `slug` ([`String`](/scalars/string))




### `description` ([`String`](/scalars/string))




### `image` ([`FileCreateNestedOneWithoutProjectInput`](/inputs/file-create-nested-one-without-project-input))




### `createdAt` ([`DateTime`](/scalars/date-time))




### `updatedAt` ([`DateTime`](/scalars/date-time))






