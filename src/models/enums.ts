import { GraphQLEnumType } from 'graphql'

export const SubscriptionAction = new GraphQLEnumType({
  name: 'SubscriptionAction',
  values: {
    CREATE: { value: 'CREATE' },
    UPDATE: { value: 'UPDATE' },
    DELETE: { value: 'DELETE' },
  },
})

export const BuildingProtocol = new GraphQLEnumType({
  name: 'BuildingProtocol',
  values: {
    AUTO: { value: 'AUTO' },
    MODBUS_485: { value: 'MODBUS_485' },
    MODBUS_TCP: { value: 'MODBUS_TCP' },
    BACNET_MSTP: { value: 'BACNET_MSTP' },
    REMOTE_DEVICE: { value: 'REMOTE_DEVICE' },
  },
})

export const DeviceConnection = new GraphQLEnumType({
  name: 'DeviceConnection',
  values: {
    LOCAL_NETWORK: { value: 'LOCAL_NETWORK' },
    SERIAL_PORT: { value: 'SERIAL_PORT' },
    VIRTUAL_DEVICE: { value: 'VIRTUAL_DEVICE' },
  },
})

export const AutoManual = new GraphQLEnumType({
  name: 'AutoManual',
  values: {
    AUTO: { value: 'AUTO' },
    MANUAL: { value: 'MANUAL' },
  },
})

export const FileScalarFieldEnum = new GraphQLEnumType({
  name: 'FileScalarFieldEnum',
  values: {
    id: { value: 'id' },
    name: { value: 'name' },
    mimeType: { value: 'mimeType' },
    path: { value: 'path' },
    size: { value: 'size' },
    createdAt: { value: 'createdAt' },
    updatedAt: { value: 'updatedAt' },
    meta: { value: 'meta' },
    tags: { value: 'tags' },
  },
})

export const ProjectScalarFieldEnum = new GraphQLEnumType({
  name: 'ProjectScalarFieldEnum',
  values: {
    id: { value: 'id' },
    name: { value: 'name' },
    slug: { value: 'slug' },
    description: { value: 'description' },
    imageFileId: { value: 'imageFileId' },
    createdAt: { value: 'createdAt' },
    updatedAt: { value: 'updatedAt' },
  },
})

export const BuildingScalarFieldEnum = new GraphQLEnumType({
  name: 'BuildingScalarFieldEnum',
  values: {
    id: { value: 'id' },
    title: { value: 'title' },
    protocol: { value: 'protocol' },
    ip: { value: 'ip' },
    modbusTcpPort: { value: 'modbusTcpPort' },
    comPort: { value: 'comPort' },
    baudRate: { value: 'baudRate' },
    country: { value: 'country' },
    state: { value: 'state' },
    city: { value: 'city' },
    street: { value: 'street' },
    zip: { value: 'zip' },
    engineering: { value: 'engineering' },
    createdAt: { value: 'createdAt' },
    updatedAt: { value: 'updatedAt' },
    projectId: { value: 'projectId' },
  },
})

export const DeviceScalarFieldEnum = new GraphQLEnumType({
  name: 'DeviceScalarFieldEnum',
  values: {
    id: { value: 'id' },
    connection: { value: 'connection' },
    productType: { value: 'productType' },
    alias: { value: 'alias' },
    serialNumber: { value: 'serialNumber' },
    networkId: { value: 'networkId' },
    floor: { value: 'floor' },
    room: { value: 'room' },
    buildingId: { value: 'buildingId' },
    customRanges: { value: 'customRanges' },
    createdAt: { value: 'createdAt' },
    updatedAt: { value: 'updatedAt' },
  },
})

export const InputScalarFieldEnum = new GraphQLEnumType({
  name: 'InputScalarFieldEnum',
  values: {
    id: { value: 'id' },
    index: { value: 'index' },
    panel: { value: 'panel' },
    label: { value: 'label' },
    fullLabel: { value: 'fullLabel' },
    autoManual: { value: 'autoManual' },
    value: { value: 'value' },
    units: { value: 'units' },
    range: { value: 'range' },
    calibration: { value: 'calibration' },
    sign: { value: 'sign' },
    filter: { value: 'filter' },
    status: { value: 'status' },
    signalType: { value: 'signalType' },
    type: { value: 'type' },
    binaryArray: { value: 'binaryArray' },
    createdAt: { value: 'createdAt' },
    updatedAt: { value: 'updatedAt' },
    deviceId: { value: 'deviceId' },
  },
})

export const OutputScalarFieldEnum = new GraphQLEnumType({
  name: 'OutputScalarFieldEnum',
  values: {
    id: { value: 'id' },
    index: { value: 'index' },
    panel: { value: 'panel' },
    label: { value: 'label' },
    fullLabel: { value: 'fullLabel' },
    autoManual: { value: 'autoManual' },
    hoaSwitch: { value: 'hoaSwitch' },
    value: { value: 'value' },
    units: { value: 'units' },
    range: { value: 'range' },
    lowVoltage: { value: 'lowVoltage' },
    highVoltage: { value: 'highVoltage' },
    pwmPeriod: { value: 'pwmPeriod' },
    status: { value: 'status' },
    type: { value: 'type' },
    binaryArray: { value: 'binaryArray' },
    createdAt: { value: 'createdAt' },
    updatedAt: { value: 'updatedAt' },
    deviceId: { value: 'deviceId' },
  },
})

export const VariableScalarFieldEnum = new GraphQLEnumType({
  name: 'VariableScalarFieldEnum',
  values: {
    id: { value: 'id' },
    index: { value: 'index' },
    label: { value: 'label' },
    fullLabel: { value: 'fullLabel' },
    autoManual: { value: 'autoManual' },
    value: { value: 'value' },
    units: { value: 'units' },
    binaryArray: { value: 'binaryArray' },
    createdAt: { value: 'createdAt' },
    updatedAt: { value: 'updatedAt' },
    deviceId: { value: 'deviceId' },
  },
})

export const ProgramScalarFieldEnum = new GraphQLEnumType({
  name: 'ProgramScalarFieldEnum',
  values: {
    id: { value: 'id' },
    index: { value: 'index' },
    label: { value: 'label' },
    fullLabel: { value: 'fullLabel' },
    status: { value: 'status' },
    autoManual: { value: 'autoManual' },
    size: { value: 'size' },
    executionTime: { value: 'executionTime' },
    sourceCode: { value: 'sourceCode' },
    binaryArray: { value: 'binaryArray' },
    createdAt: { value: 'createdAt' },
    updatedAt: { value: 'updatedAt' },
    deviceId: { value: 'deviceId' },
  },
})

export const PidScalarFieldEnum = new GraphQLEnumType({
  name: 'PidScalarFieldEnum',
  values: {
    id: { value: 'id' },
    index: { value: 'index' },
    input: { value: 'input' },
    inputValue: { value: 'inputValue' },
    inputUnits: { value: 'inputUnits' },
    autoManual: { value: 'autoManual' },
    output: { value: 'output' },
    setpoint: { value: 'setpoint' },
    setpointValue: { value: 'setpointValue' },
    setpointUnits: { value: 'setpointUnits' },
    action: { value: 'action' },
    pidProp: { value: 'pidProp' },
    pidInt: { value: 'pidInt' },
    pidTime: { value: 'pidTime' },
    pidDer: { value: 'pidDer' },
    bias: { value: 'bias' },
    binaryArray: { value: 'binaryArray' },
    createdAt: { value: 'createdAt' },
    updatedAt: { value: 'updatedAt' },
    deviceId: { value: 'deviceId' },
  },
})

export const GraphicScalarFieldEnum = new GraphQLEnumType({
  name: 'GraphicScalarFieldEnum',
  values: {
    id: { value: 'id' },
    index: { value: 'index' },
    label: { value: 'label' },
    fullLabel: { value: 'fullLabel' },
    fileId: { value: 'fileId' },
    elementCount: { value: 'elementCount' },
    binaryArray: { value: 'binaryArray' },
    createdAt: { value: 'createdAt' },
    updatedAt: { value: 'updatedAt' },
    deviceId: { value: 'deviceId' },
  },
})

export const ScheduleScalarFieldEnum = new GraphQLEnumType({
  name: 'ScheduleScalarFieldEnum',
  values: {
    id: { value: 'id' },
    index: { value: 'index' },
    label: { value: 'label' },
    fullLabel: { value: 'fullLabel' },
    autoManual: { value: 'autoManual' },
    output: { value: 'output' },
    holiday1: { value: 'holiday1' },
    status1: { value: 'status1' },
    holiday2: { value: 'holiday2' },
    status2: { value: 'status2' },
    binaryArray: { value: 'binaryArray' },
    createdAt: { value: 'createdAt' },
    updatedAt: { value: 'updatedAt' },
    deviceId: { value: 'deviceId' },
  },
})

export const HolidayScalarFieldEnum = new GraphQLEnumType({
  name: 'HolidayScalarFieldEnum',
  values: {
    id: { value: 'id' },
    index: { value: 'index' },
    label: { value: 'label' },
    fullLabel: { value: 'fullLabel' },
    autoManual: { value: 'autoManual' },
    value: { value: 'value' },
    days: { value: 'days' },
    binaryArray: { value: 'binaryArray' },
    createdAt: { value: 'createdAt' },
    updatedAt: { value: 'updatedAt' },
    deviceId: { value: 'deviceId' },
  },
})

export const ScheduleTimeScalarFieldEnum = new GraphQLEnumType({
  name: 'ScheduleTimeScalarFieldEnum',
  values: {
    id: { value: 'id' },
    status: { value: 'status' },
    monday: { value: 'monday' },
    tuesday: { value: 'tuesday' },
    wednesday: { value: 'wednesday' },
    thursday: { value: 'thursday' },
    friday: { value: 'friday' },
    saterday: { value: 'saterday' },
    sunday: { value: 'sunday' },
    holiday1: { value: 'holiday1' },
    holiday2: { value: 'holiday2' },
    createdAt: { value: 'createdAt' },
    updatedAt: { value: 'updatedAt' },
    scheduleId: { value: 'scheduleId' },
  },
})

export const SortOrder = new GraphQLEnumType({
  name: 'SortOrder',
  values: {
    asc: { value: 'asc' },
    desc: { value: 'desc' },
  },
})

export const NullableJsonNullValueInput = new GraphQLEnumType({
  name: 'NullableJsonNullValueInput',
  values: {
    DbNull: { value: 'DbNull' },
    JsonNull: { value: 'JsonNull' },
  },
})

export const QueryMode = new GraphQLEnumType({
  name: 'QueryMode',
  values: {
    default: { value: 'default' },
    insensitive: { value: 'insensitive' },
  },
})

export const JsonNullValueFilter = new GraphQLEnumType({
  name: 'JsonNullValueFilter',
  values: {
    DbNull: { value: 'DbNull' },
    JsonNull: { value: 'JsonNull' },
    AnyNull: { value: 'AnyNull' },
  },
})
