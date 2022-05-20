---
id: string-filter
title: StringFilter
---

 # StringFilter





```graphql
type StringFilter {
  equals: String
  in: [String!]
  notIn: [String!]
  lt: String
  lte: String
  gt: String
  gte: String
  contains: String
  startsWith: String
  endsWith: String
  mode: QueryMode
  not: NestedStringFilter
}
```


## Fields

### `equals` ([`String`](/scalars/string))




### `in` ([`String`](/scalars/string))




### `notIn` ([`String`](/scalars/string))




### `lt` ([`String`](/scalars/string))




### `lte` ([`String`](/scalars/string))




### `gt` ([`String`](/scalars/string))




### `gte` ([`String`](/scalars/string))




### `contains` ([`String`](/scalars/string))




### `startsWith` ([`String`](/scalars/string))




### `endsWith` ([`String`](/scalars/string))




### `mode` ([`QueryMode`](/enums/query-mode))




### `not` ([`NestedStringFilter`](/inputs/nested-string-filter))






