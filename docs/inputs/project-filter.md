---
id: project-filter
title: ProjectFilter
---

 # ProjectFilter





```graphql
type ProjectFilter {
  AND: [ProjectFilter!]
  OR: [ProjectFilter!]
  NOT: [ProjectFilter!]
  id: StringFilter
  name: StringFilter
  slug: StringNullableFilter
  description: StringNullableFilter
  imageFileId: IntNullableFilter
  image: FileFilter
  buildings: BuildingListRelationFilter
  createdAt: DateTimeFilter
  updatedAt: DateTimeFilter
}
```


## Fields

### `AND` ([`ProjectFilter`](/inputs/project-filter))




### `OR` ([`ProjectFilter`](/inputs/project-filter))




### `NOT` ([`ProjectFilter`](/inputs/project-filter))




### `id` ([`StringFilter`](/inputs/string-filter))




### `name` ([`StringFilter`](/inputs/string-filter))




### `slug` ([`StringNullableFilter`](/inputs/string-nullable-filter))




### `description` ([`StringNullableFilter`](/inputs/string-nullable-filter))




### `imageFileId` ([`IntNullableFilter`](/inputs/int-nullable-filter))




### `image` ([`FileFilter`](/inputs/file-filter))




### `buildings` ([`BuildingListRelationFilter`](/inputs/building-list-relation-filter))




### `createdAt` ([`DateTimeFilter`](/inputs/date-time-filter))




### `updatedAt` ([`DateTimeFilter`](/inputs/date-time-filter))






