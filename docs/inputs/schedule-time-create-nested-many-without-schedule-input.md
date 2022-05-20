---
id: schedule-time-create-nested-many-without-schedule-input
title: ScheduleTimeCreateNestedManyWithoutScheduleInput
---

 # ScheduleTimeCreateNestedManyWithoutScheduleInput





```graphql
type ScheduleTimeCreateNestedManyWithoutScheduleInput {
  create: [ScheduleTimeCreateWithoutScheduleInput!]
  connectOrCreate: [ScheduleTimeCreateOrConnectWithoutScheduleInput!]
  createMany: ScheduleTimeCreateManyScheduleInputEnvelope
  connect: [ScheduleTimeFilterUnique!]
}
```


## Fields

### `create` ([`ScheduleTimeCreateWithoutScheduleInput`](/inputs/schedule-time-create-without-schedule-input))




### `connectOrCreate` ([`ScheduleTimeCreateOrConnectWithoutScheduleInput`](/inputs/schedule-time-create-or-connect-without-schedule-input))




### `createMany` ([`ScheduleTimeCreateManyScheduleInputEnvelope`](/inputs/schedule-time-create-many-schedule-input-envelope))




### `connect` ([`ScheduleTimeFilterUnique`](/inputs/schedule-time-filter-unique))






