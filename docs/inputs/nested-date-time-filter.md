---
id: nested-date-time-filter
title: NestedDateTimeFilter
---

 # NestedDateTimeFilter





```graphql
type NestedDateTimeFilter {
  equals: DateTime
  in: [DateTime!]
  notIn: [DateTime!]
  lt: DateTime
  lte: DateTime
  gt: DateTime
  gte: DateTime
  not: NestedDateTimeFilter
}
```


## Fields

### `equals` ([`DateTime`](/scalars/date-time))




### `in` ([`DateTime`](/scalars/date-time))




### `notIn` ([`DateTime`](/scalars/date-time))




### `lt` ([`DateTime`](/scalars/date-time))




### `lte` ([`DateTime`](/scalars/date-time))




### `gt` ([`DateTime`](/scalars/date-time))




### `gte` ([`DateTime`](/scalars/date-time))




### `not` ([`NestedDateTimeFilter`](/inputs/nested-date-time-filter))






