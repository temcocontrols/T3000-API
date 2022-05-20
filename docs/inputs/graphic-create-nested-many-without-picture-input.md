---
id: graphic-create-nested-many-without-picture-input
title: GraphicCreateNestedManyWithoutPictureInput
---

 # GraphicCreateNestedManyWithoutPictureInput





```graphql
type GraphicCreateNestedManyWithoutPictureInput {
  create: [GraphicCreateWithoutPictureInput!]
  connectOrCreate: [GraphicCreateOrConnectWithoutPictureInput!]
  createMany: GraphicCreateManyPictureInputEnvelope
  connect: [GraphicFilterUnique!]
}
```


## Fields

### `create` ([`GraphicCreateWithoutPictureInput`](/inputs/graphic-create-without-picture-input))




### `connectOrCreate` ([`GraphicCreateOrConnectWithoutPictureInput`](/inputs/graphic-create-or-connect-without-picture-input))




### `createMany` ([`GraphicCreateManyPictureInputEnvelope`](/inputs/graphic-create-many-picture-input-envelope))




### `connect` ([`GraphicFilterUnique`](/inputs/graphic-filter-unique))






