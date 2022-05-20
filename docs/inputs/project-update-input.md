---
id: project-update-input
title: ProjectUpdateInput
---

 # ProjectUpdateInput





```graphql
type ProjectUpdateInput {
  id: String
  name: String
  slug: String
  description: String
  image: FileUpdateOneWithoutProjectInput
  buildings: BuildingUpdateManyWithoutProjectInput
  createdAt: DateTime
  updatedAt: DateTime
}
```


## Fields

### `id` ([`String`](/scalars/string))




### `name` ([`String`](/scalars/string))




### `slug` ([`String`](/scalars/string))




### `description` ([`String`](/scalars/string))




### `image` ([`FileUpdateOneWithoutProjectInput`](/inputs/file-update-one-without-project-input))




### `buildings` ([`BuildingUpdateManyWithoutProjectInput`](/inputs/building-update-many-without-project-input))




### `createdAt` ([`DateTime`](/scalars/date-time))




### `updatedAt` ([`DateTime`](/scalars/date-time))






