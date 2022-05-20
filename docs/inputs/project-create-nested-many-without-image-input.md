---
id: project-create-nested-many-without-image-input
title: ProjectCreateNestedManyWithoutImageInput
---

 # ProjectCreateNestedManyWithoutImageInput





```graphql
type ProjectCreateNestedManyWithoutImageInput {
  create: [ProjectCreateWithoutImageInput!]
  connectOrCreate: [ProjectCreateOrConnectWithoutImageInput!]
  createMany: ProjectCreateManyImageInputEnvelope
  connect: [ProjectFilterUnique!]
}
```


## Fields

### `create` ([`ProjectCreateWithoutImageInput`](/inputs/project-create-without-image-input))




### `connectOrCreate` ([`ProjectCreateOrConnectWithoutImageInput`](/inputs/project-create-or-connect-without-image-input))




### `createMany` ([`ProjectCreateManyImageInputEnvelope`](/inputs/project-create-many-image-input-envelope))




### `connect` ([`ProjectFilterUnique`](/inputs/project-filter-unique))






