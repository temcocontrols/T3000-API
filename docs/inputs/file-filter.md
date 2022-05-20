---
id: file-filter
title: FileFilter
---

 # FileFilter





```graphql
type FileFilter {
  AND: [FileFilter!]
  OR: [FileFilter!]
  NOT: [FileFilter!]
  id: IntFilter
  name: StringFilter
  mimeType: StringFilter
  path: StringFilter
  size: IntNullableFilter
  createdAt: DateTimeFilter
  updatedAt: DateTimeFilter
  meta: JsonNullableFilter
  tags: StringNullableListFilter
  Graphic: GraphicListRelationFilter
  Project: ProjectListRelationFilter
}
```


## Fields

### `AND` ([`FileFilter`](/inputs/file-filter))




### `OR` ([`FileFilter`](/inputs/file-filter))




### `NOT` ([`FileFilter`](/inputs/file-filter))




### `id` ([`IntFilter`](/inputs/int-filter))




### `name` ([`StringFilter`](/inputs/string-filter))




### `mimeType` ([`StringFilter`](/inputs/string-filter))




### `path` ([`StringFilter`](/inputs/string-filter))




### `size` ([`IntNullableFilter`](/inputs/int-nullable-filter))




### `createdAt` ([`DateTimeFilter`](/inputs/date-time-filter))




### `updatedAt` ([`DateTimeFilter`](/inputs/date-time-filter))




### `meta` ([`JsonNullableFilter`](/inputs/json-nullable-filter))




### `tags` ([`StringNullableListFilter`](/inputs/string-nullable-list-filter))




### `Graphic` ([`GraphicListRelationFilter`](/inputs/graphic-list-relation-filter))




### `Project` ([`ProjectListRelationFilter`](/inputs/project-list-relation-filter))






