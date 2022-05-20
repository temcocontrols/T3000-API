---
id: projects-count
title: projectsCount
---

 # projectsCount





```graphql
projectsCount(
  where: ProjectFilter
  orderBy: [ProjectOrderByWithRelationInput]
  cursor: ProjectFilterUnique
  skip: Int
  take: Int
  distinct: [ProjectScalarFieldEnum]
): Int!

```


## Arguments

### `where` ([`ProjectFilter`](/inputs/project-filter))




### `orderBy` ([`ProjectOrderByWithRelationInput`](/inputs/project-order-by-with-relation-input))




### `cursor` ([`ProjectFilterUnique`](/inputs/project-filter-unique))




### `skip` ([`Int`](/scalars/int))




### `take` ([`Int`](/scalars/int))




### `distinct` ([`ProjectScalarFieldEnum`](/enums/project-scalar-field-enum))




## Type

### [`Int`](/scalars/int) 

The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.




