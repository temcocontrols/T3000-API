---
id: project-update-without-image-input
title: ProjectUpdateWithoutImageInput
---

 # ProjectUpdateWithoutImageInput





```graphql
type ProjectUpdateWithoutImageInput {
  id: String
  name: String
  slug: String
  description: String
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




### `buildings` ([`BuildingUpdateManyWithoutProjectInput`](/inputs/building-update-many-without-project-input))




### `createdAt` ([`DateTime`](/scalars/date-time))




### `updatedAt` ([`DateTime`](/scalars/date-time))






