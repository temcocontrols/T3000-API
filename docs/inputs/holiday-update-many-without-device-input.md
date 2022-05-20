---
id: holiday-update-many-without-device-input
title: HolidayUpdateManyWithoutDeviceInput
---

 # HolidayUpdateManyWithoutDeviceInput





```graphql
type HolidayUpdateManyWithoutDeviceInput {
  create: [HolidayCreateWithoutDeviceInput!]
  connectOrCreate: [HolidayCreateOrConnectWithoutDeviceInput!]
  upsert: [HolidayUpsertWithWhereUniqueWithoutDeviceInput!]
  createMany: HolidayCreateManyDeviceInputEnvelope
  set: [HolidayFilterUnique!]
  disconnect: [HolidayFilterUnique!]
  delete: [HolidayFilterUnique!]
  connect: [HolidayFilterUnique!]
  update: [HolidayUpdateWithWhereUniqueWithoutDeviceInput!]
  updateMany: [HolidayUpdateManyWithWhereWithoutDeviceInput!]
  deleteMany: [HolidayScalarFilter!]
}
```


## Fields

### `create` ([`HolidayCreateWithoutDeviceInput`](/inputs/holiday-create-without-device-input))




### `connectOrCreate` ([`HolidayCreateOrConnectWithoutDeviceInput`](/inputs/holiday-create-or-connect-without-device-input))




### `upsert` ([`HolidayUpsertWithWhereUniqueWithoutDeviceInput`](/inputs/holiday-upsert-with-where-unique-without-device-input))




### `createMany` ([`HolidayCreateManyDeviceInputEnvelope`](/inputs/holiday-create-many-device-input-envelope))




### `set` ([`HolidayFilterUnique`](/inputs/holiday-filter-unique))




### `disconnect` ([`HolidayFilterUnique`](/inputs/holiday-filter-unique))




### `delete` ([`HolidayFilterUnique`](/inputs/holiday-filter-unique))




### `connect` ([`HolidayFilterUnique`](/inputs/holiday-filter-unique))




### `update` ([`HolidayUpdateWithWhereUniqueWithoutDeviceInput`](/inputs/holiday-update-with-where-unique-without-device-input))




### `updateMany` ([`HolidayUpdateManyWithWhereWithoutDeviceInput`](/inputs/holiday-update-many-with-where-without-device-input))




### `deleteMany` ([`HolidayScalarFilter`](/inputs/holiday-scalar-filter))






