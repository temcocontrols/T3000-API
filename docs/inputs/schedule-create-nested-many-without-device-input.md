---
id: schedule-create-nested-many-without-device-input
title: ScheduleCreateNestedManyWithoutDeviceInput
---

 # ScheduleCreateNestedManyWithoutDeviceInput





```graphql
type ScheduleCreateNestedManyWithoutDeviceInput {
  create: [ScheduleCreateWithoutDeviceInput!]
  connectOrCreate: [ScheduleCreateOrConnectWithoutDeviceInput!]
  createMany: ScheduleCreateManyDeviceInputEnvelope
  connect: [ScheduleFilterUnique!]
}
```


## Fields

### `create` ([`ScheduleCreateWithoutDeviceInput`](/inputs/schedule-create-without-device-input))




### `connectOrCreate` ([`ScheduleCreateOrConnectWithoutDeviceInput`](/inputs/schedule-create-or-connect-without-device-input))




### `createMany` ([`ScheduleCreateManyDeviceInputEnvelope`](/inputs/schedule-create-many-device-input-envelope))




### `connect` ([`ScheduleFilterUnique`](/inputs/schedule-filter-unique))






