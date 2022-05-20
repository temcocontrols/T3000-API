---
id: holiday-create-nested-many-without-device-input
title: HolidayCreateNestedManyWithoutDeviceInput
---

 # HolidayCreateNestedManyWithoutDeviceInput





```graphql
type HolidayCreateNestedManyWithoutDeviceInput {
  create: [HolidayCreateWithoutDeviceInput!]
  connectOrCreate: [HolidayCreateOrConnectWithoutDeviceInput!]
  createMany: HolidayCreateManyDeviceInputEnvelope
  connect: [HolidayFilterUnique!]
}
```


## Fields

### `create` ([`HolidayCreateWithoutDeviceInput`](/inputs/holiday-create-without-device-input))




### `connectOrCreate` ([`HolidayCreateOrConnectWithoutDeviceInput`](/inputs/holiday-create-or-connect-without-device-input))




### `createMany` ([`HolidayCreateManyDeviceInputEnvelope`](/inputs/holiday-create-many-device-input-envelope))




### `connect` ([`HolidayFilterUnique`](/inputs/holiday-filter-unique))






