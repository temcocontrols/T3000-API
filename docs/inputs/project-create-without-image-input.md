---
id: project-create-without-image-input
title: ProjectCreateWithoutImageInput
---

 # ProjectCreateWithoutImageInput





```graphql
type ProjectCreateWithoutImageInput {
  id: String
  name: String!
  slug: String
  description: String
  buildings: BuildingCreateNestedManyWithoutProjectInput
  createdAt: DateTime
  updatedAt: DateTime
}
```


## Fields

### `id` ([`String`](/scalars/string))




### `name` ([`String`](/scalars/string))




### `slug` ([`String`](/scalars/string))




### `description` ([`String`](/scalars/string))




### `buildings` ([`BuildingCreateNestedManyWithoutProjectInput`](/inputs/building-create-nested-many-without-project-input))




### `createdAt` ([`DateTime`](/scalars/date-time))




### `updatedAt` ([`DateTime`](/scalars/date-time))






