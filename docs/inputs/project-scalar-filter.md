---
id: project-scalar-filter
title: ProjectScalarFilter
---

 # ProjectScalarFilter





```graphql
type ProjectScalarFilter {
  AND: [ProjectScalarFilter!]
  OR: [ProjectScalarFilter!]
  NOT: [ProjectScalarFilter!]
  id: StringFilter
  name: StringFilter
  slug: StringNullableFilter
  description: StringNullableFilter
  imageFileId: IntNullableFilter
  createdAt: DateTimeFilter
  updatedAt: DateTimeFilter
}
```


## Fields

### `AND` ([`ProjectScalarFilter`](/inputs/project-scalar-filter))




### `OR` ([`ProjectScalarFilter`](/inputs/project-scalar-filter))




### `NOT` ([`ProjectScalarFilter`](/inputs/project-scalar-filter))




### `id` ([`StringFilter`](/inputs/string-filter))




### `name` ([`StringFilter`](/inputs/string-filter))




### `slug` ([`StringNullableFilter`](/inputs/string-nullable-filter))




### `description` ([`StringNullableFilter`](/inputs/string-nullable-filter))




### `imageFileId` ([`IntNullableFilter`](/inputs/int-nullable-filter))




### `createdAt` ([`DateTimeFilter`](/inputs/date-time-filter))




### `updatedAt` ([`DateTimeFilter`](/inputs/date-time-filter))






