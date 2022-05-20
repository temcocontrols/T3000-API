---
id: schedule-update-many-without-device-input
title: ScheduleUpdateManyWithoutDeviceInput
---

 # ScheduleUpdateManyWithoutDeviceInput





```graphql
type ScheduleUpdateManyWithoutDeviceInput {
  create: [ScheduleCreateWithoutDeviceInput!]
  connectOrCreate: [ScheduleCreateOrConnectWithoutDeviceInput!]
  upsert: [ScheduleUpsertWithWhereUniqueWithoutDeviceInput!]
  createMany: ScheduleCreateManyDeviceInputEnvelope
  set: [ScheduleFilterUnique!]
  disconnect: [ScheduleFilterUnique!]
  delete: [ScheduleFilterUnique!]
  connect: [ScheduleFilterUnique!]
  update: [ScheduleUpdateWithWhereUniqueWithoutDeviceInput!]
  updateMany: [ScheduleUpdateManyWithWhereWithoutDeviceInput!]
  deleteMany: [ScheduleScalarFilter!]
}
```


## Fields

### `create` ([`ScheduleCreateWithoutDeviceInput`](/inputs/schedule-create-without-device-input))




### `connectOrCreate` ([`ScheduleCreateOrConnectWithoutDeviceInput`](/inputs/schedule-create-or-connect-without-device-input))




### `upsert` ([`ScheduleUpsertWithWhereUniqueWithoutDeviceInput`](/inputs/schedule-upsert-with-where-unique-without-device-input))




### `createMany` ([`ScheduleCreateManyDeviceInputEnvelope`](/inputs/schedule-create-many-device-input-envelope))




### `set` ([`ScheduleFilterUnique`](/inputs/schedule-filter-unique))




### `disconnect` ([`ScheduleFilterUnique`](/inputs/schedule-filter-unique))




### `delete` ([`ScheduleFilterUnique`](/inputs/schedule-filter-unique))




### `connect` ([`ScheduleFilterUnique`](/inputs/schedule-filter-unique))




### `update` ([`ScheduleUpdateWithWhereUniqueWithoutDeviceInput`](/inputs/schedule-update-with-where-unique-without-device-input))




### `updateMany` ([`ScheduleUpdateManyWithWhereWithoutDeviceInput`](/inputs/schedule-update-many-with-where-without-device-input))




### `deleteMany` ([`ScheduleScalarFilter`](/inputs/schedule-scalar-filter))






