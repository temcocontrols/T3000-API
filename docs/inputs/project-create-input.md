---
id: project-create-input
title: ProjectCreateInput
---

 # ProjectCreateInput





```graphql
type ProjectCreateInput {
  id: String
  name: String!
  slug: String
  description: String
  image: FileCreateNestedOneWithoutProjectInput
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




### `image` ([`FileCreateNestedOneWithoutProjectInput`](/inputs/file-create-nested-one-without-project-input))




### `buildings` ([`BuildingCreateNestedManyWithoutProjectInput`](/inputs/building-create-nested-many-without-project-input))




### `createdAt` ([`DateTime`](/scalars/date-time))




### `updatedAt` ([`DateTime`](/scalars/date-time))






