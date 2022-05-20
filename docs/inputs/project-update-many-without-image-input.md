---
id: project-update-many-without-image-input
title: ProjectUpdateManyWithoutImageInput
---

 # ProjectUpdateManyWithoutImageInput





```graphql
type ProjectUpdateManyWithoutImageInput {
  create: [ProjectCreateWithoutImageInput!]
  connectOrCreate: [ProjectCreateOrConnectWithoutImageInput!]
  upsert: [ProjectUpsertWithWhereUniqueWithoutImageInput!]
  createMany: ProjectCreateManyImageInputEnvelope
  set: [ProjectFilterUnique!]
  disconnect: [ProjectFilterUnique!]
  delete: [ProjectFilterUnique!]
  connect: [ProjectFilterUnique!]
  update: [ProjectUpdateWithWhereUniqueWithoutImageInput!]
  updateMany: [ProjectUpdateManyWithWhereWithoutImageInput!]
  deleteMany: [ProjectScalarFilter!]
}
```


## Fields

### `create` ([`ProjectCreateWithoutImageInput`](/inputs/project-create-without-image-input))




### `connectOrCreate` ([`ProjectCreateOrConnectWithoutImageInput`](/inputs/project-create-or-connect-without-image-input))




### `upsert` ([`ProjectUpsertWithWhereUniqueWithoutImageInput`](/inputs/project-upsert-with-where-unique-without-image-input))




### `createMany` ([`ProjectCreateManyImageInputEnvelope`](/inputs/project-create-many-image-input-envelope))




### `set` ([`ProjectFilterUnique`](/inputs/project-filter-unique))




### `disconnect` ([`ProjectFilterUnique`](/inputs/project-filter-unique))




### `delete` ([`ProjectFilterUnique`](/inputs/project-filter-unique))




### `connect` ([`ProjectFilterUnique`](/inputs/project-filter-unique))




### `update` ([`ProjectUpdateWithWhereUniqueWithoutImageInput`](/inputs/project-update-with-where-unique-without-image-input))




### `updateMany` ([`ProjectUpdateManyWithWhereWithoutImageInput`](/inputs/project-update-many-with-where-without-image-input))




### `deleteMany` ([`ProjectScalarFilter`](/inputs/project-scalar-filter))






