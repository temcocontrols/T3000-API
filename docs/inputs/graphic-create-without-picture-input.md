---
id: graphic-create-without-picture-input
title: GraphicCreateWithoutPictureInput
---

 # GraphicCreateWithoutPictureInput





```graphql
type GraphicCreateWithoutPictureInput {
  index: Int!
  label: String
  fullLabel: String
  elementCount: Int
  binaryArray: String
  createdAt: DateTime
  updatedAt: DateTime
  Device: DeviceCreateNestedOneWithoutGraphicsInput
}
```


## Fields

### `index` ([`Int`](/scalars/int))




### `label` ([`String`](/scalars/string))




### `fullLabel` ([`String`](/scalars/string))




### `elementCount` ([`Int`](/scalars/int))




### `binaryArray` ([`String`](/scalars/string))




### `createdAt` ([`DateTime`](/scalars/date-time))




### `updatedAt` ([`DateTime`](/scalars/date-time))




### `Device` ([`DeviceCreateNestedOneWithoutGraphicsInput`](/inputs/device-create-nested-one-without-graphics-input))






