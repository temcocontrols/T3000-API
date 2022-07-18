import {
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean,
  GraphQLFloat,
  GraphQLList,
  GraphQLNonNull,
  GraphQLInputObjectType,
} from 'graphql'
import { GraphQLDateTime, GraphQLJSON } from 'graphql-scalars'

import {
  BuildingProtocol,
  DeviceConnection,
  AutoManual,
  FileScalarFieldEnum,
  ProjectScalarFieldEnum,
  BuildingScalarFieldEnum,
  DeviceScalarFieldEnum,
  InputScalarFieldEnum,
  OutputScalarFieldEnum,
  VariableScalarFieldEnum,
  ProgramScalarFieldEnum,
  PidScalarFieldEnum,
  GraphicScalarFieldEnum,
  ScheduleScalarFieldEnum,
  HolidayScalarFieldEnum,
  ScheduleTimeScalarFieldEnum,
  SortOrder,
  NullableJsonNullValueInput,
  QueryMode,
  JsonNullValueFilter,
} from './enums'

export const SimpleStringFilter = new GraphQLInputObjectType({
  name: 'SimpleStringFilter',
  fields: () => ({
    equals: {
      type: GraphQLString,
    },
    in: {
      type: new GraphQLList(new GraphQLNonNull(GraphQLString)),
    },
    notIn: {
      type: new GraphQLList(new GraphQLNonNull(GraphQLString)),
    },
  }),
})

export const FileWhereInput = new GraphQLInputObjectType({
  name: 'FileFilter',
  fields: () => ({
    AND: { type: new GraphQLList(new GraphQLNonNull(FileWhereInput)) },
    OR: { type: new GraphQLList(new GraphQLNonNull(FileWhereInput)) },
    NOT: { type: new GraphQLList(new GraphQLNonNull(FileWhereInput)) },
    id: { type: IntFilter },
    name: { type: StringFilter },
    mimeType: { type: StringFilter },
    path: { type: StringFilter },
    size: { type: IntNullableFilter },
    createdAt: { type: DateTimeFilter },
    updatedAt: { type: DateTimeFilter },
    meta: { type: JsonNullableFilter },
    tags: { type: StringNullableListFilter },
    Graphic: { type: GraphicListRelationFilter },
    Project: { type: ProjectListRelationFilter },
  }),
})

export const FileOrderByWithRelationInput = new GraphQLInputObjectType({
  name: 'FileOrderByWithRelationInput',
  fields: () => ({
    id: { type: SortOrder },
    name: { type: SortOrder },
    mimeType: { type: SortOrder },
    path: { type: SortOrder },
    size: { type: SortOrder },
    createdAt: { type: SortOrder },
    updatedAt: { type: SortOrder },
    meta: { type: SortOrder },
    tags: { type: SortOrder },
    Graphic: { type: GraphicOrderByRelationAggregateInput },
    Project: { type: ProjectOrderByRelationAggregateInput },
  }),
})

export const FileWhereUniqueInput = new GraphQLInputObjectType({
  name: 'FileFilterUnique',
  fields: () => ({
    id: { type: GraphQLInt },
    path: { type: GraphQLString },
  }),
})

export const FileOrderByWithAggregationInput = new GraphQLInputObjectType({
  name: 'FileOrderByWithAggregationInput',
  fields: () => ({
    id: { type: SortOrder },
    name: { type: SortOrder },
    mimeType: { type: SortOrder },
    path: { type: SortOrder },
    size: { type: SortOrder },
    createdAt: { type: SortOrder },
    updatedAt: { type: SortOrder },
    meta: { type: SortOrder },
    tags: { type: SortOrder },
    _count: { type: FileCountOrderByAggregateInput },
    _avg: { type: FileAvgOrderByAggregateInput },
    _max: { type: FileMaxOrderByAggregateInput },
    _min: { type: FileMinOrderByAggregateInput },
    _sum: { type: FileSumOrderByAggregateInput },
  }),
})

export const FileScalarWhereWithAggregatesInput = new GraphQLInputObjectType({
  name: 'FileScalarWhereWithAggregatesInput',
  fields: () => ({
    AND: {
      type: new GraphQLList(
        new GraphQLNonNull(FileScalarWhereWithAggregatesInput),
      ),
    },
    OR: {
      type: new GraphQLList(
        new GraphQLNonNull(FileScalarWhereWithAggregatesInput),
      ),
    },
    NOT: {
      type: new GraphQLList(
        new GraphQLNonNull(FileScalarWhereWithAggregatesInput),
      ),
    },
    id: { type: IntWithAggregatesFilter },
    name: { type: StringWithAggregatesFilter },
    mimeType: { type: StringWithAggregatesFilter },
    path: { type: StringWithAggregatesFilter },
    size: { type: IntNullableWithAggregatesFilter },
    createdAt: { type: DateTimeWithAggregatesFilter },
    updatedAt: { type: DateTimeWithAggregatesFilter },
    meta: { type: JsonNullableWithAggregatesFilter },
    tags: { type: StringNullableListFilter },
  }),
})

export const ProjectWhereInput = new GraphQLInputObjectType({
  name: 'ProjectFilter',
  fields: () => ({
    AND: { type: new GraphQLList(new GraphQLNonNull(ProjectWhereInput)) },
    OR: { type: new GraphQLList(new GraphQLNonNull(ProjectWhereInput)) },
    NOT: { type: new GraphQLList(new GraphQLNonNull(ProjectWhereInput)) },
    id: { type: StringFilter },
    name: { type: StringFilter },
    slug: { type: StringNullableFilter },
    description: { type: StringNullableFilter },
    imageFileId: { type: IntNullableFilter },
    image: { type: FileWhereInput },
    buildings: { type: BuildingListRelationFilter },
    createdAt: { type: DateTimeFilter },
    updatedAt: { type: DateTimeFilter },
  }),
})

export const ProjectOrderByWithRelationInput = new GraphQLInputObjectType({
  name: 'ProjectOrderByWithRelationInput',
  fields: () => ({
    id: { type: SortOrder },
    name: { type: SortOrder },
    slug: { type: SortOrder },
    description: { type: SortOrder },
    imageFileId: { type: SortOrder },
    image: { type: FileOrderByWithRelationInput },
    buildings: { type: BuildingOrderByRelationAggregateInput },
    createdAt: { type: SortOrder },
    updatedAt: { type: SortOrder },
  }),
})

export const ProjectWhereUniqueInput = new GraphQLInputObjectType({
  name: 'ProjectFilterUnique',
  fields: () => ({
    id: { type: GraphQLString },
    slug: { type: GraphQLString },
  }),
})

export const ProjectOrderByWithAggregationInput = new GraphQLInputObjectType({
  name: 'ProjectOrderByWithAggregationInput',
  fields: () => ({
    id: { type: SortOrder },
    name: { type: SortOrder },
    slug: { type: SortOrder },
    description: { type: SortOrder },
    imageFileId: { type: SortOrder },
    createdAt: { type: SortOrder },
    updatedAt: { type: SortOrder },
    _count: { type: ProjectCountOrderByAggregateInput },
    _avg: { type: ProjectAvgOrderByAggregateInput },
    _max: { type: ProjectMaxOrderByAggregateInput },
    _min: { type: ProjectMinOrderByAggregateInput },
    _sum: { type: ProjectSumOrderByAggregateInput },
  }),
})

export const ProjectScalarWhereWithAggregatesInput = new GraphQLInputObjectType(
  {
    name: 'ProjectScalarWhereWithAggregatesInput',
    fields: () => ({
      AND: {
        type: new GraphQLList(
          new GraphQLNonNull(ProjectScalarWhereWithAggregatesInput),
        ),
      },
      OR: {
        type: new GraphQLList(
          new GraphQLNonNull(ProjectScalarWhereWithAggregatesInput),
        ),
      },
      NOT: {
        type: new GraphQLList(
          new GraphQLNonNull(ProjectScalarWhereWithAggregatesInput),
        ),
      },
      id: { type: StringWithAggregatesFilter },
      name: { type: StringWithAggregatesFilter },
      slug: { type: StringNullableWithAggregatesFilter },
      description: { type: StringNullableWithAggregatesFilter },
      imageFileId: { type: IntNullableWithAggregatesFilter },
      createdAt: { type: DateTimeWithAggregatesFilter },
      updatedAt: { type: DateTimeWithAggregatesFilter },
    }),
  },
)

export const BuildingWhereInput = new GraphQLInputObjectType({
  name: 'BuildingFilter',
  fields: () => ({
    AND: { type: new GraphQLList(new GraphQLNonNull(BuildingWhereInput)) },
    OR: { type: new GraphQLList(new GraphQLNonNull(BuildingWhereInput)) },
    NOT: { type: new GraphQLList(new GraphQLNonNull(BuildingWhereInput)) },
    id: { type: IntFilter },
    title: { type: StringFilter },
    protocol: { type: EnumBuildingProtocolNullableFilter },
    ip: { type: StringNullableFilter },
    modbusTcpPort: { type: StringNullableFilter },
    comPort: { type: StringNullableFilter },
    baudRate: { type: IntNullableFilter },
    country: { type: StringNullableFilter },
    state: { type: StringNullableFilter },
    city: { type: StringNullableFilter },
    street: { type: StringNullableFilter },
    zip: { type: StringNullableFilter },
    engineering: { type: StringFilter },
    devices: { type: DeviceListRelationFilter },
    createdAt: { type: DateTimeFilter },
    updatedAt: { type: DateTimeFilter },
    Project: { type: ProjectWhereInput },
    projectId: { type: StringFilter },
  }),
})

export const BuildingOrderByWithRelationInput = new GraphQLInputObjectType({
  name: 'BuildingOrderByWithRelationInput',
  fields: () => ({
    id: { type: SortOrder },
    title: { type: SortOrder },
    protocol: { type: SortOrder },
    ip: { type: SortOrder },
    modbusTcpPort: { type: SortOrder },
    comPort: { type: SortOrder },
    baudRate: { type: SortOrder },
    country: { type: SortOrder },
    state: { type: SortOrder },
    city: { type: SortOrder },
    street: { type: SortOrder },
    zip: { type: SortOrder },
    engineering: { type: SortOrder },
    devices: { type: DeviceOrderByRelationAggregateInput },
    createdAt: { type: SortOrder },
    updatedAt: { type: SortOrder },
    Project: { type: ProjectOrderByWithRelationInput },
    projectId: { type: SortOrder },
  }),
})

export const BuildingWhereUniqueInput = new GraphQLInputObjectType({
  name: 'BuildingFilterUnique',
  fields: () => ({
    id: { type: GraphQLInt },
    title_projectId: { type: BuildingTitleProjectIdCompoundUniqueInput },
  }),
})

export const BuildingOrderByWithAggregationInput = new GraphQLInputObjectType({
  name: 'BuildingOrderByWithAggregationInput',
  fields: () => ({
    id: { type: SortOrder },
    title: { type: SortOrder },
    protocol: { type: SortOrder },
    ip: { type: SortOrder },
    modbusTcpPort: { type: SortOrder },
    comPort: { type: SortOrder },
    baudRate: { type: SortOrder },
    country: { type: SortOrder },
    state: { type: SortOrder },
    city: { type: SortOrder },
    street: { type: SortOrder },
    zip: { type: SortOrder },
    engineering: { type: SortOrder },
    createdAt: { type: SortOrder },
    updatedAt: { type: SortOrder },
    projectId: { type: SortOrder },
    _count: { type: BuildingCountOrderByAggregateInput },
    _avg: { type: BuildingAvgOrderByAggregateInput },
    _max: { type: BuildingMaxOrderByAggregateInput },
    _min: { type: BuildingMinOrderByAggregateInput },
    _sum: { type: BuildingSumOrderByAggregateInput },
  }),
})

export const BuildingScalarWhereWithAggregatesInput =
  new GraphQLInputObjectType({
    name: 'BuildingScalarWhereWithAggregatesInput',
    fields: () => ({
      AND: {
        type: new GraphQLList(
          new GraphQLNonNull(BuildingScalarWhereWithAggregatesInput),
        ),
      },
      OR: {
        type: new GraphQLList(
          new GraphQLNonNull(BuildingScalarWhereWithAggregatesInput),
        ),
      },
      NOT: {
        type: new GraphQLList(
          new GraphQLNonNull(BuildingScalarWhereWithAggregatesInput),
        ),
      },
      id: { type: IntWithAggregatesFilter },
      title: { type: StringWithAggregatesFilter },
      protocol: { type: EnumBuildingProtocolNullableWithAggregatesFilter },
      ip: { type: StringNullableWithAggregatesFilter },
      modbusTcpPort: { type: StringNullableWithAggregatesFilter },
      comPort: { type: StringNullableWithAggregatesFilter },
      baudRate: { type: IntNullableWithAggregatesFilter },
      country: { type: StringNullableWithAggregatesFilter },
      state: { type: StringNullableWithAggregatesFilter },
      city: { type: StringNullableWithAggregatesFilter },
      street: { type: StringNullableWithAggregatesFilter },
      zip: { type: StringNullableWithAggregatesFilter },
      engineering: { type: StringWithAggregatesFilter },
      createdAt: { type: DateTimeWithAggregatesFilter },
      updatedAt: { type: DateTimeWithAggregatesFilter },
      projectId: { type: StringWithAggregatesFilter },
    }),
  })

export const DeviceWhereInput = new GraphQLInputObjectType({
  name: 'DeviceFilter',
  fields: () => ({
    AND: { type: new GraphQLList(new GraphQLNonNull(DeviceWhereInput)) },
    OR: { type: new GraphQLList(new GraphQLNonNull(DeviceWhereInput)) },
    NOT: { type: new GraphQLList(new GraphQLNonNull(DeviceWhereInput)) },
    id: { type: IntFilter },
    connection: { type: EnumDeviceConnectionFilter },
    productType: { type: StringFilter },
    alias: { type: StringNullableFilter },
    serialNumber: { type: IntNullableFilter },
    networkId: { type: IntNullableFilter },
    floor: { type: StringNullableFilter },
    room: { type: StringNullableFilter },
    buildingId: { type: IntNullableFilter },
    building: { type: BuildingWhereInput },
    inputs: { type: InputListRelationFilter },
    outputs: { type: OutputListRelationFilter },
    pids: { type: PidListRelationFilter },
    variables: { type: VariableListRelationFilter },
    graphics: { type: GraphicListRelationFilter },
    programs: { type: ProgramListRelationFilter },
    holidays: { type: HolidayListRelationFilter },
    schedules: { type: ScheduleListRelationFilter },
    createdAt: { type: DateTimeFilter },
    updatedAt: { type: DateTimeFilter },
  }),
})

export const DeviceOrderByWithRelationInput = new GraphQLInputObjectType({
  name: 'DeviceOrderByWithRelationInput',
  fields: () => ({
    id: { type: SortOrder },
    connection: { type: SortOrder },
    productType: { type: SortOrder },
    alias: { type: SortOrder },
    serialNumber: { type: SortOrder },
    networkId: { type: SortOrder },
    floor: { type: SortOrder },
    room: { type: SortOrder },
    buildingId: { type: SortOrder },
    building: { type: BuildingOrderByWithRelationInput },
    inputs: { type: InputOrderByRelationAggregateInput },
    outputs: { type: OutputOrderByRelationAggregateInput },
    pids: { type: PidOrderByRelationAggregateInput },
    variables: { type: VariableOrderByRelationAggregateInput },
    graphics: { type: GraphicOrderByRelationAggregateInput },
    programs: { type: ProgramOrderByRelationAggregateInput },
    holidays: { type: HolidayOrderByRelationAggregateInput },
    schedules: { type: ScheduleOrderByRelationAggregateInput },
    createdAt: { type: SortOrder },
    updatedAt: { type: SortOrder },
  }),
})

export const DeviceWhereUniqueInput = new GraphQLInputObjectType({
  name: 'DeviceFilterUnique',
  fields: () => ({
    id: { type: GraphQLInt },
  }),
})

export const DeviceOrderByWithAggregationInput = new GraphQLInputObjectType({
  name: 'DeviceOrderByWithAggregationInput',
  fields: () => ({
    id: { type: SortOrder },
    connection: { type: SortOrder },
    productType: { type: SortOrder },
    alias: { type: SortOrder },
    serialNumber: { type: SortOrder },
    networkId: { type: SortOrder },
    floor: { type: SortOrder },
    room: { type: SortOrder },
    buildingId: { type: SortOrder },
    createdAt: { type: SortOrder },
    updatedAt: { type: SortOrder },
    _count: { type: DeviceCountOrderByAggregateInput },
    _avg: { type: DeviceAvgOrderByAggregateInput },
    _max: { type: DeviceMaxOrderByAggregateInput },
    _min: { type: DeviceMinOrderByAggregateInput },
    _sum: { type: DeviceSumOrderByAggregateInput },
  }),
})

export const DeviceScalarWhereWithAggregatesInput = new GraphQLInputObjectType({
  name: 'DeviceScalarWhereWithAggregatesInput',
  fields: () => ({
    AND: {
      type: new GraphQLList(
        new GraphQLNonNull(DeviceScalarWhereWithAggregatesInput),
      ),
    },
    OR: {
      type: new GraphQLList(
        new GraphQLNonNull(DeviceScalarWhereWithAggregatesInput),
      ),
    },
    NOT: {
      type: new GraphQLList(
        new GraphQLNonNull(DeviceScalarWhereWithAggregatesInput),
      ),
    },
    id: { type: IntWithAggregatesFilter },
    connection: { type: EnumDeviceConnectionWithAggregatesFilter },
    productType: { type: StringWithAggregatesFilter },
    alias: { type: StringNullableWithAggregatesFilter },
    serialNumber: { type: IntNullableWithAggregatesFilter },
    networkId: { type: IntNullableWithAggregatesFilter },
    floor: { type: StringNullableWithAggregatesFilter },
    room: { type: StringNullableWithAggregatesFilter },
    buildingId: { type: IntNullableWithAggregatesFilter },
    createdAt: { type: DateTimeWithAggregatesFilter },
    updatedAt: { type: DateTimeWithAggregatesFilter },
  }),
})

export const InputWhereInput = new GraphQLInputObjectType({
  name: 'InputFilter',
  fields: () => ({
    AND: { type: new GraphQLList(new GraphQLNonNull(InputWhereInput)) },
    OR: { type: new GraphQLList(new GraphQLNonNull(InputWhereInput)) },
    NOT: { type: new GraphQLList(new GraphQLNonNull(InputWhereInput)) },
    id: { type: IntFilter },
    index: { type: IntFilter },
    panel: { type: IntFilter },
    label: { type: StringNullableFilter },
    fullLabel: { type: StringNullableFilter },
    autoManual: { type: EnumAutoManualFilter },
    value: { type: StringNullableFilter },
    units: { type: StringNullableFilter },
    range: { type: StringNullableFilter },
    calibration: { type: FloatNullableFilter },
    sign: { type: StringNullableFilter },
    filter: { type: IntNullableFilter },
    status: { type: StringFilter },
    signalType: { type: StringNullableFilter },
    type: { type: StringNullableFilter },
    binaryArray: { type: StringNullableFilter },
    createdAt: { type: DateTimeFilter },
    updatedAt: { type: DateTimeFilter },
    Device: { type: DeviceWhereInput },
    deviceId: { type: IntNullableFilter },
  }),
})

export const InputOrderByWithRelationInput = new GraphQLInputObjectType({
  name: 'InputOrderByWithRelationInput',
  fields: () => ({
    id: { type: SortOrder },
    index: { type: SortOrder },
    panel: { type: SortOrder },
    label: { type: SortOrder },
    fullLabel: { type: SortOrder },
    autoManual: { type: SortOrder },
    value: { type: SortOrder },
    units: { type: SortOrder },
    range: { type: SortOrder },
    calibration: { type: SortOrder },
    sign: { type: SortOrder },
    filter: { type: SortOrder },
    status: { type: SortOrder },
    signalType: { type: SortOrder },
    type: { type: SortOrder },
    binaryArray: { type: SortOrder },
    createdAt: { type: SortOrder },
    updatedAt: { type: SortOrder },
    Device: { type: DeviceOrderByWithRelationInput },
    deviceId: { type: SortOrder },
  }),
})

export const InputWhereUniqueInput = new GraphQLInputObjectType({
  name: 'InputFilterUnique',
  fields: () => ({
    id: { type: GraphQLInt },
    index_deviceId: { type: InputIndexDeviceIdCompoundUniqueInput },
  }),
})

export const InputOrderByWithAggregationInput = new GraphQLInputObjectType({
  name: 'InputOrderByWithAggregationInput',
  fields: () => ({
    id: { type: SortOrder },
    index: { type: SortOrder },
    panel: { type: SortOrder },
    label: { type: SortOrder },
    fullLabel: { type: SortOrder },
    autoManual: { type: SortOrder },
    value: { type: SortOrder },
    units: { type: SortOrder },
    range: { type: SortOrder },
    calibration: { type: SortOrder },
    sign: { type: SortOrder },
    filter: { type: SortOrder },
    status: { type: SortOrder },
    signalType: { type: SortOrder },
    type: { type: SortOrder },
    binaryArray: { type: SortOrder },
    createdAt: { type: SortOrder },
    updatedAt: { type: SortOrder },
    deviceId: { type: SortOrder },
    _count: { type: InputCountOrderByAggregateInput },
    _avg: { type: InputAvgOrderByAggregateInput },
    _max: { type: InputMaxOrderByAggregateInput },
    _min: { type: InputMinOrderByAggregateInput },
    _sum: { type: InputSumOrderByAggregateInput },
  }),
})

export const InputScalarWhereWithAggregatesInput = new GraphQLInputObjectType({
  name: 'InputScalarWhereWithAggregatesInput',
  fields: () => ({
    AND: {
      type: new GraphQLList(
        new GraphQLNonNull(InputScalarWhereWithAggregatesInput),
      ),
    },
    OR: {
      type: new GraphQLList(
        new GraphQLNonNull(InputScalarWhereWithAggregatesInput),
      ),
    },
    NOT: {
      type: new GraphQLList(
        new GraphQLNonNull(InputScalarWhereWithAggregatesInput),
      ),
    },
    id: { type: IntWithAggregatesFilter },
    index: { type: IntWithAggregatesFilter },
    panel: { type: IntWithAggregatesFilter },
    label: { type: StringNullableWithAggregatesFilter },
    fullLabel: { type: StringNullableWithAggregatesFilter },
    autoManual: { type: EnumAutoManualWithAggregatesFilter },
    value: { type: StringNullableWithAggregatesFilter },
    units: { type: StringNullableWithAggregatesFilter },
    range: { type: StringNullableWithAggregatesFilter },
    calibration: { type: FloatNullableWithAggregatesFilter },
    sign: { type: StringNullableWithAggregatesFilter },
    filter: { type: IntNullableWithAggregatesFilter },
    status: { type: StringWithAggregatesFilter },
    signalType: { type: StringNullableWithAggregatesFilter },
    type: { type: StringNullableWithAggregatesFilter },
    binaryArray: { type: StringNullableWithAggregatesFilter },
    createdAt: { type: DateTimeWithAggregatesFilter },
    updatedAt: { type: DateTimeWithAggregatesFilter },
    deviceId: { type: IntNullableWithAggregatesFilter },
  }),
})

export const OutputWhereInput = new GraphQLInputObjectType({
  name: 'OutputFilter',
  fields: () => ({
    AND: { type: new GraphQLList(new GraphQLNonNull(OutputWhereInput)) },
    OR: { type: new GraphQLList(new GraphQLNonNull(OutputWhereInput)) },
    NOT: { type: new GraphQLList(new GraphQLNonNull(OutputWhereInput)) },
    id: { type: IntFilter },
    index: { type: IntFilter },
    panel: { type: IntFilter },
    label: { type: StringNullableFilter },
    fullLabel: { type: StringNullableFilter },
    autoManual: { type: EnumAutoManualNullableFilter },
    hoaSwitch: { type: StringNullableFilter },
    value: { type: StringNullableFilter },
    units: { type: StringNullableFilter },
    range: { type: StringNullableFilter },
    lowVoltage: { type: FloatNullableFilter },
    highVoltage: { type: FloatNullableFilter },
    pwmPeriod: { type: IntNullableFilter },
    status: { type: StringFilter },
    type: { type: StringNullableFilter },
    binaryArray: { type: StringNullableFilter },
    createdAt: { type: DateTimeFilter },
    updatedAt: { type: DateTimeFilter },
    Device: { type: DeviceWhereInput },
    deviceId: { type: IntNullableFilter },
  }),
})

export const OutputOrderByWithRelationInput = new GraphQLInputObjectType({
  name: 'OutputOrderByWithRelationInput',
  fields: () => ({
    id: { type: SortOrder },
    index: { type: SortOrder },
    panel: { type: SortOrder },
    label: { type: SortOrder },
    fullLabel: { type: SortOrder },
    autoManual: { type: SortOrder },
    hoaSwitch: { type: SortOrder },
    value: { type: SortOrder },
    units: { type: SortOrder },
    range: { type: SortOrder },
    lowVoltage: { type: SortOrder },
    highVoltage: { type: SortOrder },
    pwmPeriod: { type: SortOrder },
    status: { type: SortOrder },
    type: { type: SortOrder },
    binaryArray: { type: SortOrder },
    createdAt: { type: SortOrder },
    updatedAt: { type: SortOrder },
    Device: { type: DeviceOrderByWithRelationInput },
    deviceId: { type: SortOrder },
  }),
})

export const OutputWhereUniqueInput = new GraphQLInputObjectType({
  name: 'OutputFilterUnique',
  fields: () => ({
    id: { type: GraphQLInt },
    index_deviceId: { type: OutputIndexDeviceIdCompoundUniqueInput },
  }),
})

export const OutputOrderByWithAggregationInput = new GraphQLInputObjectType({
  name: 'OutputOrderByWithAggregationInput',
  fields: () => ({
    id: { type: SortOrder },
    index: { type: SortOrder },
    panel: { type: SortOrder },
    label: { type: SortOrder },
    fullLabel: { type: SortOrder },
    autoManual: { type: SortOrder },
    hoaSwitch: { type: SortOrder },
    value: { type: SortOrder },
    units: { type: SortOrder },
    range: { type: SortOrder },
    lowVoltage: { type: SortOrder },
    highVoltage: { type: SortOrder },
    pwmPeriod: { type: SortOrder },
    status: { type: SortOrder },
    type: { type: SortOrder },
    binaryArray: { type: SortOrder },
    createdAt: { type: SortOrder },
    updatedAt: { type: SortOrder },
    deviceId: { type: SortOrder },
    _count: { type: OutputCountOrderByAggregateInput },
    _avg: { type: OutputAvgOrderByAggregateInput },
    _max: { type: OutputMaxOrderByAggregateInput },
    _min: { type: OutputMinOrderByAggregateInput },
    _sum: { type: OutputSumOrderByAggregateInput },
  }),
})

export const OutputScalarWhereWithAggregatesInput = new GraphQLInputObjectType({
  name: 'OutputScalarWhereWithAggregatesInput',
  fields: () => ({
    AND: {
      type: new GraphQLList(
        new GraphQLNonNull(OutputScalarWhereWithAggregatesInput),
      ),
    },
    OR: {
      type: new GraphQLList(
        new GraphQLNonNull(OutputScalarWhereWithAggregatesInput),
      ),
    },
    NOT: {
      type: new GraphQLList(
        new GraphQLNonNull(OutputScalarWhereWithAggregatesInput),
      ),
    },
    id: { type: IntWithAggregatesFilter },
    index: { type: IntWithAggregatesFilter },
    panel: { type: IntWithAggregatesFilter },
    label: { type: StringNullableWithAggregatesFilter },
    fullLabel: { type: StringNullableWithAggregatesFilter },
    autoManual: { type: EnumAutoManualNullableWithAggregatesFilter },
    hoaSwitch: { type: StringNullableWithAggregatesFilter },
    value: { type: StringNullableWithAggregatesFilter },
    units: { type: StringNullableWithAggregatesFilter },
    range: { type: StringNullableWithAggregatesFilter },
    lowVoltage: { type: FloatNullableWithAggregatesFilter },
    highVoltage: { type: FloatNullableWithAggregatesFilter },
    pwmPeriod: { type: IntNullableWithAggregatesFilter },
    status: { type: StringWithAggregatesFilter },
    type: { type: StringNullableWithAggregatesFilter },
    binaryArray: { type: StringNullableWithAggregatesFilter },
    createdAt: { type: DateTimeWithAggregatesFilter },
    updatedAt: { type: DateTimeWithAggregatesFilter },
    deviceId: { type: IntNullableWithAggregatesFilter },
  }),
})

export const VariableWhereInput = new GraphQLInputObjectType({
  name: 'VariableFilter',
  fields: () => ({
    AND: { type: new GraphQLList(new GraphQLNonNull(VariableWhereInput)) },
    OR: { type: new GraphQLList(new GraphQLNonNull(VariableWhereInput)) },
    NOT: { type: new GraphQLList(new GraphQLNonNull(VariableWhereInput)) },
    id: { type: IntFilter },
    index: { type: IntFilter },
    label: { type: StringNullableFilter },
    fullLabel: { type: StringNullableFilter },
    autoManual: { type: EnumAutoManualFilter },
    value: { type: StringNullableFilter },
    units: { type: StringNullableFilter },
    binaryArray: { type: StringNullableFilter },
    createdAt: { type: DateTimeFilter },
    updatedAt: { type: DateTimeFilter },
    Device: { type: DeviceWhereInput },
    deviceId: { type: IntNullableFilter },
  }),
})

export const VariableOrderByWithRelationInput = new GraphQLInputObjectType({
  name: 'VariableOrderByWithRelationInput',
  fields: () => ({
    id: { type: SortOrder },
    index: { type: SortOrder },
    label: { type: SortOrder },
    fullLabel: { type: SortOrder },
    autoManual: { type: SortOrder },
    value: { type: SortOrder },
    units: { type: SortOrder },
    binaryArray: { type: SortOrder },
    createdAt: { type: SortOrder },
    updatedAt: { type: SortOrder },
    Device: { type: DeviceOrderByWithRelationInput },
    deviceId: { type: SortOrder },
  }),
})

export const VariableWhereUniqueInput = new GraphQLInputObjectType({
  name: 'VariableFilterUnique',
  fields: () => ({
    id: { type: GraphQLInt },
    index_deviceId: { type: VariableIndexDeviceIdCompoundUniqueInput },
  }),
})

export const VariableOrderByWithAggregationInput = new GraphQLInputObjectType({
  name: 'VariableOrderByWithAggregationInput',
  fields: () => ({
    id: { type: SortOrder },
    index: { type: SortOrder },
    label: { type: SortOrder },
    fullLabel: { type: SortOrder },
    autoManual: { type: SortOrder },
    value: { type: SortOrder },
    units: { type: SortOrder },
    binaryArray: { type: SortOrder },
    createdAt: { type: SortOrder },
    updatedAt: { type: SortOrder },
    deviceId: { type: SortOrder },
    _count: { type: VariableCountOrderByAggregateInput },
    _avg: { type: VariableAvgOrderByAggregateInput },
    _max: { type: VariableMaxOrderByAggregateInput },
    _min: { type: VariableMinOrderByAggregateInput },
    _sum: { type: VariableSumOrderByAggregateInput },
  }),
})

export const VariableScalarWhereWithAggregatesInput =
  new GraphQLInputObjectType({
    name: 'VariableScalarWhereWithAggregatesInput',
    fields: () => ({
      AND: {
        type: new GraphQLList(
          new GraphQLNonNull(VariableScalarWhereWithAggregatesInput),
        ),
      },
      OR: {
        type: new GraphQLList(
          new GraphQLNonNull(VariableScalarWhereWithAggregatesInput),
        ),
      },
      NOT: {
        type: new GraphQLList(
          new GraphQLNonNull(VariableScalarWhereWithAggregatesInput),
        ),
      },
      id: { type: IntWithAggregatesFilter },
      index: { type: IntWithAggregatesFilter },
      label: { type: StringNullableWithAggregatesFilter },
      fullLabel: { type: StringNullableWithAggregatesFilter },
      autoManual: { type: EnumAutoManualWithAggregatesFilter },
      value: { type: StringNullableWithAggregatesFilter },
      units: { type: StringNullableWithAggregatesFilter },
      binaryArray: { type: StringNullableWithAggregatesFilter },
      createdAt: { type: DateTimeWithAggregatesFilter },
      updatedAt: { type: DateTimeWithAggregatesFilter },
      deviceId: { type: IntNullableWithAggregatesFilter },
    }),
  })

export const ProgramWhereInput = new GraphQLInputObjectType({
  name: 'ProgramFilter',
  fields: () => ({
    AND: { type: new GraphQLList(new GraphQLNonNull(ProgramWhereInput)) },
    OR: { type: new GraphQLList(new GraphQLNonNull(ProgramWhereInput)) },
    NOT: { type: new GraphQLList(new GraphQLNonNull(ProgramWhereInput)) },
    id: { type: IntFilter },
    index: { type: IntFilter },
    label: { type: StringNullableFilter },
    fullLabel: { type: StringNullableFilter },
    status: { type: StringNullableFilter },
    autoManual: { type: EnumAutoManualFilter },
    size: { type: IntNullableFilter },
    executionTime: { type: IntFilter },
    sourceCode: { type: StringNullableFilter },
    binaryArray: { type: StringNullableFilter },
    createdAt: { type: DateTimeFilter },
    updatedAt: { type: DateTimeFilter },
    Device: { type: DeviceWhereInput },
    deviceId: { type: IntNullableFilter },
  }),
})

export const ProgramOrderByWithRelationInput = new GraphQLInputObjectType({
  name: 'ProgramOrderByWithRelationInput',
  fields: () => ({
    id: { type: SortOrder },
    index: { type: SortOrder },
    label: { type: SortOrder },
    fullLabel: { type: SortOrder },
    status: { type: SortOrder },
    autoManual: { type: SortOrder },
    size: { type: SortOrder },
    executionTime: { type: SortOrder },
    sourceCode: { type: SortOrder },
    binaryArray: { type: SortOrder },
    createdAt: { type: SortOrder },
    updatedAt: { type: SortOrder },
    Device: { type: DeviceOrderByWithRelationInput },
    deviceId: { type: SortOrder },
  }),
})

export const ProgramWhereUniqueInput = new GraphQLInputObjectType({
  name: 'ProgramFilterUnique',
  fields: () => ({
    id: { type: GraphQLInt },
    index_deviceId: { type: ProgramIndexDeviceIdCompoundUniqueInput },
  }),
})

export const ProgramOrderByWithAggregationInput = new GraphQLInputObjectType({
  name: 'ProgramOrderByWithAggregationInput',
  fields: () => ({
    id: { type: SortOrder },
    index: { type: SortOrder },
    label: { type: SortOrder },
    fullLabel: { type: SortOrder },
    status: { type: SortOrder },
    autoManual: { type: SortOrder },
    size: { type: SortOrder },
    executionTime: { type: SortOrder },
    sourceCode: { type: SortOrder },
    binaryArray: { type: SortOrder },
    createdAt: { type: SortOrder },
    updatedAt: { type: SortOrder },
    deviceId: { type: SortOrder },
    _count: { type: ProgramCountOrderByAggregateInput },
    _avg: { type: ProgramAvgOrderByAggregateInput },
    _max: { type: ProgramMaxOrderByAggregateInput },
    _min: { type: ProgramMinOrderByAggregateInput },
    _sum: { type: ProgramSumOrderByAggregateInput },
  }),
})

export const ProgramScalarWhereWithAggregatesInput = new GraphQLInputObjectType(
  {
    name: 'ProgramScalarWhereWithAggregatesInput',
    fields: () => ({
      AND: {
        type: new GraphQLList(
          new GraphQLNonNull(ProgramScalarWhereWithAggregatesInput),
        ),
      },
      OR: {
        type: new GraphQLList(
          new GraphQLNonNull(ProgramScalarWhereWithAggregatesInput),
        ),
      },
      NOT: {
        type: new GraphQLList(
          new GraphQLNonNull(ProgramScalarWhereWithAggregatesInput),
        ),
      },
      id: { type: IntWithAggregatesFilter },
      index: { type: IntWithAggregatesFilter },
      label: { type: StringNullableWithAggregatesFilter },
      fullLabel: { type: StringNullableWithAggregatesFilter },
      status: { type: StringNullableWithAggregatesFilter },
      autoManual: { type: EnumAutoManualWithAggregatesFilter },
      size: { type: IntNullableWithAggregatesFilter },
      executionTime: { type: IntWithAggregatesFilter },
      sourceCode: { type: StringNullableWithAggregatesFilter },
      binaryArray: { type: StringNullableWithAggregatesFilter },
      createdAt: { type: DateTimeWithAggregatesFilter },
      updatedAt: { type: DateTimeWithAggregatesFilter },
      deviceId: { type: IntNullableWithAggregatesFilter },
    }),
  },
)

export const PidWhereInput = new GraphQLInputObjectType({
  name: 'PidFilter',
  fields: () => ({
    AND: { type: new GraphQLList(new GraphQLNonNull(PidWhereInput)) },
    OR: { type: new GraphQLList(new GraphQLNonNull(PidWhereInput)) },
    NOT: { type: new GraphQLList(new GraphQLNonNull(PidWhereInput)) },
    id: { type: IntFilter },
    index: { type: IntFilter },
    input: { type: StringNullableFilter },
    inputValue: { type: StringNullableFilter },
    inputUnits: { type: StringNullableFilter },
    autoManual: { type: EnumAutoManualFilter },
    output: { type: StringNullableFilter },
    setpoint: { type: StringNullableFilter },
    setpointValue: { type: FloatNullableFilter },
    setpointUnits: { type: StringNullableFilter },
    action: { type: StringNullableFilter },
    pidProp: { type: IntNullableFilter },
    pidInt: { type: IntNullableFilter },
    pidTime: { type: StringNullableFilter },
    pidDer: { type: FloatNullableFilter },
    bias: { type: IntNullableFilter },
    binaryArray: { type: StringNullableFilter },
    createdAt: { type: DateTimeFilter },
    updatedAt: { type: DateTimeFilter },
    Device: { type: DeviceWhereInput },
    deviceId: { type: IntNullableFilter },
  }),
})

export const PidOrderByWithRelationInput = new GraphQLInputObjectType({
  name: 'PidOrderByWithRelationInput',
  fields: () => ({
    id: { type: SortOrder },
    index: { type: SortOrder },
    input: { type: SortOrder },
    inputValue: { type: SortOrder },
    inputUnits: { type: SortOrder },
    autoManual: { type: SortOrder },
    output: { type: SortOrder },
    setpoint: { type: SortOrder },
    setpointValue: { type: SortOrder },
    setpointUnits: { type: SortOrder },
    action: { type: SortOrder },
    pidProp: { type: SortOrder },
    pidInt: { type: SortOrder },
    pidTime: { type: SortOrder },
    pidDer: { type: SortOrder },
    bias: { type: SortOrder },
    binaryArray: { type: SortOrder },
    createdAt: { type: SortOrder },
    updatedAt: { type: SortOrder },
    Device: { type: DeviceOrderByWithRelationInput },
    deviceId: { type: SortOrder },
  }),
})

export const PidWhereUniqueInput = new GraphQLInputObjectType({
  name: 'PidFilterUnique',
  fields: () => ({
    id: { type: GraphQLInt },
    index_deviceId: { type: PidIndexDeviceIdCompoundUniqueInput },
  }),
})

export const PidOrderByWithAggregationInput = new GraphQLInputObjectType({
  name: 'PidOrderByWithAggregationInput',
  fields: () => ({
    id: { type: SortOrder },
    index: { type: SortOrder },
    input: { type: SortOrder },
    inputValue: { type: SortOrder },
    inputUnits: { type: SortOrder },
    autoManual: { type: SortOrder },
    output: { type: SortOrder },
    setpoint: { type: SortOrder },
    setpointValue: { type: SortOrder },
    setpointUnits: { type: SortOrder },
    action: { type: SortOrder },
    pidProp: { type: SortOrder },
    pidInt: { type: SortOrder },
    pidTime: { type: SortOrder },
    pidDer: { type: SortOrder },
    bias: { type: SortOrder },
    binaryArray: { type: SortOrder },
    createdAt: { type: SortOrder },
    updatedAt: { type: SortOrder },
    deviceId: { type: SortOrder },
    _count: { type: PidCountOrderByAggregateInput },
    _avg: { type: PidAvgOrderByAggregateInput },
    _max: { type: PidMaxOrderByAggregateInput },
    _min: { type: PidMinOrderByAggregateInput },
    _sum: { type: PidSumOrderByAggregateInput },
  }),
})

export const PidScalarWhereWithAggregatesInput = new GraphQLInputObjectType({
  name: 'PidScalarWhereWithAggregatesInput',
  fields: () => ({
    AND: {
      type: new GraphQLList(
        new GraphQLNonNull(PidScalarWhereWithAggregatesInput),
      ),
    },
    OR: {
      type: new GraphQLList(
        new GraphQLNonNull(PidScalarWhereWithAggregatesInput),
      ),
    },
    NOT: {
      type: new GraphQLList(
        new GraphQLNonNull(PidScalarWhereWithAggregatesInput),
      ),
    },
    id: { type: IntWithAggregatesFilter },
    index: { type: IntWithAggregatesFilter },
    input: { type: StringNullableWithAggregatesFilter },
    inputValue: { type: StringNullableWithAggregatesFilter },
    inputUnits: { type: StringNullableWithAggregatesFilter },
    autoManual: { type: EnumAutoManualWithAggregatesFilter },
    output: { type: StringNullableWithAggregatesFilter },
    setpoint: { type: StringNullableWithAggregatesFilter },
    setpointValue: { type: FloatNullableWithAggregatesFilter },
    setpointUnits: { type: StringNullableWithAggregatesFilter },
    action: { type: StringNullableWithAggregatesFilter },
    pidProp: { type: IntNullableWithAggregatesFilter },
    pidInt: { type: IntNullableWithAggregatesFilter },
    pidTime: { type: StringNullableWithAggregatesFilter },
    pidDer: { type: FloatNullableWithAggregatesFilter },
    bias: { type: IntNullableWithAggregatesFilter },
    binaryArray: { type: StringNullableWithAggregatesFilter },
    createdAt: { type: DateTimeWithAggregatesFilter },
    updatedAt: { type: DateTimeWithAggregatesFilter },
    deviceId: { type: IntNullableWithAggregatesFilter },
  }),
})

export const GraphicWhereInput = new GraphQLInputObjectType({
  name: 'GraphicFilter',
  fields: () => ({
    AND: { type: new GraphQLList(new GraphQLNonNull(GraphicWhereInput)) },
    OR: { type: new GraphQLList(new GraphQLNonNull(GraphicWhereInput)) },
    NOT: { type: new GraphQLList(new GraphQLNonNull(GraphicWhereInput)) },
    id: { type: IntFilter },
    index: { type: IntFilter },
    label: { type: StringNullableFilter },
    fullLabel: { type: StringNullableFilter },
    fileId: { type: IntNullableFilter },
    picture: { type: FileWhereInput },
    elementCount: { type: IntFilter },
    binaryArray: { type: StringNullableFilter },
    createdAt: { type: DateTimeFilter },
    updatedAt: { type: DateTimeFilter },
    Device: { type: DeviceWhereInput },
    deviceId: { type: IntNullableFilter },
  }),
})

export const GraphicOrderByWithRelationInput = new GraphQLInputObjectType({
  name: 'GraphicOrderByWithRelationInput',
  fields: () => ({
    id: { type: SortOrder },
    index: { type: SortOrder },
    label: { type: SortOrder },
    fullLabel: { type: SortOrder },
    fileId: { type: SortOrder },
    picture: { type: FileOrderByWithRelationInput },
    elementCount: { type: SortOrder },
    binaryArray: { type: SortOrder },
    createdAt: { type: SortOrder },
    updatedAt: { type: SortOrder },
    Device: { type: DeviceOrderByWithRelationInput },
    deviceId: { type: SortOrder },
  }),
})

export const GraphicWhereUniqueInput = new GraphQLInputObjectType({
  name: 'GraphicFilterUnique',
  fields: () => ({
    id: { type: GraphQLInt },
    index_deviceId: { type: GraphicIndexDeviceIdCompoundUniqueInput },
  }),
})

export const GraphicOrderByWithAggregationInput = new GraphQLInputObjectType({
  name: 'GraphicOrderByWithAggregationInput',
  fields: () => ({
    id: { type: SortOrder },
    index: { type: SortOrder },
    label: { type: SortOrder },
    fullLabel: { type: SortOrder },
    fileId: { type: SortOrder },
    elementCount: { type: SortOrder },
    binaryArray: { type: SortOrder },
    createdAt: { type: SortOrder },
    updatedAt: { type: SortOrder },
    deviceId: { type: SortOrder },
    _count: { type: GraphicCountOrderByAggregateInput },
    _avg: { type: GraphicAvgOrderByAggregateInput },
    _max: { type: GraphicMaxOrderByAggregateInput },
    _min: { type: GraphicMinOrderByAggregateInput },
    _sum: { type: GraphicSumOrderByAggregateInput },
  }),
})

export const GraphicScalarWhereWithAggregatesInput = new GraphQLInputObjectType(
  {
    name: 'GraphicScalarWhereWithAggregatesInput',
    fields: () => ({
      AND: {
        type: new GraphQLList(
          new GraphQLNonNull(GraphicScalarWhereWithAggregatesInput),
        ),
      },
      OR: {
        type: new GraphQLList(
          new GraphQLNonNull(GraphicScalarWhereWithAggregatesInput),
        ),
      },
      NOT: {
        type: new GraphQLList(
          new GraphQLNonNull(GraphicScalarWhereWithAggregatesInput),
        ),
      },
      id: { type: IntWithAggregatesFilter },
      index: { type: IntWithAggregatesFilter },
      label: { type: StringNullableWithAggregatesFilter },
      fullLabel: { type: StringNullableWithAggregatesFilter },
      fileId: { type: IntNullableWithAggregatesFilter },
      elementCount: { type: IntWithAggregatesFilter },
      binaryArray: { type: StringNullableWithAggregatesFilter },
      createdAt: { type: DateTimeWithAggregatesFilter },
      updatedAt: { type: DateTimeWithAggregatesFilter },
      deviceId: { type: IntNullableWithAggregatesFilter },
    }),
  },
)

export const ScheduleWhereInput = new GraphQLInputObjectType({
  name: 'ScheduleFilter',
  fields: () => ({
    AND: { type: new GraphQLList(new GraphQLNonNull(ScheduleWhereInput)) },
    OR: { type: new GraphQLList(new GraphQLNonNull(ScheduleWhereInput)) },
    NOT: { type: new GraphQLList(new GraphQLNonNull(ScheduleWhereInput)) },
    id: { type: IntFilter },
    index: { type: IntFilter },
    label: { type: StringNullableFilter },
    fullLabel: { type: StringNullableFilter },
    autoManual: { type: EnumAutoManualFilter },
    output: { type: StringNullableFilter },
    holiday1: { type: StringNullableFilter },
    status1: { type: StringNullableFilter },
    holiday2: { type: StringNullableFilter },
    status2: { type: StringNullableFilter },
    binaryArray: { type: StringNullableFilter },
    createdAt: { type: DateTimeFilter },
    updatedAt: { type: DateTimeFilter },
    Device: { type: DeviceWhereInput },
    deviceId: { type: IntNullableFilter },
    times: { type: ScheduleTimeListRelationFilter },
  }),
})

export const ScheduleOrderByWithRelationInput = new GraphQLInputObjectType({
  name: 'ScheduleOrderByWithRelationInput',
  fields: () => ({
    id: { type: SortOrder },
    index: { type: SortOrder },
    label: { type: SortOrder },
    fullLabel: { type: SortOrder },
    autoManual: { type: SortOrder },
    output: { type: SortOrder },
    holiday1: { type: SortOrder },
    status1: { type: SortOrder },
    holiday2: { type: SortOrder },
    status2: { type: SortOrder },
    binaryArray: { type: SortOrder },
    createdAt: { type: SortOrder },
    updatedAt: { type: SortOrder },
    Device: { type: DeviceOrderByWithRelationInput },
    deviceId: { type: SortOrder },
    times: { type: ScheduleTimeOrderByRelationAggregateInput },
  }),
})

export const ScheduleWhereUniqueInput = new GraphQLInputObjectType({
  name: 'ScheduleFilterUnique',
  fields: () => ({
    id: { type: GraphQLInt },
    index_deviceId: { type: ScheduleIndexDeviceIdCompoundUniqueInput },
  }),
})

export const ScheduleOrderByWithAggregationInput = new GraphQLInputObjectType({
  name: 'ScheduleOrderByWithAggregationInput',
  fields: () => ({
    id: { type: SortOrder },
    index: { type: SortOrder },
    label: { type: SortOrder },
    fullLabel: { type: SortOrder },
    autoManual: { type: SortOrder },
    output: { type: SortOrder },
    holiday1: { type: SortOrder },
    status1: { type: SortOrder },
    holiday2: { type: SortOrder },
    status2: { type: SortOrder },
    binaryArray: { type: SortOrder },
    createdAt: { type: SortOrder },
    updatedAt: { type: SortOrder },
    deviceId: { type: SortOrder },
    _count: { type: ScheduleCountOrderByAggregateInput },
    _avg: { type: ScheduleAvgOrderByAggregateInput },
    _max: { type: ScheduleMaxOrderByAggregateInput },
    _min: { type: ScheduleMinOrderByAggregateInput },
    _sum: { type: ScheduleSumOrderByAggregateInput },
  }),
})

export const ScheduleScalarWhereWithAggregatesInput =
  new GraphQLInputObjectType({
    name: 'ScheduleScalarWhereWithAggregatesInput',
    fields: () => ({
      AND: {
        type: new GraphQLList(
          new GraphQLNonNull(ScheduleScalarWhereWithAggregatesInput),
        ),
      },
      OR: {
        type: new GraphQLList(
          new GraphQLNonNull(ScheduleScalarWhereWithAggregatesInput),
        ),
      },
      NOT: {
        type: new GraphQLList(
          new GraphQLNonNull(ScheduleScalarWhereWithAggregatesInput),
        ),
      },
      id: { type: IntWithAggregatesFilter },
      index: { type: IntWithAggregatesFilter },
      label: { type: StringNullableWithAggregatesFilter },
      fullLabel: { type: StringNullableWithAggregatesFilter },
      autoManual: { type: EnumAutoManualWithAggregatesFilter },
      output: { type: StringNullableWithAggregatesFilter },
      holiday1: { type: StringNullableWithAggregatesFilter },
      status1: { type: StringNullableWithAggregatesFilter },
      holiday2: { type: StringNullableWithAggregatesFilter },
      status2: { type: StringNullableWithAggregatesFilter },
      binaryArray: { type: StringNullableWithAggregatesFilter },
      createdAt: { type: DateTimeWithAggregatesFilter },
      updatedAt: { type: DateTimeWithAggregatesFilter },
      deviceId: { type: IntNullableWithAggregatesFilter },
    }),
  })

export const HolidayWhereInput = new GraphQLInputObjectType({
  name: 'HolidayFilter',
  fields: () => ({
    AND: { type: new GraphQLList(new GraphQLNonNull(HolidayWhereInput)) },
    OR: { type: new GraphQLList(new GraphQLNonNull(HolidayWhereInput)) },
    NOT: { type: new GraphQLList(new GraphQLNonNull(HolidayWhereInput)) },
    id: { type: IntFilter },
    index: { type: IntFilter },
    label: { type: StringNullableFilter },
    fullLabel: { type: StringNullableFilter },
    autoManual: { type: EnumAutoManualFilter },
    value: { type: StringNullableFilter },
    days: { type: DateTimeNullableListFilter },
    binaryArray: { type: StringNullableFilter },
    createdAt: { type: DateTimeFilter },
    updatedAt: { type: DateTimeFilter },
    Device: { type: DeviceWhereInput },
    deviceId: { type: IntNullableFilter },
  }),
})

export const HolidayOrderByWithRelationInput = new GraphQLInputObjectType({
  name: 'HolidayOrderByWithRelationInput',
  fields: () => ({
    id: { type: SortOrder },
    index: { type: SortOrder },
    label: { type: SortOrder },
    fullLabel: { type: SortOrder },
    autoManual: { type: SortOrder },
    value: { type: SortOrder },
    days: { type: SortOrder },
    binaryArray: { type: SortOrder },
    createdAt: { type: SortOrder },
    updatedAt: { type: SortOrder },
    Device: { type: DeviceOrderByWithRelationInput },
    deviceId: { type: SortOrder },
  }),
})

export const HolidayWhereUniqueInput = new GraphQLInputObjectType({
  name: 'HolidayFilterUnique',
  fields: () => ({
    id: { type: GraphQLInt },
    index_deviceId: { type: HolidayIndexDeviceIdCompoundUniqueInput },
  }),
})

export const HolidayOrderByWithAggregationInput = new GraphQLInputObjectType({
  name: 'HolidayOrderByWithAggregationInput',
  fields: () => ({
    id: { type: SortOrder },
    index: { type: SortOrder },
    label: { type: SortOrder },
    fullLabel: { type: SortOrder },
    autoManual: { type: SortOrder },
    value: { type: SortOrder },
    days: { type: SortOrder },
    binaryArray: { type: SortOrder },
    createdAt: { type: SortOrder },
    updatedAt: { type: SortOrder },
    deviceId: { type: SortOrder },
    _count: { type: HolidayCountOrderByAggregateInput },
    _avg: { type: HolidayAvgOrderByAggregateInput },
    _max: { type: HolidayMaxOrderByAggregateInput },
    _min: { type: HolidayMinOrderByAggregateInput },
    _sum: { type: HolidaySumOrderByAggregateInput },
  }),
})

export const HolidayScalarWhereWithAggregatesInput = new GraphQLInputObjectType(
  {
    name: 'HolidayScalarWhereWithAggregatesInput',
    fields: () => ({
      AND: {
        type: new GraphQLList(
          new GraphQLNonNull(HolidayScalarWhereWithAggregatesInput),
        ),
      },
      OR: {
        type: new GraphQLList(
          new GraphQLNonNull(HolidayScalarWhereWithAggregatesInput),
        ),
      },
      NOT: {
        type: new GraphQLList(
          new GraphQLNonNull(HolidayScalarWhereWithAggregatesInput),
        ),
      },
      id: { type: IntWithAggregatesFilter },
      index: { type: IntWithAggregatesFilter },
      label: { type: StringNullableWithAggregatesFilter },
      fullLabel: { type: StringNullableWithAggregatesFilter },
      autoManual: { type: EnumAutoManualWithAggregatesFilter },
      value: { type: StringNullableWithAggregatesFilter },
      days: { type: DateTimeNullableListFilter },
      binaryArray: { type: StringNullableWithAggregatesFilter },
      createdAt: { type: DateTimeWithAggregatesFilter },
      updatedAt: { type: DateTimeWithAggregatesFilter },
      deviceId: { type: IntNullableWithAggregatesFilter },
    }),
  },
)

export const ScheduleTimeWhereInput = new GraphQLInputObjectType({
  name: 'ScheduleTimeFilter',
  fields: () => ({
    AND: { type: new GraphQLList(new GraphQLNonNull(ScheduleTimeWhereInput)) },
    OR: { type: new GraphQLList(new GraphQLNonNull(ScheduleTimeWhereInput)) },
    NOT: { type: new GraphQLList(new GraphQLNonNull(ScheduleTimeWhereInput)) },
    id: { type: IntFilter },
    status: { type: StringFilter },
    monday: { type: DateTimeNullableFilter },
    tuesday: { type: DateTimeNullableFilter },
    wednesday: { type: DateTimeNullableFilter },
    thursday: { type: DateTimeNullableFilter },
    friday: { type: DateTimeNullableFilter },
    saterday: { type: DateTimeNullableFilter },
    sunday: { type: DateTimeNullableFilter },
    holiday1: { type: DateTimeNullableFilter },
    holiday2: { type: DateTimeNullableFilter },
    createdAt: { type: DateTimeFilter },
    updatedAt: { type: DateTimeFilter },
    Schedule: { type: ScheduleWhereInput },
    scheduleId: { type: IntNullableFilter },
  }),
})

export const ScheduleTimeOrderByWithRelationInput = new GraphQLInputObjectType({
  name: 'ScheduleTimeOrderByWithRelationInput',
  fields: () => ({
    id: { type: SortOrder },
    status: { type: SortOrder },
    monday: { type: SortOrder },
    tuesday: { type: SortOrder },
    wednesday: { type: SortOrder },
    thursday: { type: SortOrder },
    friday: { type: SortOrder },
    saterday: { type: SortOrder },
    sunday: { type: SortOrder },
    holiday1: { type: SortOrder },
    holiday2: { type: SortOrder },
    createdAt: { type: SortOrder },
    updatedAt: { type: SortOrder },
    Schedule: { type: ScheduleOrderByWithRelationInput },
    scheduleId: { type: SortOrder },
  }),
})

export const ScheduleTimeWhereUniqueInput = new GraphQLInputObjectType({
  name: 'ScheduleTimeFilterUnique',
  fields: () => ({
    id: { type: GraphQLInt },
  }),
})

export const ScheduleTimeOrderByWithAggregationInput =
  new GraphQLInputObjectType({
    name: 'ScheduleTimeOrderByWithAggregationInput',
    fields: () => ({
      id: { type: SortOrder },
      status: { type: SortOrder },
      monday: { type: SortOrder },
      tuesday: { type: SortOrder },
      wednesday: { type: SortOrder },
      thursday: { type: SortOrder },
      friday: { type: SortOrder },
      saterday: { type: SortOrder },
      sunday: { type: SortOrder },
      holiday1: { type: SortOrder },
      holiday2: { type: SortOrder },
      createdAt: { type: SortOrder },
      updatedAt: { type: SortOrder },
      scheduleId: { type: SortOrder },
      _count: { type: ScheduleTimeCountOrderByAggregateInput },
      _avg: { type: ScheduleTimeAvgOrderByAggregateInput },
      _max: { type: ScheduleTimeMaxOrderByAggregateInput },
      _min: { type: ScheduleTimeMinOrderByAggregateInput },
      _sum: { type: ScheduleTimeSumOrderByAggregateInput },
    }),
  })

export const ScheduleTimeScalarWhereWithAggregatesInput =
  new GraphQLInputObjectType({
    name: 'ScheduleTimeScalarWhereWithAggregatesInput',
    fields: () => ({
      AND: {
        type: new GraphQLList(
          new GraphQLNonNull(ScheduleTimeScalarWhereWithAggregatesInput),
        ),
      },
      OR: {
        type: new GraphQLList(
          new GraphQLNonNull(ScheduleTimeScalarWhereWithAggregatesInput),
        ),
      },
      NOT: {
        type: new GraphQLList(
          new GraphQLNonNull(ScheduleTimeScalarWhereWithAggregatesInput),
        ),
      },
      id: { type: IntWithAggregatesFilter },
      status: { type: StringWithAggregatesFilter },
      monday: { type: DateTimeNullableWithAggregatesFilter },
      tuesday: { type: DateTimeNullableWithAggregatesFilter },
      wednesday: { type: DateTimeNullableWithAggregatesFilter },
      thursday: { type: DateTimeNullableWithAggregatesFilter },
      friday: { type: DateTimeNullableWithAggregatesFilter },
      saterday: { type: DateTimeNullableWithAggregatesFilter },
      sunday: { type: DateTimeNullableWithAggregatesFilter },
      holiday1: { type: DateTimeNullableWithAggregatesFilter },
      holiday2: { type: DateTimeNullableWithAggregatesFilter },
      createdAt: { type: DateTimeWithAggregatesFilter },
      updatedAt: { type: DateTimeWithAggregatesFilter },
      scheduleId: { type: IntNullableWithAggregatesFilter },
    }),
  })

export const FileCreateInput = new GraphQLInputObjectType({
  name: 'FileCreateInput',
  fields: () => ({
    name: { type: new GraphQLNonNull(GraphQLString) },
    mimeType: { type: new GraphQLNonNull(GraphQLString) },
    path: { type: new GraphQLNonNull(GraphQLString) },
    size: { type: GraphQLInt },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
    meta: { type: GraphQLJSON },
    tags: { type: new GraphQLList(new GraphQLNonNull(GraphQLString)) },
    Graphic: { type: GraphicCreateNestedManyWithoutPictureInput },
    Project: { type: ProjectCreateNestedManyWithoutImageInput },
  }),
})

export const FileUpdateInput = new GraphQLInputObjectType({
  name: 'FileUpdateInput',
  fields: () => ({
    name: { type: GraphQLString },
    mimeType: { type: GraphQLString },
    path: { type: GraphQLString },
    size: { type: GraphQLInt },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
    meta: { type: GraphQLJSON },
    tags: { type: new GraphQLList(new GraphQLNonNull(GraphQLString)) },
    Graphic: { type: GraphicUpdateManyWithoutPictureInput },
    Project: { type: ProjectUpdateManyWithoutImageInput },
  }),
})

export const FileCreateManyInput = new GraphQLInputObjectType({
  name: 'FileCreateManyInput',
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: new GraphQLNonNull(GraphQLString) },
    mimeType: { type: new GraphQLNonNull(GraphQLString) },
    path: { type: new GraphQLNonNull(GraphQLString) },
    size: { type: GraphQLInt },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
    meta: { type: GraphQLJSON },
    tags: { type: new GraphQLList(new GraphQLNonNull(GraphQLString)) },
  }),
})

export const FileUpdateManyMutationInput = new GraphQLInputObjectType({
  name: 'FileUpdateManyMutationInput',
  fields: () => ({
    name: { type: GraphQLString },
    mimeType: { type: GraphQLString },
    path: { type: GraphQLString },
    size: { type: GraphQLInt },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
    meta: { type: GraphQLJSON },
    tags: { type: new GraphQLList(new GraphQLNonNull(GraphQLString)) },
  }),
})

export const ProjectCreateInput = new GraphQLInputObjectType({
  name: 'ProjectCreateInput',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: new GraphQLNonNull(GraphQLString) },
    slug: { type: GraphQLString },
    description: { type: GraphQLString },
    image: { type: FileCreateNestedOneWithoutProjectInput },
    buildings: { type: BuildingCreateNestedManyWithoutProjectInput },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
  }),
})

export const ProjectUpdateInput = new GraphQLInputObjectType({
  name: 'ProjectUpdateInput',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    slug: { type: GraphQLString },
    description: { type: GraphQLString },
    image: { type: FileUpdateOneWithoutProjectInput },
    buildings: { type: BuildingUpdateManyWithoutProjectInput },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
  }),
})

export const ProjectCreateManyInput = new GraphQLInputObjectType({
  name: 'ProjectCreateManyInput',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: new GraphQLNonNull(GraphQLString) },
    slug: { type: GraphQLString },
    description: { type: GraphQLString },
    imageFileId: { type: GraphQLInt },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
  }),
})

export const ProjectUpdateManyMutationInput = new GraphQLInputObjectType({
  name: 'ProjectUpdateManyMutationInput',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    slug: { type: GraphQLString },
    description: { type: GraphQLString },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
  }),
})

export const BuildingCreateInput = new GraphQLInputObjectType({
  name: 'BuildingCreateInput',
  fields: () => ({
    title: { type: new GraphQLNonNull(GraphQLString) },
    protocol: { type: BuildingProtocol },
    ip: { type: GraphQLString },
    modbusTcpPort: { type: GraphQLString },
    comPort: { type: GraphQLString },
    baudRate: { type: GraphQLInt },
    country: { type: GraphQLString },
    state: { type: GraphQLString },
    city: { type: GraphQLString },
    street: { type: GraphQLString },
    zip: { type: GraphQLString },
    engineering: { type: GraphQLString },
    devices: { type: DeviceCreateNestedManyWithoutBuildingInput },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
    Project: {
      type: new GraphQLNonNull(ProjectCreateNestedOneWithoutBuildingsInput),
    },
  }),
})

export const BuildingUpdateInput = new GraphQLInputObjectType({
  name: 'BuildingUpdateInput',
  fields: () => ({
    title: { type: GraphQLString },
    protocol: { type: BuildingProtocol },
    ip: { type: GraphQLString },
    modbusTcpPort: { type: GraphQLString },
    comPort: { type: GraphQLString },
    baudRate: { type: GraphQLInt },
    country: { type: GraphQLString },
    state: { type: GraphQLString },
    city: { type: GraphQLString },
    street: { type: GraphQLString },
    zip: { type: GraphQLString },
    engineering: { type: GraphQLString },
    devices: { type: DeviceUpdateManyWithoutBuildingInput },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
    Project: { type: ProjectUpdateOneRequiredWithoutBuildingsInput },
  }),
})

export const BuildingCreateManyInput = new GraphQLInputObjectType({
  name: 'BuildingCreateManyInput',
  fields: () => ({
    id: { type: GraphQLInt },
    title: { type: new GraphQLNonNull(GraphQLString) },
    protocol: { type: BuildingProtocol },
    ip: { type: GraphQLString },
    modbusTcpPort: { type: GraphQLString },
    comPort: { type: GraphQLString },
    baudRate: { type: GraphQLInt },
    country: { type: GraphQLString },
    state: { type: GraphQLString },
    city: { type: GraphQLString },
    street: { type: GraphQLString },
    zip: { type: GraphQLString },
    engineering: { type: GraphQLString },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
    projectId: { type: new GraphQLNonNull(GraphQLString) },
  }),
})

export const BuildingUpdateManyMutationInput = new GraphQLInputObjectType({
  name: 'BuildingUpdateManyMutationInput',
  fields: () => ({
    title: { type: GraphQLString },
    protocol: { type: BuildingProtocol },
    ip: { type: GraphQLString },
    modbusTcpPort: { type: GraphQLString },
    comPort: { type: GraphQLString },
    baudRate: { type: GraphQLInt },
    country: { type: GraphQLString },
    state: { type: GraphQLString },
    city: { type: GraphQLString },
    street: { type: GraphQLString },
    zip: { type: GraphQLString },
    engineering: { type: GraphQLString },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
  }),
})

export const DeviceCreateInput = new GraphQLInputObjectType({
  name: 'DeviceCreateInput',
  fields: () => ({
    connection: { type: new GraphQLNonNull(DeviceConnection) },
    productType: { type: new GraphQLNonNull(GraphQLString) },
    alias: { type: GraphQLString },
    serialNumber: { type: GraphQLInt },
    networkId: { type: GraphQLInt },
    floor: { type: GraphQLString },
    room: { type: GraphQLString },
    building: { type: BuildingCreateNestedOneWithoutDevicesInput },
    inputs: { type: InputCreateNestedManyWithoutDeviceInput },
    outputs: { type: OutputCreateNestedManyWithoutDeviceInput },
    pids: { type: PidCreateNestedManyWithoutDeviceInput },
    variables: { type: VariableCreateNestedManyWithoutDeviceInput },
    graphics: { type: GraphicCreateNestedManyWithoutDeviceInput },
    programs: { type: ProgramCreateNestedManyWithoutDeviceInput },
    holidays: { type: HolidayCreateNestedManyWithoutDeviceInput },
    schedules: { type: ScheduleCreateNestedManyWithoutDeviceInput },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
  }),
})

export const DeviceUpdateInput = new GraphQLInputObjectType({
  name: 'DeviceUpdateInput',
  fields: () => ({
    connection: { type: DeviceConnection },
    productType: { type: GraphQLString },
    alias: { type: GraphQLString },
    serialNumber: { type: GraphQLInt },
    networkId: { type: GraphQLInt },
    floor: { type: GraphQLString },
    room: { type: GraphQLString },
    building: { type: BuildingUpdateOneWithoutDevicesInput },
    inputs: { type: InputUpdateManyWithoutDeviceInput },
    outputs: { type: OutputUpdateManyWithoutDeviceInput },
    pids: { type: PidUpdateManyWithoutDeviceInput },
    variables: { type: VariableUpdateManyWithoutDeviceInput },
    graphics: { type: GraphicUpdateManyWithoutDeviceInput },
    programs: { type: ProgramUpdateManyWithoutDeviceInput },
    holidays: { type: HolidayUpdateManyWithoutDeviceInput },
    schedules: { type: ScheduleUpdateManyWithoutDeviceInput },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
  }),
})

export const DeviceCreateManyInput = new GraphQLInputObjectType({
  name: 'DeviceCreateManyInput',
  fields: () => ({
    id: { type: GraphQLInt },
    connection: { type: new GraphQLNonNull(DeviceConnection) },
    productType: { type: new GraphQLNonNull(GraphQLString) },
    alias: { type: GraphQLString },
    serialNumber: { type: GraphQLInt },
    networkId: { type: GraphQLInt },
    floor: { type: GraphQLString },
    room: { type: GraphQLString },
    buildingId: { type: GraphQLInt },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
  }),
})

export const DeviceUpdateManyMutationInput = new GraphQLInputObjectType({
  name: 'DeviceUpdateManyMutationInput',
  fields: () => ({
    connection: { type: DeviceConnection },
    productType: { type: GraphQLString },
    alias: { type: GraphQLString },
    serialNumber: { type: GraphQLInt },
    networkId: { type: GraphQLInt },
    floor: { type: GraphQLString },
    room: { type: GraphQLString },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
  }),
})

export const InputCreateInput = new GraphQLInputObjectType({
  name: 'InputCreateInput',
  fields: () => ({
    index: { type: new GraphQLNonNull(GraphQLInt) },
    panel: { type: new GraphQLNonNull(GraphQLInt) },
    label: { type: GraphQLString },
    fullLabel: { type: GraphQLString },
    autoManual: { type: new GraphQLNonNull(AutoManual) },
    value: { type: GraphQLString },
    units: { type: GraphQLString },
    range: { type: GraphQLString },
    calibration: { type: GraphQLFloat },
    sign: { type: GraphQLString },
    filter: { type: GraphQLInt },
    status: { type: GraphQLString },
    signalType: { type: GraphQLString },
    type: { type: GraphQLString },
    binaryArray: { type: GraphQLString },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
    Device: { type: DeviceCreateNestedOneWithoutInputsInput },
  }),
})

export const InputUpdateInput = new GraphQLInputObjectType({
  name: 'InputUpdateInput',
  fields: () => ({
    index: { type: GraphQLInt },
    panel: { type: GraphQLInt },
    label: { type: GraphQLString },
    fullLabel: { type: GraphQLString },
    autoManual: { type: AutoManual },
    value: { type: GraphQLString },
    units: { type: GraphQLString },
    range: { type: GraphQLString },
    calibration: { type: GraphQLFloat },
    sign: { type: GraphQLString },
    filter: { type: GraphQLInt },
    status: { type: GraphQLString },
    signalType: { type: GraphQLString },
    type: { type: GraphQLString },
    binaryArray: { type: GraphQLString },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
    Device: { type: DeviceUpdateOneWithoutInputsInput },
  }),
})

export const InputCreateManyInput = new GraphQLInputObjectType({
  name: 'InputCreateManyInput',
  fields: () => ({
    id: { type: GraphQLInt },
    index: { type: new GraphQLNonNull(GraphQLInt) },
    panel: { type: new GraphQLNonNull(GraphQLInt) },
    label: { type: GraphQLString },
    fullLabel: { type: GraphQLString },
    autoManual: { type: new GraphQLNonNull(AutoManual) },
    value: { type: GraphQLString },
    units: { type: GraphQLString },
    range: { type: GraphQLString },
    calibration: { type: GraphQLFloat },
    sign: { type: GraphQLString },
    filter: { type: GraphQLInt },
    status: { type: GraphQLString },
    signalType: { type: GraphQLString },
    type: { type: GraphQLString },
    binaryArray: { type: GraphQLString },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
    deviceId: { type: GraphQLInt },
  }),
})

export const InputUpdateManyMutationInput = new GraphQLInputObjectType({
  name: 'InputUpdateManyMutationInput',
  fields: () => ({
    index: { type: GraphQLInt },
    panel: { type: GraphQLInt },
    label: { type: GraphQLString },
    fullLabel: { type: GraphQLString },
    autoManual: { type: AutoManual },
    value: { type: GraphQLString },
    units: { type: GraphQLString },
    range: { type: GraphQLString },
    calibration: { type: GraphQLFloat },
    sign: { type: GraphQLString },
    filter: { type: GraphQLInt },
    status: { type: GraphQLString },
    signalType: { type: GraphQLString },
    type: { type: GraphQLString },
    binaryArray: { type: GraphQLString },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
  }),
})

export const OutputCreateInput = new GraphQLInputObjectType({
  name: 'OutputCreateInput',
  fields: () => ({
    index: { type: new GraphQLNonNull(GraphQLInt) },
    panel: { type: new GraphQLNonNull(GraphQLInt) },
    label: { type: GraphQLString },
    fullLabel: { type: GraphQLString },
    autoManual: { type: AutoManual },
    hoaSwitch: { type: GraphQLString },
    value: { type: GraphQLString },
    units: { type: GraphQLString },
    range: { type: GraphQLString },
    lowVoltage: { type: GraphQLFloat },
    highVoltage: { type: GraphQLFloat },
    pwmPeriod: { type: GraphQLInt },
    status: { type: GraphQLString },
    type: { type: GraphQLString },
    binaryArray: { type: GraphQLString },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
    Device: { type: DeviceCreateNestedOneWithoutOutputsInput },
  }),
})

export const OutputUpdateInput = new GraphQLInputObjectType({
  name: 'OutputUpdateInput',
  fields: () => ({
    index: { type: GraphQLInt },
    panel: { type: GraphQLInt },
    label: { type: GraphQLString },
    fullLabel: { type: GraphQLString },
    autoManual: { type: AutoManual },
    hoaSwitch: { type: GraphQLString },
    value: { type: GraphQLString },
    units: { type: GraphQLString },
    range: { type: GraphQLString },
    lowVoltage: { type: GraphQLFloat },
    highVoltage: { type: GraphQLFloat },
    pwmPeriod: { type: GraphQLInt },
    status: { type: GraphQLString },
    type: { type: GraphQLString },
    binaryArray: { type: GraphQLString },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
    Device: { type: DeviceUpdateOneWithoutOutputsInput },
  }),
})

export const OutputCreateManyInput = new GraphQLInputObjectType({
  name: 'OutputCreateManyInput',
  fields: () => ({
    id: { type: GraphQLInt },
    index: { type: new GraphQLNonNull(GraphQLInt) },
    panel: { type: new GraphQLNonNull(GraphQLInt) },
    label: { type: GraphQLString },
    fullLabel: { type: GraphQLString },
    autoManual: { type: AutoManual },
    hoaSwitch: { type: GraphQLString },
    value: { type: GraphQLString },
    units: { type: GraphQLString },
    range: { type: GraphQLString },
    lowVoltage: { type: GraphQLFloat },
    highVoltage: { type: GraphQLFloat },
    pwmPeriod: { type: GraphQLInt },
    status: { type: GraphQLString },
    type: { type: GraphQLString },
    binaryArray: { type: GraphQLString },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
    deviceId: { type: GraphQLInt },
  }),
})

export const OutputUpdateManyMutationInput = new GraphQLInputObjectType({
  name: 'OutputUpdateManyMutationInput',
  fields: () => ({
    index: { type: GraphQLInt },
    panel: { type: GraphQLInt },
    label: { type: GraphQLString },
    fullLabel: { type: GraphQLString },
    autoManual: { type: AutoManual },
    hoaSwitch: { type: GraphQLString },
    value: { type: GraphQLString },
    units: { type: GraphQLString },
    range: { type: GraphQLString },
    lowVoltage: { type: GraphQLFloat },
    highVoltage: { type: GraphQLFloat },
    pwmPeriod: { type: GraphQLInt },
    status: { type: GraphQLString },
    type: { type: GraphQLString },
    binaryArray: { type: GraphQLString },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
  }),
})

export const VariableCreateInput = new GraphQLInputObjectType({
  name: 'VariableCreateInput',
  fields: () => ({
    index: { type: new GraphQLNonNull(GraphQLInt) },
    label: { type: GraphQLString },
    fullLabel: { type: GraphQLString },
    autoManual: { type: new GraphQLNonNull(AutoManual) },
    value: { type: GraphQLString },
    units: { type: GraphQLString },
    binaryArray: { type: GraphQLString },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
    Device: { type: DeviceCreateNestedOneWithoutVariablesInput },
  }),
})

export const VariableUpdateInput = new GraphQLInputObjectType({
  name: 'VariableUpdateInput',
  fields: () => ({
    index: { type: GraphQLInt },
    label: { type: GraphQLString },
    fullLabel: { type: GraphQLString },
    autoManual: { type: AutoManual },
    value: { type: GraphQLString },
    units: { type: GraphQLString },
    binaryArray: { type: GraphQLString },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
    Device: { type: DeviceUpdateOneWithoutVariablesInput },
  }),
})

export const VariableCreateManyInput = new GraphQLInputObjectType({
  name: 'VariableCreateManyInput',
  fields: () => ({
    id: { type: GraphQLInt },
    index: { type: new GraphQLNonNull(GraphQLInt) },
    label: { type: GraphQLString },
    fullLabel: { type: GraphQLString },
    autoManual: { type: new GraphQLNonNull(AutoManual) },
    value: { type: GraphQLString },
    units: { type: GraphQLString },
    binaryArray: { type: GraphQLString },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
    deviceId: { type: GraphQLInt },
  }),
})

export const VariableUpdateManyMutationInput = new GraphQLInputObjectType({
  name: 'VariableUpdateManyMutationInput',
  fields: () => ({
    index: { type: GraphQLInt },
    label: { type: GraphQLString },
    fullLabel: { type: GraphQLString },
    autoManual: { type: AutoManual },
    value: { type: GraphQLString },
    units: { type: GraphQLString },
    binaryArray: { type: GraphQLString },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
  }),
})

export const ProgramCreateInput = new GraphQLInputObjectType({
  name: 'ProgramCreateInput',
  fields: () => ({
    index: { type: new GraphQLNonNull(GraphQLInt) },
    label: { type: GraphQLString },
    fullLabel: { type: GraphQLString },
    status: { type: GraphQLString },
    autoManual: { type: new GraphQLNonNull(AutoManual) },
    size: { type: GraphQLInt },
    executionTime: { type: GraphQLInt },
    sourceCode: { type: GraphQLString },
    binaryArray: { type: GraphQLString },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
    Device: { type: DeviceCreateNestedOneWithoutProgramsInput },
  }),
})

export const ProgramUpdateInput = new GraphQLInputObjectType({
  name: 'ProgramUpdateInput',
  fields: () => ({
    index: { type: GraphQLInt },
    label: { type: GraphQLString },
    fullLabel: { type: GraphQLString },
    status: { type: GraphQLString },
    autoManual: { type: AutoManual },
    size: { type: GraphQLInt },
    executionTime: { type: GraphQLInt },
    sourceCode: { type: GraphQLString },
    binaryArray: { type: GraphQLString },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
    Device: { type: DeviceUpdateOneWithoutProgramsInput },
  }),
})

export const ProgramCreateManyInput = new GraphQLInputObjectType({
  name: 'ProgramCreateManyInput',
  fields: () => ({
    id: { type: GraphQLInt },
    index: { type: new GraphQLNonNull(GraphQLInt) },
    label: { type: GraphQLString },
    fullLabel: { type: GraphQLString },
    status: { type: GraphQLString },
    autoManual: { type: new GraphQLNonNull(AutoManual) },
    size: { type: GraphQLInt },
    executionTime: { type: GraphQLInt },
    sourceCode: { type: GraphQLString },
    binaryArray: { type: GraphQLString },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
    deviceId: { type: GraphQLInt },
  }),
})

export const ProgramUpdateManyMutationInput = new GraphQLInputObjectType({
  name: 'ProgramUpdateManyMutationInput',
  fields: () => ({
    index: { type: GraphQLInt },
    label: { type: GraphQLString },
    fullLabel: { type: GraphQLString },
    status: { type: GraphQLString },
    autoManual: { type: AutoManual },
    size: { type: GraphQLInt },
    executionTime: { type: GraphQLInt },
    sourceCode: { type: GraphQLString },
    binaryArray: { type: GraphQLString },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
  }),
})

export const PidCreateInput = new GraphQLInputObjectType({
  name: 'PidCreateInput',
  fields: () => ({
    index: { type: new GraphQLNonNull(GraphQLInt) },
    input: { type: GraphQLString },
    inputValue: { type: GraphQLString },
    inputUnits: { type: GraphQLString },
    autoManual: { type: new GraphQLNonNull(AutoManual) },
    output: { type: GraphQLString },
    setpoint: { type: GraphQLString },
    setpointValue: { type: GraphQLFloat },
    setpointUnits: { type: GraphQLString },
    action: { type: GraphQLString },
    pidProp: { type: GraphQLInt },
    pidInt: { type: GraphQLInt },
    pidTime: { type: GraphQLString },
    pidDer: { type: GraphQLFloat },
    bias: { type: GraphQLInt },
    binaryArray: { type: GraphQLString },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
    Device: { type: DeviceCreateNestedOneWithoutPidsInput },
  }),
})

export const PidUpdateInput = new GraphQLInputObjectType({
  name: 'PidUpdateInput',
  fields: () => ({
    index: { type: GraphQLInt },
    input: { type: GraphQLString },
    inputValue: { type: GraphQLString },
    inputUnits: { type: GraphQLString },
    autoManual: { type: AutoManual },
    output: { type: GraphQLString },
    setpoint: { type: GraphQLString },
    setpointValue: { type: GraphQLFloat },
    setpointUnits: { type: GraphQLString },
    action: { type: GraphQLString },
    pidProp: { type: GraphQLInt },
    pidInt: { type: GraphQLInt },
    pidTime: { type: GraphQLString },
    pidDer: { type: GraphQLFloat },
    bias: { type: GraphQLInt },
    binaryArray: { type: GraphQLString },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
    Device: { type: DeviceUpdateOneWithoutPidsInput },
  }),
})

export const PidCreateManyInput = new GraphQLInputObjectType({
  name: 'PidCreateManyInput',
  fields: () => ({
    id: { type: GraphQLInt },
    index: { type: new GraphQLNonNull(GraphQLInt) },
    input: { type: GraphQLString },
    inputValue: { type: GraphQLString },
    inputUnits: { type: GraphQLString },
    autoManual: { type: new GraphQLNonNull(AutoManual) },
    output: { type: GraphQLString },
    setpoint: { type: GraphQLString },
    setpointValue: { type: GraphQLFloat },
    setpointUnits: { type: GraphQLString },
    action: { type: GraphQLString },
    pidProp: { type: GraphQLInt },
    pidInt: { type: GraphQLInt },
    pidTime: { type: GraphQLString },
    pidDer: { type: GraphQLFloat },
    bias: { type: GraphQLInt },
    binaryArray: { type: GraphQLString },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
    deviceId: { type: GraphQLInt },
  }),
})

export const PidUpdateManyMutationInput = new GraphQLInputObjectType({
  name: 'PidUpdateManyMutationInput',
  fields: () => ({
    index: { type: GraphQLInt },
    input: { type: GraphQLString },
    inputValue: { type: GraphQLString },
    inputUnits: { type: GraphQLString },
    autoManual: { type: AutoManual },
    output: { type: GraphQLString },
    setpoint: { type: GraphQLString },
    setpointValue: { type: GraphQLFloat },
    setpointUnits: { type: GraphQLString },
    action: { type: GraphQLString },
    pidProp: { type: GraphQLInt },
    pidInt: { type: GraphQLInt },
    pidTime: { type: GraphQLString },
    pidDer: { type: GraphQLFloat },
    bias: { type: GraphQLInt },
    binaryArray: { type: GraphQLString },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
  }),
})

export const GraphicCreateInput = new GraphQLInputObjectType({
  name: 'GraphicCreateInput',
  fields: () => ({
    index: { type: new GraphQLNonNull(GraphQLInt) },
    label: { type: GraphQLString },
    fullLabel: { type: GraphQLString },
    picture: { type: FileCreateNestedOneWithoutGraphicInput },
    elementCount: { type: GraphQLInt },
    binaryArray: { type: GraphQLString },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
    Device: { type: DeviceCreateNestedOneWithoutGraphicsInput },
  }),
})

export const GraphicUpdateInput = new GraphQLInputObjectType({
  name: 'GraphicUpdateInput',
  fields: () => ({
    index: { type: GraphQLInt },
    label: { type: GraphQLString },
    fullLabel: { type: GraphQLString },
    picture: { type: FileUpdateOneWithoutGraphicInput },
    elementCount: { type: GraphQLInt },
    binaryArray: { type: GraphQLString },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
    Device: { type: DeviceUpdateOneWithoutGraphicsInput },
  }),
})

export const GraphicCreateManyInput = new GraphQLInputObjectType({
  name: 'GraphicCreateManyInput',
  fields: () => ({
    id: { type: GraphQLInt },
    index: { type: new GraphQLNonNull(GraphQLInt) },
    label: { type: GraphQLString },
    fullLabel: { type: GraphQLString },
    fileId: { type: GraphQLInt },
    elementCount: { type: GraphQLInt },
    binaryArray: { type: GraphQLString },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
    deviceId: { type: GraphQLInt },
  }),
})

export const GraphicUpdateManyMutationInput = new GraphQLInputObjectType({
  name: 'GraphicUpdateManyMutationInput',
  fields: () => ({
    index: { type: GraphQLInt },
    label: { type: GraphQLString },
    fullLabel: { type: GraphQLString },
    elementCount: { type: GraphQLInt },
    binaryArray: { type: GraphQLString },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
  }),
})

export const ScheduleCreateInput = new GraphQLInputObjectType({
  name: 'ScheduleCreateInput',
  fields: () => ({
    index: { type: new GraphQLNonNull(GraphQLInt) },
    label: { type: GraphQLString },
    fullLabel: { type: GraphQLString },
    autoManual: { type: new GraphQLNonNull(AutoManual) },
    output: { type: GraphQLString },
    holiday1: { type: GraphQLString },
    status1: { type: GraphQLString },
    holiday2: { type: GraphQLString },
    status2: { type: GraphQLString },
    binaryArray: { type: GraphQLString },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
    Device: { type: DeviceCreateNestedOneWithoutSchedulesInput },
    times: { type: ScheduleTimeCreateNestedManyWithoutScheduleInput },
  }),
})

export const ScheduleUpdateInput = new GraphQLInputObjectType({
  name: 'ScheduleUpdateInput',
  fields: () => ({
    index: { type: GraphQLInt },
    label: { type: GraphQLString },
    fullLabel: { type: GraphQLString },
    autoManual: { type: AutoManual },
    output: { type: GraphQLString },
    holiday1: { type: GraphQLString },
    status1: { type: GraphQLString },
    holiday2: { type: GraphQLString },
    status2: { type: GraphQLString },
    binaryArray: { type: GraphQLString },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
    Device: { type: DeviceUpdateOneWithoutSchedulesInput },
    times: { type: ScheduleTimeUpdateManyWithoutScheduleInput },
  }),
})

export const ScheduleCreateManyInput = new GraphQLInputObjectType({
  name: 'ScheduleCreateManyInput',
  fields: () => ({
    id: { type: GraphQLInt },
    index: { type: new GraphQLNonNull(GraphQLInt) },
    label: { type: GraphQLString },
    fullLabel: { type: GraphQLString },
    autoManual: { type: new GraphQLNonNull(AutoManual) },
    output: { type: GraphQLString },
    holiday1: { type: GraphQLString },
    status1: { type: GraphQLString },
    holiday2: { type: GraphQLString },
    status2: { type: GraphQLString },
    binaryArray: { type: GraphQLString },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
    deviceId: { type: GraphQLInt },
  }),
})

export const ScheduleUpdateManyMutationInput = new GraphQLInputObjectType({
  name: 'ScheduleUpdateManyMutationInput',
  fields: () => ({
    index: { type: GraphQLInt },
    label: { type: GraphQLString },
    fullLabel: { type: GraphQLString },
    autoManual: { type: AutoManual },
    output: { type: GraphQLString },
    holiday1: { type: GraphQLString },
    status1: { type: GraphQLString },
    holiday2: { type: GraphQLString },
    status2: { type: GraphQLString },
    binaryArray: { type: GraphQLString },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
  }),
})

export const HolidayCreateInput = new GraphQLInputObjectType({
  name: 'HolidayCreateInput',
  fields: () => ({
    index: { type: new GraphQLNonNull(GraphQLInt) },
    label: { type: GraphQLString },
    fullLabel: { type: GraphQLString },
    autoManual: { type: new GraphQLNonNull(AutoManual) },
    value: { type: GraphQLString },
    days: { type: new GraphQLList(new GraphQLNonNull(GraphQLDateTime)) },
    binaryArray: { type: GraphQLString },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
    Device: { type: DeviceCreateNestedOneWithoutHolidaysInput },
  }),
})

export const HolidayUpdateInput = new GraphQLInputObjectType({
  name: 'HolidayUpdateInput',
  fields: () => ({
    index: { type: GraphQLInt },
    label: { type: GraphQLString },
    fullLabel: { type: GraphQLString },
    autoManual: { type: AutoManual },
    value: { type: GraphQLString },
    days: { type: new GraphQLList(new GraphQLNonNull(GraphQLDateTime)) },
    binaryArray: { type: GraphQLString },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
    Device: { type: DeviceUpdateOneWithoutHolidaysInput },
  }),
})

export const HolidayCreateManyInput = new GraphQLInputObjectType({
  name: 'HolidayCreateManyInput',
  fields: () => ({
    id: { type: GraphQLInt },
    index: { type: new GraphQLNonNull(GraphQLInt) },
    label: { type: GraphQLString },
    fullLabel: { type: GraphQLString },
    autoManual: { type: new GraphQLNonNull(AutoManual) },
    value: { type: GraphQLString },
    days: { type: new GraphQLList(new GraphQLNonNull(GraphQLDateTime)) },
    binaryArray: { type: GraphQLString },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
    deviceId: { type: GraphQLInt },
  }),
})

export const HolidayUpdateManyMutationInput = new GraphQLInputObjectType({
  name: 'HolidayUpdateManyMutationInput',
  fields: () => ({
    index: { type: GraphQLInt },
    label: { type: GraphQLString },
    fullLabel: { type: GraphQLString },
    autoManual: { type: AutoManual },
    value: { type: GraphQLString },
    days: { type: new GraphQLList(new GraphQLNonNull(GraphQLDateTime)) },
    binaryArray: { type: GraphQLString },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
  }),
})

export const ScheduleTimeCreateInput = new GraphQLInputObjectType({
  name: 'ScheduleTimeCreateInput',
  fields: () => ({
    status: { type: GraphQLString },
    monday: { type: GraphQLDateTime },
    tuesday: { type: GraphQLDateTime },
    wednesday: { type: GraphQLDateTime },
    thursday: { type: GraphQLDateTime },
    friday: { type: GraphQLDateTime },
    saterday: { type: GraphQLDateTime },
    sunday: { type: GraphQLDateTime },
    holiday1: { type: GraphQLDateTime },
    holiday2: { type: GraphQLDateTime },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
    Schedule: { type: ScheduleCreateNestedOneWithoutTimesInput },
  }),
})

export const ScheduleTimeUpdateInput = new GraphQLInputObjectType({
  name: 'ScheduleTimeUpdateInput',
  fields: () => ({
    status: { type: GraphQLString },
    monday: { type: GraphQLDateTime },
    tuesday: { type: GraphQLDateTime },
    wednesday: { type: GraphQLDateTime },
    thursday: { type: GraphQLDateTime },
    friday: { type: GraphQLDateTime },
    saterday: { type: GraphQLDateTime },
    sunday: { type: GraphQLDateTime },
    holiday1: { type: GraphQLDateTime },
    holiday2: { type: GraphQLDateTime },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
    Schedule: { type: ScheduleUpdateOneWithoutTimesInput },
  }),
})

export const ScheduleTimeCreateManyInput = new GraphQLInputObjectType({
  name: 'ScheduleTimeCreateManyInput',
  fields: () => ({
    id: { type: GraphQLInt },
    status: { type: GraphQLString },
    monday: { type: GraphQLDateTime },
    tuesday: { type: GraphQLDateTime },
    wednesday: { type: GraphQLDateTime },
    thursday: { type: GraphQLDateTime },
    friday: { type: GraphQLDateTime },
    saterday: { type: GraphQLDateTime },
    sunday: { type: GraphQLDateTime },
    holiday1: { type: GraphQLDateTime },
    holiday2: { type: GraphQLDateTime },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
    scheduleId: { type: GraphQLInt },
  }),
})

export const ScheduleTimeUpdateManyMutationInput = new GraphQLInputObjectType({
  name: 'ScheduleTimeUpdateManyMutationInput',
  fields: () => ({
    status: { type: GraphQLString },
    monday: { type: GraphQLDateTime },
    tuesday: { type: GraphQLDateTime },
    wednesday: { type: GraphQLDateTime },
    thursday: { type: GraphQLDateTime },
    friday: { type: GraphQLDateTime },
    saterday: { type: GraphQLDateTime },
    sunday: { type: GraphQLDateTime },
    holiday1: { type: GraphQLDateTime },
    holiday2: { type: GraphQLDateTime },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
  }),
})

export const IntFilter = new GraphQLInputObjectType({
  name: 'IntFilter',
  fields: () => ({
    equals: { type: GraphQLInt },
    in: { type: new GraphQLList(new GraphQLNonNull(GraphQLInt)) },
    notIn: { type: new GraphQLList(new GraphQLNonNull(GraphQLInt)) },
    lt: { type: GraphQLInt },
    lte: { type: GraphQLInt },
    gt: { type: GraphQLInt },
    gte: { type: GraphQLInt },
    not: { type: NestedIntFilter },
  }),
})

export const StringFilter = new GraphQLInputObjectType({
  name: 'StringFilter',
  fields: () => ({
    equals: { type: GraphQLString },
    in: { type: new GraphQLList(new GraphQLNonNull(GraphQLString)) },
    notIn: { type: new GraphQLList(new GraphQLNonNull(GraphQLString)) },
    lt: { type: GraphQLString },
    lte: { type: GraphQLString },
    gt: { type: GraphQLString },
    gte: { type: GraphQLString },
    contains: { type: GraphQLString },
    startsWith: { type: GraphQLString },
    endsWith: { type: GraphQLString },
    mode: { type: QueryMode },
    not: { type: NestedStringFilter },
  }),
})

export const IntNullableFilter = new GraphQLInputObjectType({
  name: 'IntNullableFilter',
  fields: () => ({
    equals: { type: GraphQLInt },
    in: { type: new GraphQLList(GraphQLInt) },
    notIn: { type: new GraphQLList(GraphQLInt) },
    lt: { type: GraphQLInt },
    lte: { type: GraphQLInt },
    gt: { type: GraphQLInt },
    gte: { type: GraphQLInt },
    not: { type: NestedIntNullableFilter },
  }),
})

export const DateTimeFilter = new GraphQLInputObjectType({
  name: 'DateTimeFilter',
  fields: () => ({
    equals: { type: GraphQLDateTime },
    in: { type: new GraphQLList(new GraphQLNonNull(GraphQLDateTime)) },
    notIn: { type: new GraphQLList(new GraphQLNonNull(GraphQLDateTime)) },
    lt: { type: GraphQLDateTime },
    lte: { type: GraphQLDateTime },
    gt: { type: GraphQLDateTime },
    gte: { type: GraphQLDateTime },
    not: { type: NestedDateTimeFilter },
  }),
})

export const JsonNullableFilter = new GraphQLInputObjectType({
  name: 'JsonNullableFilter',
  fields: () => ({
    equals: { type: GraphQLJSON },
    not: { type: GraphQLJSON },
  }),
})

export const StringNullableListFilter = new GraphQLInputObjectType({
  name: 'StringNullableListFilter',
  fields: () => ({
    equals: { type: new GraphQLList(GraphQLString) },
    has: { type: GraphQLString },
    hasEvery: { type: new GraphQLList(new GraphQLNonNull(GraphQLString)) },
    hasSome: { type: new GraphQLList(new GraphQLNonNull(GraphQLString)) },
    isEmpty: { type: GraphQLBoolean },
  }),
})

export const GraphicListRelationFilter = new GraphQLInputObjectType({
  name: 'GraphicListRelationFilter',
  fields: () => ({
    every: { type: GraphicWhereInput },
    some: { type: GraphicWhereInput },
    none: { type: GraphicWhereInput },
  }),
})

export const ProjectListRelationFilter = new GraphQLInputObjectType({
  name: 'ProjectListRelationFilter',
  fields: () => ({
    every: { type: ProjectWhereInput },
    some: { type: ProjectWhereInput },
    none: { type: ProjectWhereInput },
  }),
})

export const GraphicOrderByRelationAggregateInput = new GraphQLInputObjectType({
  name: 'GraphicOrderByRelationAggregateInput',
  fields: () => ({
    _count: { type: SortOrder },
  }),
})

export const ProjectOrderByRelationAggregateInput = new GraphQLInputObjectType({
  name: 'ProjectOrderByRelationAggregateInput',
  fields: () => ({
    _count: { type: SortOrder },
  }),
})

export const FileCountOrderByAggregateInput = new GraphQLInputObjectType({
  name: 'FileCountOrderByAggregateInput',
  fields: () => ({
    id: { type: SortOrder },
    name: { type: SortOrder },
    mimeType: { type: SortOrder },
    path: { type: SortOrder },
    size: { type: SortOrder },
    createdAt: { type: SortOrder },
    updatedAt: { type: SortOrder },
    meta: { type: SortOrder },
    tags: { type: SortOrder },
  }),
})

export const FileAvgOrderByAggregateInput = new GraphQLInputObjectType({
  name: 'FileAvgOrderByAggregateInput',
  fields: () => ({
    id: { type: SortOrder },
    size: { type: SortOrder },
  }),
})

export const FileMaxOrderByAggregateInput = new GraphQLInputObjectType({
  name: 'FileMaxOrderByAggregateInput',
  fields: () => ({
    id: { type: SortOrder },
    name: { type: SortOrder },
    mimeType: { type: SortOrder },
    path: { type: SortOrder },
    size: { type: SortOrder },
    createdAt: { type: SortOrder },
    updatedAt: { type: SortOrder },
  }),
})

export const FileMinOrderByAggregateInput = new GraphQLInputObjectType({
  name: 'FileMinOrderByAggregateInput',
  fields: () => ({
    id: { type: SortOrder },
    name: { type: SortOrder },
    mimeType: { type: SortOrder },
    path: { type: SortOrder },
    size: { type: SortOrder },
    createdAt: { type: SortOrder },
    updatedAt: { type: SortOrder },
  }),
})

export const FileSumOrderByAggregateInput = new GraphQLInputObjectType({
  name: 'FileSumOrderByAggregateInput',
  fields: () => ({
    id: { type: SortOrder },
    size: { type: SortOrder },
  }),
})

export const IntWithAggregatesFilter = new GraphQLInputObjectType({
  name: 'IntWithAggregatesFilter',
  fields: () => ({
    equals: { type: GraphQLInt },
    in: { type: new GraphQLList(new GraphQLNonNull(GraphQLInt)) },
    notIn: { type: new GraphQLList(new GraphQLNonNull(GraphQLInt)) },
    lt: { type: GraphQLInt },
    lte: { type: GraphQLInt },
    gt: { type: GraphQLInt },
    gte: { type: GraphQLInt },
    not: { type: NestedIntWithAggregatesFilter },
    _count: { type: NestedIntFilter },
    _avg: { type: NestedFloatFilter },
    _sum: { type: NestedIntFilter },
    _min: { type: NestedIntFilter },
    _max: { type: NestedIntFilter },
  }),
})

export const StringWithAggregatesFilter = new GraphQLInputObjectType({
  name: 'StringWithAggregatesFilter',
  fields: () => ({
    equals: { type: GraphQLString },
    in: { type: new GraphQLList(new GraphQLNonNull(GraphQLString)) },
    notIn: { type: new GraphQLList(new GraphQLNonNull(GraphQLString)) },
    lt: { type: GraphQLString },
    lte: { type: GraphQLString },
    gt: { type: GraphQLString },
    gte: { type: GraphQLString },
    contains: { type: GraphQLString },
    startsWith: { type: GraphQLString },
    endsWith: { type: GraphQLString },
    mode: { type: QueryMode },
    not: { type: NestedStringWithAggregatesFilter },
    _count: { type: NestedIntFilter },
    _min: { type: NestedStringFilter },
    _max: { type: NestedStringFilter },
  }),
})

export const IntNullableWithAggregatesFilter = new GraphQLInputObjectType({
  name: 'IntNullableWithAggregatesFilter',
  fields: () => ({
    equals: { type: GraphQLInt },
    in: { type: new GraphQLList(GraphQLInt) },
    notIn: { type: new GraphQLList(GraphQLInt) },
    lt: { type: GraphQLInt },
    lte: { type: GraphQLInt },
    gt: { type: GraphQLInt },
    gte: { type: GraphQLInt },
    not: { type: NestedIntNullableWithAggregatesFilter },
    _count: { type: NestedIntNullableFilter },
    _avg: { type: NestedFloatNullableFilter },
    _sum: { type: NestedIntNullableFilter },
    _min: { type: NestedIntNullableFilter },
    _max: { type: NestedIntNullableFilter },
  }),
})

export const DateTimeWithAggregatesFilter = new GraphQLInputObjectType({
  name: 'DateTimeWithAggregatesFilter',
  fields: () => ({
    equals: { type: GraphQLDateTime },
    in: { type: new GraphQLList(new GraphQLNonNull(GraphQLDateTime)) },
    notIn: { type: new GraphQLList(new GraphQLNonNull(GraphQLDateTime)) },
    lt: { type: GraphQLDateTime },
    lte: { type: GraphQLDateTime },
    gt: { type: GraphQLDateTime },
    gte: { type: GraphQLDateTime },
    not: { type: NestedDateTimeWithAggregatesFilter },
    _count: { type: NestedIntFilter },
    _min: { type: NestedDateTimeFilter },
    _max: { type: NestedDateTimeFilter },
  }),
})

export const JsonNullableWithAggregatesFilter = new GraphQLInputObjectType({
  name: 'JsonNullableWithAggregatesFilter',
  fields: () => ({
    equals: { type: GraphQLJSON },
    not: { type: GraphQLJSON },
    _count: { type: NestedIntNullableFilter },
    _min: { type: NestedJsonNullableFilter },
    _max: { type: NestedJsonNullableFilter },
  }),
})

export const StringNullableFilter = new GraphQLInputObjectType({
  name: 'StringNullableFilter',
  fields: () => ({
    equals: { type: GraphQLString },
    in: { type: new GraphQLList(GraphQLString) },
    notIn: { type: new GraphQLList(GraphQLString) },
    lt: { type: GraphQLString },
    lte: { type: GraphQLString },
    gt: { type: GraphQLString },
    gte: { type: GraphQLString },
    contains: { type: GraphQLString },
    startsWith: { type: GraphQLString },
    endsWith: { type: GraphQLString },
    mode: { type: QueryMode },
    not: { type: NestedStringNullableFilter },
  }),
})

export const FileRelationFilter = new GraphQLInputObjectType({
  name: 'FileRelationFilter',
  fields: () => ({
    is: { type: FileWhereInput },
    isNot: { type: FileWhereInput },
  }),
})

export const BuildingListRelationFilter = new GraphQLInputObjectType({
  name: 'BuildingListRelationFilter',
  fields: () => ({
    every: { type: BuildingWhereInput },
    some: { type: BuildingWhereInput },
    none: { type: BuildingWhereInput },
  }),
})

export const BuildingOrderByRelationAggregateInput = new GraphQLInputObjectType(
  {
    name: 'BuildingOrderByRelationAggregateInput',
    fields: () => ({
      _count: { type: SortOrder },
    }),
  },
)

export const ProjectCountOrderByAggregateInput = new GraphQLInputObjectType({
  name: 'ProjectCountOrderByAggregateInput',
  fields: () => ({
    id: { type: SortOrder },
    name: { type: SortOrder },
    slug: { type: SortOrder },
    description: { type: SortOrder },
    imageFileId: { type: SortOrder },
    createdAt: { type: SortOrder },
    updatedAt: { type: SortOrder },
  }),
})

export const ProjectAvgOrderByAggregateInput = new GraphQLInputObjectType({
  name: 'ProjectAvgOrderByAggregateInput',
  fields: () => ({
    imageFileId: { type: SortOrder },
  }),
})

export const ProjectMaxOrderByAggregateInput = new GraphQLInputObjectType({
  name: 'ProjectMaxOrderByAggregateInput',
  fields: () => ({
    id: { type: SortOrder },
    name: { type: SortOrder },
    slug: { type: SortOrder },
    description: { type: SortOrder },
    imageFileId: { type: SortOrder },
    createdAt: { type: SortOrder },
    updatedAt: { type: SortOrder },
  }),
})

export const ProjectMinOrderByAggregateInput = new GraphQLInputObjectType({
  name: 'ProjectMinOrderByAggregateInput',
  fields: () => ({
    id: { type: SortOrder },
    name: { type: SortOrder },
    slug: { type: SortOrder },
    description: { type: SortOrder },
    imageFileId: { type: SortOrder },
    createdAt: { type: SortOrder },
    updatedAt: { type: SortOrder },
  }),
})

export const ProjectSumOrderByAggregateInput = new GraphQLInputObjectType({
  name: 'ProjectSumOrderByAggregateInput',
  fields: () => ({
    imageFileId: { type: SortOrder },
  }),
})

export const StringNullableWithAggregatesFilter = new GraphQLInputObjectType({
  name: 'StringNullableWithAggregatesFilter',
  fields: () => ({
    equals: { type: GraphQLString },
    in: { type: new GraphQLList(GraphQLString) },
    notIn: { type: new GraphQLList(GraphQLString) },
    lt: { type: GraphQLString },
    lte: { type: GraphQLString },
    gt: { type: GraphQLString },
    gte: { type: GraphQLString },
    contains: { type: GraphQLString },
    startsWith: { type: GraphQLString },
    endsWith: { type: GraphQLString },
    mode: { type: QueryMode },
    not: { type: NestedStringNullableWithAggregatesFilter },
    _count: { type: NestedIntNullableFilter },
    _min: { type: NestedStringNullableFilter },
    _max: { type: NestedStringNullableFilter },
  }),
})

export const EnumBuildingProtocolNullableFilter = new GraphQLInputObjectType({
  name: 'EnumBuildingProtocolNullableFilter',
  fields: () => ({
    equals: { type: BuildingProtocol },
    in: { type: new GraphQLList(BuildingProtocol) },
    notIn: { type: new GraphQLList(BuildingProtocol) },
    not: { type: NestedEnumBuildingProtocolNullableFilter },
  }),
})

export const DeviceListRelationFilter = new GraphQLInputObjectType({
  name: 'DeviceListRelationFilter',
  fields: () => ({
    every: { type: DeviceWhereInput },
    some: { type: DeviceWhereInput },
    none: { type: DeviceWhereInput },
  }),
})

export const ProjectRelationFilter = new GraphQLInputObjectType({
  name: 'ProjectRelationFilter',
  fields: () => ({
    is: { type: ProjectWhereInput },
    isNot: { type: ProjectWhereInput },
  }),
})

export const DeviceOrderByRelationAggregateInput = new GraphQLInputObjectType({
  name: 'DeviceOrderByRelationAggregateInput',
  fields: () => ({
    _count: { type: SortOrder },
  }),
})

export const BuildingTitleProjectIdCompoundUniqueInput =
  new GraphQLInputObjectType({
    name: 'BuildingTitleProjectIdCompoundUniqueInput',
    fields: () => ({
      title: { type: new GraphQLNonNull(GraphQLString) },
      projectId: { type: new GraphQLNonNull(GraphQLString) },
    }),
  })

export const BuildingCountOrderByAggregateInput = new GraphQLInputObjectType({
  name: 'BuildingCountOrderByAggregateInput',
  fields: () => ({
    id: { type: SortOrder },
    title: { type: SortOrder },
    protocol: { type: SortOrder },
    ip: { type: SortOrder },
    modbusTcpPort: { type: SortOrder },
    comPort: { type: SortOrder },
    baudRate: { type: SortOrder },
    country: { type: SortOrder },
    state: { type: SortOrder },
    city: { type: SortOrder },
    street: { type: SortOrder },
    zip: { type: SortOrder },
    engineering: { type: SortOrder },
    createdAt: { type: SortOrder },
    updatedAt: { type: SortOrder },
    projectId: { type: SortOrder },
  }),
})

export const BuildingAvgOrderByAggregateInput = new GraphQLInputObjectType({
  name: 'BuildingAvgOrderByAggregateInput',
  fields: () => ({
    id: { type: SortOrder },
    baudRate: { type: SortOrder },
  }),
})

export const BuildingMaxOrderByAggregateInput = new GraphQLInputObjectType({
  name: 'BuildingMaxOrderByAggregateInput',
  fields: () => ({
    id: { type: SortOrder },
    title: { type: SortOrder },
    protocol: { type: SortOrder },
    ip: { type: SortOrder },
    modbusTcpPort: { type: SortOrder },
    comPort: { type: SortOrder },
    baudRate: { type: SortOrder },
    country: { type: SortOrder },
    state: { type: SortOrder },
    city: { type: SortOrder },
    street: { type: SortOrder },
    zip: { type: SortOrder },
    engineering: { type: SortOrder },
    createdAt: { type: SortOrder },
    updatedAt: { type: SortOrder },
    projectId: { type: SortOrder },
  }),
})

export const BuildingMinOrderByAggregateInput = new GraphQLInputObjectType({
  name: 'BuildingMinOrderByAggregateInput',
  fields: () => ({
    id: { type: SortOrder },
    title: { type: SortOrder },
    protocol: { type: SortOrder },
    ip: { type: SortOrder },
    modbusTcpPort: { type: SortOrder },
    comPort: { type: SortOrder },
    baudRate: { type: SortOrder },
    country: { type: SortOrder },
    state: { type: SortOrder },
    city: { type: SortOrder },
    street: { type: SortOrder },
    zip: { type: SortOrder },
    engineering: { type: SortOrder },
    createdAt: { type: SortOrder },
    updatedAt: { type: SortOrder },
    projectId: { type: SortOrder },
  }),
})

export const BuildingSumOrderByAggregateInput = new GraphQLInputObjectType({
  name: 'BuildingSumOrderByAggregateInput',
  fields: () => ({
    id: { type: SortOrder },
    baudRate: { type: SortOrder },
  }),
})

export const EnumBuildingProtocolNullableWithAggregatesFilter =
  new GraphQLInputObjectType({
    name: 'EnumBuildingProtocolNullableWithAggregatesFilter',
    fields: () => ({
      equals: { type: BuildingProtocol },
      in: { type: new GraphQLList(BuildingProtocol) },
      notIn: { type: new GraphQLList(BuildingProtocol) },
      not: { type: NestedEnumBuildingProtocolNullableWithAggregatesFilter },
      _count: { type: NestedIntNullableFilter },
      _min: { type: NestedEnumBuildingProtocolNullableFilter },
      _max: { type: NestedEnumBuildingProtocolNullableFilter },
    }),
  })

export const EnumDeviceConnectionFilter = new GraphQLInputObjectType({
  name: 'EnumDeviceConnectionFilter',
  fields: () => ({
    equals: { type: DeviceConnection },
    in: { type: new GraphQLList(new GraphQLNonNull(DeviceConnection)) },
    notIn: { type: new GraphQLList(new GraphQLNonNull(DeviceConnection)) },
    not: { type: NestedEnumDeviceConnectionFilter },
  }),
})

export const BuildingRelationFilter = new GraphQLInputObjectType({
  name: 'BuildingRelationFilter',
  fields: () => ({
    is: { type: BuildingWhereInput },
    isNot: { type: BuildingWhereInput },
  }),
})

export const InputListRelationFilter = new GraphQLInputObjectType({
  name: 'InputListRelationFilter',
  fields: () => ({
    every: { type: InputWhereInput },
    some: { type: InputWhereInput },
    none: { type: InputWhereInput },
  }),
})

export const OutputListRelationFilter = new GraphQLInputObjectType({
  name: 'OutputListRelationFilter',
  fields: () => ({
    every: { type: OutputWhereInput },
    some: { type: OutputWhereInput },
    none: { type: OutputWhereInput },
  }),
})

export const PidListRelationFilter = new GraphQLInputObjectType({
  name: 'PidListRelationFilter',
  fields: () => ({
    every: { type: PidWhereInput },
    some: { type: PidWhereInput },
    none: { type: PidWhereInput },
  }),
})

export const VariableListRelationFilter = new GraphQLInputObjectType({
  name: 'VariableListRelationFilter',
  fields: () => ({
    every: { type: VariableWhereInput },
    some: { type: VariableWhereInput },
    none: { type: VariableWhereInput },
  }),
})

export const ProgramListRelationFilter = new GraphQLInputObjectType({
  name: 'ProgramListRelationFilter',
  fields: () => ({
    every: { type: ProgramWhereInput },
    some: { type: ProgramWhereInput },
    none: { type: ProgramWhereInput },
  }),
})

export const HolidayListRelationFilter = new GraphQLInputObjectType({
  name: 'HolidayListRelationFilter',
  fields: () => ({
    every: { type: HolidayWhereInput },
    some: { type: HolidayWhereInput },
    none: { type: HolidayWhereInput },
  }),
})

export const ScheduleListRelationFilter = new GraphQLInputObjectType({
  name: 'ScheduleListRelationFilter',
  fields: () => ({
    every: { type: ScheduleWhereInput },
    some: { type: ScheduleWhereInput },
    none: { type: ScheduleWhereInput },
  }),
})

export const InputOrderByRelationAggregateInput = new GraphQLInputObjectType({
  name: 'InputOrderByRelationAggregateInput',
  fields: () => ({
    _count: { type: SortOrder },
  }),
})

export const OutputOrderByRelationAggregateInput = new GraphQLInputObjectType({
  name: 'OutputOrderByRelationAggregateInput',
  fields: () => ({
    _count: { type: SortOrder },
  }),
})

export const PidOrderByRelationAggregateInput = new GraphQLInputObjectType({
  name: 'PidOrderByRelationAggregateInput',
  fields: () => ({
    _count: { type: SortOrder },
  }),
})

export const VariableOrderByRelationAggregateInput = new GraphQLInputObjectType(
  {
    name: 'VariableOrderByRelationAggregateInput',
    fields: () => ({
      _count: { type: SortOrder },
    }),
  },
)

export const ProgramOrderByRelationAggregateInput = new GraphQLInputObjectType({
  name: 'ProgramOrderByRelationAggregateInput',
  fields: () => ({
    _count: { type: SortOrder },
  }),
})

export const HolidayOrderByRelationAggregateInput = new GraphQLInputObjectType({
  name: 'HolidayOrderByRelationAggregateInput',
  fields: () => ({
    _count: { type: SortOrder },
  }),
})

export const ScheduleOrderByRelationAggregateInput = new GraphQLInputObjectType(
  {
    name: 'ScheduleOrderByRelationAggregateInput',
    fields: () => ({
      _count: { type: SortOrder },
    }),
  },
)

export const DeviceCountOrderByAggregateInput = new GraphQLInputObjectType({
  name: 'DeviceCountOrderByAggregateInput',
  fields: () => ({
    id: { type: SortOrder },
    connection: { type: SortOrder },
    productType: { type: SortOrder },
    alias: { type: SortOrder },
    serialNumber: { type: SortOrder },
    networkId: { type: SortOrder },
    floor: { type: SortOrder },
    room: { type: SortOrder },
    buildingId: { type: SortOrder },
    createdAt: { type: SortOrder },
    updatedAt: { type: SortOrder },
  }),
})

export const DeviceAvgOrderByAggregateInput = new GraphQLInputObjectType({
  name: 'DeviceAvgOrderByAggregateInput',
  fields: () => ({
    id: { type: SortOrder },
    serialNumber: { type: SortOrder },
    networkId: { type: SortOrder },
    buildingId: { type: SortOrder },
  }),
})

export const DeviceMaxOrderByAggregateInput = new GraphQLInputObjectType({
  name: 'DeviceMaxOrderByAggregateInput',
  fields: () => ({
    id: { type: SortOrder },
    connection: { type: SortOrder },
    productType: { type: SortOrder },
    alias: { type: SortOrder },
    serialNumber: { type: SortOrder },
    networkId: { type: SortOrder },
    floor: { type: SortOrder },
    room: { type: SortOrder },
    buildingId: { type: SortOrder },
    createdAt: { type: SortOrder },
    updatedAt: { type: SortOrder },
  }),
})

export const DeviceMinOrderByAggregateInput = new GraphQLInputObjectType({
  name: 'DeviceMinOrderByAggregateInput',
  fields: () => ({
    id: { type: SortOrder },
    connection: { type: SortOrder },
    productType: { type: SortOrder },
    alias: { type: SortOrder },
    serialNumber: { type: SortOrder },
    networkId: { type: SortOrder },
    floor: { type: SortOrder },
    room: { type: SortOrder },
    buildingId: { type: SortOrder },
    createdAt: { type: SortOrder },
    updatedAt: { type: SortOrder },
  }),
})

export const DeviceSumOrderByAggregateInput = new GraphQLInputObjectType({
  name: 'DeviceSumOrderByAggregateInput',
  fields: () => ({
    id: { type: SortOrder },
    serialNumber: { type: SortOrder },
    networkId: { type: SortOrder },
    buildingId: { type: SortOrder },
  }),
})

export const EnumDeviceConnectionWithAggregatesFilter =
  new GraphQLInputObjectType({
    name: 'EnumDeviceConnectionWithAggregatesFilter',
    fields: () => ({
      equals: { type: DeviceConnection },
      in: { type: new GraphQLList(new GraphQLNonNull(DeviceConnection)) },
      notIn: { type: new GraphQLList(new GraphQLNonNull(DeviceConnection)) },
      not: { type: NestedEnumDeviceConnectionWithAggregatesFilter },
      _count: { type: NestedIntFilter },
      _min: { type: NestedEnumDeviceConnectionFilter },
      _max: { type: NestedEnumDeviceConnectionFilter },
    }),
  })

export const EnumAutoManualFilter = new GraphQLInputObjectType({
  name: 'EnumAutoManualFilter',
  fields: () => ({
    equals: { type: AutoManual },
    in: { type: new GraphQLList(new GraphQLNonNull(AutoManual)) },
    notIn: { type: new GraphQLList(new GraphQLNonNull(AutoManual)) },
    not: { type: NestedEnumAutoManualFilter },
  }),
})

export const FloatNullableFilter = new GraphQLInputObjectType({
  name: 'FloatNullableFilter',
  fields: () => ({
    equals: { type: GraphQLFloat },
    in: { type: new GraphQLList(GraphQLFloat) },
    notIn: { type: new GraphQLList(GraphQLFloat) },
    lt: { type: GraphQLFloat },
    lte: { type: GraphQLFloat },
    gt: { type: GraphQLFloat },
    gte: { type: GraphQLFloat },
    not: { type: NestedFloatNullableFilter },
  }),
})

export const DeviceRelationFilter = new GraphQLInputObjectType({
  name: 'DeviceRelationFilter',
  fields: () => ({
    is: { type: DeviceWhereInput },
    isNot: { type: DeviceWhereInput },
  }),
})

export const InputIndexDeviceIdCompoundUniqueInput = new GraphQLInputObjectType(
  {
    name: 'InputIndexDeviceIdCompoundUniqueInput',
    fields: () => ({
      index: { type: new GraphQLNonNull(GraphQLInt) },
      deviceId: { type: new GraphQLNonNull(GraphQLInt) },
    }),
  },
)

export const InputCountOrderByAggregateInput = new GraphQLInputObjectType({
  name: 'InputCountOrderByAggregateInput',
  fields: () => ({
    id: { type: SortOrder },
    index: { type: SortOrder },
    panel: { type: SortOrder },
    label: { type: SortOrder },
    fullLabel: { type: SortOrder },
    autoManual: { type: SortOrder },
    value: { type: SortOrder },
    units: { type: SortOrder },
    range: { type: SortOrder },
    calibration: { type: SortOrder },
    sign: { type: SortOrder },
    filter: { type: SortOrder },
    status: { type: SortOrder },
    signalType: { type: SortOrder },
    type: { type: SortOrder },
    binaryArray: { type: SortOrder },
    createdAt: { type: SortOrder },
    updatedAt: { type: SortOrder },
    deviceId: { type: SortOrder },
  }),
})

export const InputAvgOrderByAggregateInput = new GraphQLInputObjectType({
  name: 'InputAvgOrderByAggregateInput',
  fields: () => ({
    id: { type: SortOrder },
    index: { type: SortOrder },
    panel: { type: SortOrder },
    calibration: { type: SortOrder },
    filter: { type: SortOrder },
    deviceId: { type: SortOrder },
  }),
})

export const InputMaxOrderByAggregateInput = new GraphQLInputObjectType({
  name: 'InputMaxOrderByAggregateInput',
  fields: () => ({
    id: { type: SortOrder },
    index: { type: SortOrder },
    panel: { type: SortOrder },
    label: { type: SortOrder },
    fullLabel: { type: SortOrder },
    autoManual: { type: SortOrder },
    value: { type: SortOrder },
    units: { type: SortOrder },
    range: { type: SortOrder },
    calibration: { type: SortOrder },
    sign: { type: SortOrder },
    filter: { type: SortOrder },
    status: { type: SortOrder },
    signalType: { type: SortOrder },
    type: { type: SortOrder },
    binaryArray: { type: SortOrder },
    createdAt: { type: SortOrder },
    updatedAt: { type: SortOrder },
    deviceId: { type: SortOrder },
  }),
})

export const InputMinOrderByAggregateInput = new GraphQLInputObjectType({
  name: 'InputMinOrderByAggregateInput',
  fields: () => ({
    id: { type: SortOrder },
    index: { type: SortOrder },
    panel: { type: SortOrder },
    label: { type: SortOrder },
    fullLabel: { type: SortOrder },
    autoManual: { type: SortOrder },
    value: { type: SortOrder },
    units: { type: SortOrder },
    range: { type: SortOrder },
    calibration: { type: SortOrder },
    sign: { type: SortOrder },
    filter: { type: SortOrder },
    status: { type: SortOrder },
    signalType: { type: SortOrder },
    type: { type: SortOrder },
    binaryArray: { type: SortOrder },
    createdAt: { type: SortOrder },
    updatedAt: { type: SortOrder },
    deviceId: { type: SortOrder },
  }),
})

export const InputSumOrderByAggregateInput = new GraphQLInputObjectType({
  name: 'InputSumOrderByAggregateInput',
  fields: () => ({
    id: { type: SortOrder },
    index: { type: SortOrder },
    panel: { type: SortOrder },
    calibration: { type: SortOrder },
    filter: { type: SortOrder },
    deviceId: { type: SortOrder },
  }),
})

export const EnumAutoManualWithAggregatesFilter = new GraphQLInputObjectType({
  name: 'EnumAutoManualWithAggregatesFilter',
  fields: () => ({
    equals: { type: AutoManual },
    in: { type: new GraphQLList(new GraphQLNonNull(AutoManual)) },
    notIn: { type: new GraphQLList(new GraphQLNonNull(AutoManual)) },
    not: { type: NestedEnumAutoManualWithAggregatesFilter },
    _count: { type: NestedIntFilter },
    _min: { type: NestedEnumAutoManualFilter },
    _max: { type: NestedEnumAutoManualFilter },
  }),
})

export const FloatNullableWithAggregatesFilter = new GraphQLInputObjectType({
  name: 'FloatNullableWithAggregatesFilter',
  fields: () => ({
    equals: { type: GraphQLFloat },
    in: { type: new GraphQLList(GraphQLFloat) },
    notIn: { type: new GraphQLList(GraphQLFloat) },
    lt: { type: GraphQLFloat },
    lte: { type: GraphQLFloat },
    gt: { type: GraphQLFloat },
    gte: { type: GraphQLFloat },
    not: { type: NestedFloatNullableWithAggregatesFilter },
    _count: { type: NestedIntNullableFilter },
    _avg: { type: NestedFloatNullableFilter },
    _sum: { type: NestedFloatNullableFilter },
    _min: { type: NestedFloatNullableFilter },
    _max: { type: NestedFloatNullableFilter },
  }),
})

export const EnumAutoManualNullableFilter = new GraphQLInputObjectType({
  name: 'EnumAutoManualNullableFilter',
  fields: () => ({
    equals: { type: AutoManual },
    in: { type: new GraphQLList(AutoManual) },
    notIn: { type: new GraphQLList(AutoManual) },
    not: { type: NestedEnumAutoManualNullableFilter },
  }),
})

export const OutputIndexDeviceIdCompoundUniqueInput =
  new GraphQLInputObjectType({
    name: 'OutputIndexDeviceIdCompoundUniqueInput',
    fields: () => ({
      index: { type: new GraphQLNonNull(GraphQLInt) },
      deviceId: { type: new GraphQLNonNull(GraphQLInt) },
    }),
  })

export const OutputCountOrderByAggregateInput = new GraphQLInputObjectType({
  name: 'OutputCountOrderByAggregateInput',
  fields: () => ({
    id: { type: SortOrder },
    index: { type: SortOrder },
    panel: { type: SortOrder },
    label: { type: SortOrder },
    fullLabel: { type: SortOrder },
    autoManual: { type: SortOrder },
    hoaSwitch: { type: SortOrder },
    value: { type: SortOrder },
    units: { type: SortOrder },
    range: { type: SortOrder },
    lowVoltage: { type: SortOrder },
    highVoltage: { type: SortOrder },
    pwmPeriod: { type: SortOrder },
    status: { type: SortOrder },
    type: { type: SortOrder },
    binaryArray: { type: SortOrder },
    createdAt: { type: SortOrder },
    updatedAt: { type: SortOrder },
    deviceId: { type: SortOrder },
  }),
})

export const OutputAvgOrderByAggregateInput = new GraphQLInputObjectType({
  name: 'OutputAvgOrderByAggregateInput',
  fields: () => ({
    id: { type: SortOrder },
    index: { type: SortOrder },
    panel: { type: SortOrder },
    lowVoltage: { type: SortOrder },
    highVoltage: { type: SortOrder },
    pwmPeriod: { type: SortOrder },
    deviceId: { type: SortOrder },
  }),
})

export const OutputMaxOrderByAggregateInput = new GraphQLInputObjectType({
  name: 'OutputMaxOrderByAggregateInput',
  fields: () => ({
    id: { type: SortOrder },
    index: { type: SortOrder },
    panel: { type: SortOrder },
    label: { type: SortOrder },
    fullLabel: { type: SortOrder },
    autoManual: { type: SortOrder },
    hoaSwitch: { type: SortOrder },
    value: { type: SortOrder },
    units: { type: SortOrder },
    range: { type: SortOrder },
    lowVoltage: { type: SortOrder },
    highVoltage: { type: SortOrder },
    pwmPeriod: { type: SortOrder },
    status: { type: SortOrder },
    type: { type: SortOrder },
    binaryArray: { type: SortOrder },
    createdAt: { type: SortOrder },
    updatedAt: { type: SortOrder },
    deviceId: { type: SortOrder },
  }),
})

export const OutputMinOrderByAggregateInput = new GraphQLInputObjectType({
  name: 'OutputMinOrderByAggregateInput',
  fields: () => ({
    id: { type: SortOrder },
    index: { type: SortOrder },
    panel: { type: SortOrder },
    label: { type: SortOrder },
    fullLabel: { type: SortOrder },
    autoManual: { type: SortOrder },
    hoaSwitch: { type: SortOrder },
    value: { type: SortOrder },
    units: { type: SortOrder },
    range: { type: SortOrder },
    lowVoltage: { type: SortOrder },
    highVoltage: { type: SortOrder },
    pwmPeriod: { type: SortOrder },
    status: { type: SortOrder },
    type: { type: SortOrder },
    binaryArray: { type: SortOrder },
    createdAt: { type: SortOrder },
    updatedAt: { type: SortOrder },
    deviceId: { type: SortOrder },
  }),
})

export const OutputSumOrderByAggregateInput = new GraphQLInputObjectType({
  name: 'OutputSumOrderByAggregateInput',
  fields: () => ({
    id: { type: SortOrder },
    index: { type: SortOrder },
    panel: { type: SortOrder },
    lowVoltage: { type: SortOrder },
    highVoltage: { type: SortOrder },
    pwmPeriod: { type: SortOrder },
    deviceId: { type: SortOrder },
  }),
})

export const EnumAutoManualNullableWithAggregatesFilter =
  new GraphQLInputObjectType({
    name: 'EnumAutoManualNullableWithAggregatesFilter',
    fields: () => ({
      equals: { type: AutoManual },
      in: { type: new GraphQLList(AutoManual) },
      notIn: { type: new GraphQLList(AutoManual) },
      not: { type: NestedEnumAutoManualNullableWithAggregatesFilter },
      _count: { type: NestedIntNullableFilter },
      _min: { type: NestedEnumAutoManualNullableFilter },
      _max: { type: NestedEnumAutoManualNullableFilter },
    }),
  })

export const VariableIndexDeviceIdCompoundUniqueInput =
  new GraphQLInputObjectType({
    name: 'VariableIndexDeviceIdCompoundUniqueInput',
    fields: () => ({
      index: { type: new GraphQLNonNull(GraphQLInt) },
      deviceId: { type: new GraphQLNonNull(GraphQLInt) },
    }),
  })

export const VariableCountOrderByAggregateInput = new GraphQLInputObjectType({
  name: 'VariableCountOrderByAggregateInput',
  fields: () => ({
    id: { type: SortOrder },
    index: { type: SortOrder },
    label: { type: SortOrder },
    fullLabel: { type: SortOrder },
    autoManual: { type: SortOrder },
    value: { type: SortOrder },
    units: { type: SortOrder },
    binaryArray: { type: SortOrder },
    createdAt: { type: SortOrder },
    updatedAt: { type: SortOrder },
    deviceId: { type: SortOrder },
  }),
})

export const VariableAvgOrderByAggregateInput = new GraphQLInputObjectType({
  name: 'VariableAvgOrderByAggregateInput',
  fields: () => ({
    id: { type: SortOrder },
    index: { type: SortOrder },
    deviceId: { type: SortOrder },
  }),
})

export const VariableMaxOrderByAggregateInput = new GraphQLInputObjectType({
  name: 'VariableMaxOrderByAggregateInput',
  fields: () => ({
    id: { type: SortOrder },
    index: { type: SortOrder },
    label: { type: SortOrder },
    fullLabel: { type: SortOrder },
    autoManual: { type: SortOrder },
    value: { type: SortOrder },
    units: { type: SortOrder },
    binaryArray: { type: SortOrder },
    createdAt: { type: SortOrder },
    updatedAt: { type: SortOrder },
    deviceId: { type: SortOrder },
  }),
})

export const VariableMinOrderByAggregateInput = new GraphQLInputObjectType({
  name: 'VariableMinOrderByAggregateInput',
  fields: () => ({
    id: { type: SortOrder },
    index: { type: SortOrder },
    label: { type: SortOrder },
    fullLabel: { type: SortOrder },
    autoManual: { type: SortOrder },
    value: { type: SortOrder },
    units: { type: SortOrder },
    binaryArray: { type: SortOrder },
    createdAt: { type: SortOrder },
    updatedAt: { type: SortOrder },
    deviceId: { type: SortOrder },
  }),
})

export const VariableSumOrderByAggregateInput = new GraphQLInputObjectType({
  name: 'VariableSumOrderByAggregateInput',
  fields: () => ({
    id: { type: SortOrder },
    index: { type: SortOrder },
    deviceId: { type: SortOrder },
  }),
})

export const ProgramIndexDeviceIdCompoundUniqueInput =
  new GraphQLInputObjectType({
    name: 'ProgramIndexDeviceIdCompoundUniqueInput',
    fields: () => ({
      index: { type: new GraphQLNonNull(GraphQLInt) },
      deviceId: { type: new GraphQLNonNull(GraphQLInt) },
    }),
  })

export const ProgramCountOrderByAggregateInput = new GraphQLInputObjectType({
  name: 'ProgramCountOrderByAggregateInput',
  fields: () => ({
    id: { type: SortOrder },
    index: { type: SortOrder },
    label: { type: SortOrder },
    fullLabel: { type: SortOrder },
    status: { type: SortOrder },
    autoManual: { type: SortOrder },
    size: { type: SortOrder },
    executionTime: { type: SortOrder },
    sourceCode: { type: SortOrder },
    binaryArray: { type: SortOrder },
    createdAt: { type: SortOrder },
    updatedAt: { type: SortOrder },
    deviceId: { type: SortOrder },
  }),
})

export const ProgramAvgOrderByAggregateInput = new GraphQLInputObjectType({
  name: 'ProgramAvgOrderByAggregateInput',
  fields: () => ({
    id: { type: SortOrder },
    index: { type: SortOrder },
    size: { type: SortOrder },
    executionTime: { type: SortOrder },
    deviceId: { type: SortOrder },
  }),
})

export const ProgramMaxOrderByAggregateInput = new GraphQLInputObjectType({
  name: 'ProgramMaxOrderByAggregateInput',
  fields: () => ({
    id: { type: SortOrder },
    index: { type: SortOrder },
    label: { type: SortOrder },
    fullLabel: { type: SortOrder },
    status: { type: SortOrder },
    autoManual: { type: SortOrder },
    size: { type: SortOrder },
    executionTime: { type: SortOrder },
    sourceCode: { type: SortOrder },
    binaryArray: { type: SortOrder },
    createdAt: { type: SortOrder },
    updatedAt: { type: SortOrder },
    deviceId: { type: SortOrder },
  }),
})

export const ProgramMinOrderByAggregateInput = new GraphQLInputObjectType({
  name: 'ProgramMinOrderByAggregateInput',
  fields: () => ({
    id: { type: SortOrder },
    index: { type: SortOrder },
    label: { type: SortOrder },
    fullLabel: { type: SortOrder },
    status: { type: SortOrder },
    autoManual: { type: SortOrder },
    size: { type: SortOrder },
    executionTime: { type: SortOrder },
    sourceCode: { type: SortOrder },
    binaryArray: { type: SortOrder },
    createdAt: { type: SortOrder },
    updatedAt: { type: SortOrder },
    deviceId: { type: SortOrder },
  }),
})

export const ProgramSumOrderByAggregateInput = new GraphQLInputObjectType({
  name: 'ProgramSumOrderByAggregateInput',
  fields: () => ({
    id: { type: SortOrder },
    index: { type: SortOrder },
    size: { type: SortOrder },
    executionTime: { type: SortOrder },
    deviceId: { type: SortOrder },
  }),
})

export const PidIndexDeviceIdCompoundUniqueInput = new GraphQLInputObjectType({
  name: 'PidIndexDeviceIdCompoundUniqueInput',
  fields: () => ({
    index: { type: new GraphQLNonNull(GraphQLInt) },
    deviceId: { type: new GraphQLNonNull(GraphQLInt) },
  }),
})

export const PidCountOrderByAggregateInput = new GraphQLInputObjectType({
  name: 'PidCountOrderByAggregateInput',
  fields: () => ({
    id: { type: SortOrder },
    index: { type: SortOrder },
    input: { type: SortOrder },
    inputValue: { type: SortOrder },
    inputUnits: { type: SortOrder },
    autoManual: { type: SortOrder },
    output: { type: SortOrder },
    setpoint: { type: SortOrder },
    setpointValue: { type: SortOrder },
    setpointUnits: { type: SortOrder },
    action: { type: SortOrder },
    pidProp: { type: SortOrder },
    pidInt: { type: SortOrder },
    pidTime: { type: SortOrder },
    pidDer: { type: SortOrder },
    bias: { type: SortOrder },
    binaryArray: { type: SortOrder },
    createdAt: { type: SortOrder },
    updatedAt: { type: SortOrder },
    deviceId: { type: SortOrder },
  }),
})

export const PidAvgOrderByAggregateInput = new GraphQLInputObjectType({
  name: 'PidAvgOrderByAggregateInput',
  fields: () => ({
    id: { type: SortOrder },
    index: { type: SortOrder },
    inputValue: { type: SortOrder },
    setpointValue: { type: SortOrder },
    pidProp: { type: SortOrder },
    pidInt: { type: SortOrder },
    pidDer: { type: SortOrder },
    bias: { type: SortOrder },
    deviceId: { type: SortOrder },
  }),
})

export const PidMaxOrderByAggregateInput = new GraphQLInputObjectType({
  name: 'PidMaxOrderByAggregateInput',
  fields: () => ({
    id: { type: SortOrder },
    index: { type: SortOrder },
    input: { type: SortOrder },
    inputValue: { type: SortOrder },
    inputUnits: { type: SortOrder },
    autoManual: { type: SortOrder },
    output: { type: SortOrder },
    setpoint: { type: SortOrder },
    setpointValue: { type: SortOrder },
    setpointUnits: { type: SortOrder },
    action: { type: SortOrder },
    pidProp: { type: SortOrder },
    pidInt: { type: SortOrder },
    pidTime: { type: SortOrder },
    pidDer: { type: SortOrder },
    bias: { type: SortOrder },
    binaryArray: { type: SortOrder },
    createdAt: { type: SortOrder },
    updatedAt: { type: SortOrder },
    deviceId: { type: SortOrder },
  }),
})

export const PidMinOrderByAggregateInput = new GraphQLInputObjectType({
  name: 'PidMinOrderByAggregateInput',
  fields: () => ({
    id: { type: SortOrder },
    index: { type: SortOrder },
    input: { type: SortOrder },
    inputValue: { type: SortOrder },
    inputUnits: { type: SortOrder },
    autoManual: { type: SortOrder },
    output: { type: SortOrder },
    setpoint: { type: SortOrder },
    setpointValue: { type: SortOrder },
    setpointUnits: { type: SortOrder },
    action: { type: SortOrder },
    pidProp: { type: SortOrder },
    pidInt: { type: SortOrder },
    pidTime: { type: SortOrder },
    pidDer: { type: SortOrder },
    bias: { type: SortOrder },
    binaryArray: { type: SortOrder },
    createdAt: { type: SortOrder },
    updatedAt: { type: SortOrder },
    deviceId: { type: SortOrder },
  }),
})

export const PidSumOrderByAggregateInput = new GraphQLInputObjectType({
  name: 'PidSumOrderByAggregateInput',
  fields: () => ({
    id: { type: SortOrder },
    index: { type: SortOrder },
    inputValue: { type: SortOrder },
    setpointValue: { type: SortOrder },
    pidProp: { type: SortOrder },
    pidInt: { type: SortOrder },
    pidDer: { type: SortOrder },
    bias: { type: SortOrder },
    deviceId: { type: SortOrder },
  }),
})

export const GraphicIndexDeviceIdCompoundUniqueInput =
  new GraphQLInputObjectType({
    name: 'GraphicIndexDeviceIdCompoundUniqueInput',
    fields: () => ({
      index: { type: new GraphQLNonNull(GraphQLInt) },
      deviceId: { type: new GraphQLNonNull(GraphQLInt) },
    }),
  })

export const GraphicCountOrderByAggregateInput = new GraphQLInputObjectType({
  name: 'GraphicCountOrderByAggregateInput',
  fields: () => ({
    id: { type: SortOrder },
    index: { type: SortOrder },
    label: { type: SortOrder },
    fullLabel: { type: SortOrder },
    fileId: { type: SortOrder },
    elementCount: { type: SortOrder },
    binaryArray: { type: SortOrder },
    createdAt: { type: SortOrder },
    updatedAt: { type: SortOrder },
    deviceId: { type: SortOrder },
  }),
})

export const GraphicAvgOrderByAggregateInput = new GraphQLInputObjectType({
  name: 'GraphicAvgOrderByAggregateInput',
  fields: () => ({
    id: { type: SortOrder },
    index: { type: SortOrder },
    fileId: { type: SortOrder },
    elementCount: { type: SortOrder },
    deviceId: { type: SortOrder },
  }),
})

export const GraphicMaxOrderByAggregateInput = new GraphQLInputObjectType({
  name: 'GraphicMaxOrderByAggregateInput',
  fields: () => ({
    id: { type: SortOrder },
    index: { type: SortOrder },
    label: { type: SortOrder },
    fullLabel: { type: SortOrder },
    fileId: { type: SortOrder },
    elementCount: { type: SortOrder },
    binaryArray: { type: SortOrder },
    createdAt: { type: SortOrder },
    updatedAt: { type: SortOrder },
    deviceId: { type: SortOrder },
  }),
})

export const GraphicMinOrderByAggregateInput = new GraphQLInputObjectType({
  name: 'GraphicMinOrderByAggregateInput',
  fields: () => ({
    id: { type: SortOrder },
    index: { type: SortOrder },
    label: { type: SortOrder },
    fullLabel: { type: SortOrder },
    fileId: { type: SortOrder },
    elementCount: { type: SortOrder },
    binaryArray: { type: SortOrder },
    createdAt: { type: SortOrder },
    updatedAt: { type: SortOrder },
    deviceId: { type: SortOrder },
  }),
})

export const GraphicSumOrderByAggregateInput = new GraphQLInputObjectType({
  name: 'GraphicSumOrderByAggregateInput',
  fields: () => ({
    id: { type: SortOrder },
    index: { type: SortOrder },
    fileId: { type: SortOrder },
    elementCount: { type: SortOrder },
    deviceId: { type: SortOrder },
  }),
})

export const ScheduleTimeListRelationFilter = new GraphQLInputObjectType({
  name: 'ScheduleTimeListRelationFilter',
  fields: () => ({
    every: { type: ScheduleTimeWhereInput },
    some: { type: ScheduleTimeWhereInput },
    none: { type: ScheduleTimeWhereInput },
  }),
})

export const ScheduleTimeOrderByRelationAggregateInput =
  new GraphQLInputObjectType({
    name: 'ScheduleTimeOrderByRelationAggregateInput',
    fields: () => ({
      _count: { type: SortOrder },
    }),
  })

export const ScheduleIndexDeviceIdCompoundUniqueInput =
  new GraphQLInputObjectType({
    name: 'ScheduleIndexDeviceIdCompoundUniqueInput',
    fields: () => ({
      index: { type: new GraphQLNonNull(GraphQLInt) },
      deviceId: { type: new GraphQLNonNull(GraphQLInt) },
    }),
  })

export const ScheduleCountOrderByAggregateInput = new GraphQLInputObjectType({
  name: 'ScheduleCountOrderByAggregateInput',
  fields: () => ({
    id: { type: SortOrder },
    index: { type: SortOrder },
    label: { type: SortOrder },
    fullLabel: { type: SortOrder },
    autoManual: { type: SortOrder },
    output: { type: SortOrder },
    holiday1: { type: SortOrder },
    status1: { type: SortOrder },
    holiday2: { type: SortOrder },
    status2: { type: SortOrder },
    binaryArray: { type: SortOrder },
    createdAt: { type: SortOrder },
    updatedAt: { type: SortOrder },
    deviceId: { type: SortOrder },
  }),
})

export const ScheduleAvgOrderByAggregateInput = new GraphQLInputObjectType({
  name: 'ScheduleAvgOrderByAggregateInput',
  fields: () => ({
    id: { type: SortOrder },
    index: { type: SortOrder },
    deviceId: { type: SortOrder },
  }),
})

export const ScheduleMaxOrderByAggregateInput = new GraphQLInputObjectType({
  name: 'ScheduleMaxOrderByAggregateInput',
  fields: () => ({
    id: { type: SortOrder },
    index: { type: SortOrder },
    label: { type: SortOrder },
    fullLabel: { type: SortOrder },
    autoManual: { type: SortOrder },
    output: { type: SortOrder },
    holiday1: { type: SortOrder },
    status1: { type: SortOrder },
    holiday2: { type: SortOrder },
    status2: { type: SortOrder },
    binaryArray: { type: SortOrder },
    createdAt: { type: SortOrder },
    updatedAt: { type: SortOrder },
    deviceId: { type: SortOrder },
  }),
})

export const ScheduleMinOrderByAggregateInput = new GraphQLInputObjectType({
  name: 'ScheduleMinOrderByAggregateInput',
  fields: () => ({
    id: { type: SortOrder },
    index: { type: SortOrder },
    label: { type: SortOrder },
    fullLabel: { type: SortOrder },
    autoManual: { type: SortOrder },
    output: { type: SortOrder },
    holiday1: { type: SortOrder },
    status1: { type: SortOrder },
    holiday2: { type: SortOrder },
    status2: { type: SortOrder },
    binaryArray: { type: SortOrder },
    createdAt: { type: SortOrder },
    updatedAt: { type: SortOrder },
    deviceId: { type: SortOrder },
  }),
})

export const ScheduleSumOrderByAggregateInput = new GraphQLInputObjectType({
  name: 'ScheduleSumOrderByAggregateInput',
  fields: () => ({
    id: { type: SortOrder },
    index: { type: SortOrder },
    deviceId: { type: SortOrder },
  }),
})

export const DateTimeNullableListFilter = new GraphQLInputObjectType({
  name: 'DateTimeNullableListFilter',
  fields: () => ({
    equals: { type: new GraphQLList(GraphQLDateTime) },
    has: { type: GraphQLDateTime },
    hasEvery: { type: new GraphQLList(new GraphQLNonNull(GraphQLDateTime)) },
    hasSome: { type: new GraphQLList(new GraphQLNonNull(GraphQLDateTime)) },
    isEmpty: { type: GraphQLBoolean },
  }),
})

export const HolidayIndexDeviceIdCompoundUniqueInput =
  new GraphQLInputObjectType({
    name: 'HolidayIndexDeviceIdCompoundUniqueInput',
    fields: () => ({
      index: { type: new GraphQLNonNull(GraphQLInt) },
      deviceId: { type: new GraphQLNonNull(GraphQLInt) },
    }),
  })

export const HolidayCountOrderByAggregateInput = new GraphQLInputObjectType({
  name: 'HolidayCountOrderByAggregateInput',
  fields: () => ({
    id: { type: SortOrder },
    index: { type: SortOrder },
    label: { type: SortOrder },
    fullLabel: { type: SortOrder },
    autoManual: { type: SortOrder },
    value: { type: SortOrder },
    days: { type: SortOrder },
    binaryArray: { type: SortOrder },
    createdAt: { type: SortOrder },
    updatedAt: { type: SortOrder },
    deviceId: { type: SortOrder },
  }),
})

export const HolidayAvgOrderByAggregateInput = new GraphQLInputObjectType({
  name: 'HolidayAvgOrderByAggregateInput',
  fields: () => ({
    id: { type: SortOrder },
    index: { type: SortOrder },
    deviceId: { type: SortOrder },
  }),
})

export const HolidayMaxOrderByAggregateInput = new GraphQLInputObjectType({
  name: 'HolidayMaxOrderByAggregateInput',
  fields: () => ({
    id: { type: SortOrder },
    index: { type: SortOrder },
    label: { type: SortOrder },
    fullLabel: { type: SortOrder },
    autoManual: { type: SortOrder },
    value: { type: SortOrder },
    binaryArray: { type: SortOrder },
    createdAt: { type: SortOrder },
    updatedAt: { type: SortOrder },
    deviceId: { type: SortOrder },
  }),
})

export const HolidayMinOrderByAggregateInput = new GraphQLInputObjectType({
  name: 'HolidayMinOrderByAggregateInput',
  fields: () => ({
    id: { type: SortOrder },
    index: { type: SortOrder },
    label: { type: SortOrder },
    fullLabel: { type: SortOrder },
    autoManual: { type: SortOrder },
    value: { type: SortOrder },
    binaryArray: { type: SortOrder },
    createdAt: { type: SortOrder },
    updatedAt: { type: SortOrder },
    deviceId: { type: SortOrder },
  }),
})

export const HolidaySumOrderByAggregateInput = new GraphQLInputObjectType({
  name: 'HolidaySumOrderByAggregateInput',
  fields: () => ({
    id: { type: SortOrder },
    index: { type: SortOrder },
    deviceId: { type: SortOrder },
  }),
})

export const DateTimeNullableFilter = new GraphQLInputObjectType({
  name: 'DateTimeNullableFilter',
  fields: () => ({
    equals: { type: GraphQLDateTime },
    in: { type: new GraphQLList(GraphQLDateTime) },
    notIn: { type: new GraphQLList(GraphQLDateTime) },
    lt: { type: GraphQLDateTime },
    lte: { type: GraphQLDateTime },
    gt: { type: GraphQLDateTime },
    gte: { type: GraphQLDateTime },
    not: { type: NestedDateTimeNullableFilter },
  }),
})

export const ScheduleRelationFilter = new GraphQLInputObjectType({
  name: 'ScheduleRelationFilter',
  fields: () => ({
    is: { type: ScheduleWhereInput },
    isNot: { type: ScheduleWhereInput },
  }),
})

export const ScheduleTimeCountOrderByAggregateInput =
  new GraphQLInputObjectType({
    name: 'ScheduleTimeCountOrderByAggregateInput',
    fields: () => ({
      id: { type: SortOrder },
      status: { type: SortOrder },
      monday: { type: SortOrder },
      tuesday: { type: SortOrder },
      wednesday: { type: SortOrder },
      thursday: { type: SortOrder },
      friday: { type: SortOrder },
      saterday: { type: SortOrder },
      sunday: { type: SortOrder },
      holiday1: { type: SortOrder },
      holiday2: { type: SortOrder },
      createdAt: { type: SortOrder },
      updatedAt: { type: SortOrder },
      scheduleId: { type: SortOrder },
    }),
  })

export const ScheduleTimeAvgOrderByAggregateInput = new GraphQLInputObjectType({
  name: 'ScheduleTimeAvgOrderByAggregateInput',
  fields: () => ({
    id: { type: SortOrder },
    scheduleId: { type: SortOrder },
  }),
})

export const ScheduleTimeMaxOrderByAggregateInput = new GraphQLInputObjectType({
  name: 'ScheduleTimeMaxOrderByAggregateInput',
  fields: () => ({
    id: { type: SortOrder },
    status: { type: SortOrder },
    monday: { type: SortOrder },
    tuesday: { type: SortOrder },
    wednesday: { type: SortOrder },
    thursday: { type: SortOrder },
    friday: { type: SortOrder },
    saterday: { type: SortOrder },
    sunday: { type: SortOrder },
    holiday1: { type: SortOrder },
    holiday2: { type: SortOrder },
    createdAt: { type: SortOrder },
    updatedAt: { type: SortOrder },
    scheduleId: { type: SortOrder },
  }),
})

export const ScheduleTimeMinOrderByAggregateInput = new GraphQLInputObjectType({
  name: 'ScheduleTimeMinOrderByAggregateInput',
  fields: () => ({
    id: { type: SortOrder },
    status: { type: SortOrder },
    monday: { type: SortOrder },
    tuesday: { type: SortOrder },
    wednesday: { type: SortOrder },
    thursday: { type: SortOrder },
    friday: { type: SortOrder },
    saterday: { type: SortOrder },
    sunday: { type: SortOrder },
    holiday1: { type: SortOrder },
    holiday2: { type: SortOrder },
    createdAt: { type: SortOrder },
    updatedAt: { type: SortOrder },
    scheduleId: { type: SortOrder },
  }),
})

export const ScheduleTimeSumOrderByAggregateInput = new GraphQLInputObjectType({
  name: 'ScheduleTimeSumOrderByAggregateInput',
  fields: () => ({
    id: { type: SortOrder },
    scheduleId: { type: SortOrder },
  }),
})

export const DateTimeNullableWithAggregatesFilter = new GraphQLInputObjectType({
  name: 'DateTimeNullableWithAggregatesFilter',
  fields: () => ({
    equals: { type: GraphQLDateTime },
    in: { type: new GraphQLList(GraphQLDateTime) },
    notIn: { type: new GraphQLList(GraphQLDateTime) },
    lt: { type: GraphQLDateTime },
    lte: { type: GraphQLDateTime },
    gt: { type: GraphQLDateTime },
    gte: { type: GraphQLDateTime },
    not: { type: NestedDateTimeNullableWithAggregatesFilter },
    _count: { type: NestedIntNullableFilter },
    _min: { type: NestedDateTimeNullableFilter },
    _max: { type: NestedDateTimeNullableFilter },
  }),
})

export const FileCreatetagsInput = new GraphQLInputObjectType({
  name: 'FileCreatetagsInput',
  fields: () => ({
    set: {
      type: new GraphQLNonNull(
        new GraphQLList(new GraphQLNonNull(GraphQLString)),
      ),
    },
  }),
})

export const GraphicCreateNestedManyWithoutPictureInput =
  new GraphQLInputObjectType({
    name: 'GraphicCreateNestedManyWithoutPictureInput',
    fields: () => ({
      create: {
        type: new GraphQLList(
          new GraphQLNonNull(GraphicCreateWithoutPictureInput),
        ),
      },
      connectOrCreate: {
        type: new GraphQLList(
          new GraphQLNonNull(GraphicCreateOrConnectWithoutPictureInput),
        ),
      },
      createMany: { type: GraphicCreateManyPictureInputEnvelope },
      connect: {
        type: new GraphQLList(new GraphQLNonNull(GraphicWhereUniqueInput)),
      },
    }),
  })

export const ProjectCreateNestedManyWithoutImageInput =
  new GraphQLInputObjectType({
    name: 'ProjectCreateNestedManyWithoutImageInput',
    fields: () => ({
      create: {
        type: new GraphQLList(
          new GraphQLNonNull(ProjectCreateWithoutImageInput),
        ),
      },
      connectOrCreate: {
        type: new GraphQLList(
          new GraphQLNonNull(ProjectCreateOrConnectWithoutImageInput),
        ),
      },
      createMany: { type: ProjectCreateManyImageInputEnvelope },
      connect: {
        type: new GraphQLList(new GraphQLNonNull(ProjectWhereUniqueInput)),
      },
    }),
  })

export const StringFieldUpdateOperationsInput = new GraphQLInputObjectType({
  name: 'StringFieldUpdateOperationsInput',
  fields: () => ({
    set: { type: GraphQLString },
  }),
})

export const NullableIntFieldUpdateOperationsInput = new GraphQLInputObjectType(
  {
    name: 'NullableIntFieldUpdateOperationsInput',
    fields: () => ({
      set: { type: GraphQLInt },
      increment: { type: GraphQLInt },
      decrement: { type: GraphQLInt },
      multiply: { type: GraphQLInt },
      divide: { type: GraphQLInt },
    }),
  },
)

export const DateTimeFieldUpdateOperationsInput = new GraphQLInputObjectType({
  name: 'DateTimeFieldUpdateOperationsInput',
  fields: () => ({
    set: { type: GraphQLDateTime },
  }),
})

export const FileUpdatetagsInput = new GraphQLInputObjectType({
  name: 'FileUpdatetagsInput',
  fields: () => ({
    set: { type: new GraphQLList(new GraphQLNonNull(GraphQLString)) },
    push: { type: new GraphQLList(new GraphQLNonNull(GraphQLString)) },
  }),
})

export const GraphicUpdateManyWithoutPictureInput = new GraphQLInputObjectType({
  name: 'GraphicUpdateManyWithoutPictureInput',
  fields: () => ({
    create: {
      type: new GraphQLList(
        new GraphQLNonNull(GraphicCreateWithoutPictureInput),
      ),
    },
    connectOrCreate: {
      type: new GraphQLList(
        new GraphQLNonNull(GraphicCreateOrConnectWithoutPictureInput),
      ),
    },
    upsert: {
      type: new GraphQLList(
        new GraphQLNonNull(GraphicUpsertWithWhereUniqueWithoutPictureInput),
      ),
    },
    createMany: { type: GraphicCreateManyPictureInputEnvelope },
    set: { type: new GraphQLList(new GraphQLNonNull(GraphicWhereUniqueInput)) },
    disconnect: {
      type: new GraphQLList(new GraphQLNonNull(GraphicWhereUniqueInput)),
    },
    delete: {
      type: new GraphQLList(new GraphQLNonNull(GraphicWhereUniqueInput)),
    },
    connect: {
      type: new GraphQLList(new GraphQLNonNull(GraphicWhereUniqueInput)),
    },
    update: {
      type: new GraphQLList(
        new GraphQLNonNull(GraphicUpdateWithWhereUniqueWithoutPictureInput),
      ),
    },
    updateMany: {
      type: new GraphQLList(
        new GraphQLNonNull(GraphicUpdateManyWithWhereWithoutPictureInput),
      ),
    },
    deleteMany: {
      type: new GraphQLList(new GraphQLNonNull(GraphicScalarWhereInput)),
    },
  }),
})

export const ProjectUpdateManyWithoutImageInput = new GraphQLInputObjectType({
  name: 'ProjectUpdateManyWithoutImageInput',
  fields: () => ({
    create: {
      type: new GraphQLList(new GraphQLNonNull(ProjectCreateWithoutImageInput)),
    },
    connectOrCreate: {
      type: new GraphQLList(
        new GraphQLNonNull(ProjectCreateOrConnectWithoutImageInput),
      ),
    },
    upsert: {
      type: new GraphQLList(
        new GraphQLNonNull(ProjectUpsertWithWhereUniqueWithoutImageInput),
      ),
    },
    createMany: { type: ProjectCreateManyImageInputEnvelope },
    set: { type: new GraphQLList(new GraphQLNonNull(ProjectWhereUniqueInput)) },
    disconnect: {
      type: new GraphQLList(new GraphQLNonNull(ProjectWhereUniqueInput)),
    },
    delete: {
      type: new GraphQLList(new GraphQLNonNull(ProjectWhereUniqueInput)),
    },
    connect: {
      type: new GraphQLList(new GraphQLNonNull(ProjectWhereUniqueInput)),
    },
    update: {
      type: new GraphQLList(
        new GraphQLNonNull(ProjectUpdateWithWhereUniqueWithoutImageInput),
      ),
    },
    updateMany: {
      type: new GraphQLList(
        new GraphQLNonNull(ProjectUpdateManyWithWhereWithoutImageInput),
      ),
    },
    deleteMany: {
      type: new GraphQLList(new GraphQLNonNull(ProjectScalarWhereInput)),
    },
  }),
})

export const IntFieldUpdateOperationsInput = new GraphQLInputObjectType({
  name: 'IntFieldUpdateOperationsInput',
  fields: () => ({
    set: { type: GraphQLInt },
    increment: { type: GraphQLInt },
    decrement: { type: GraphQLInt },
    multiply: { type: GraphQLInt },
    divide: { type: GraphQLInt },
  }),
})

export const FileCreateNestedOneWithoutProjectInput =
  new GraphQLInputObjectType({
    name: 'FileCreateNestedOneWithoutProjectInput',
    fields: () => ({
      create: { type: FileCreateWithoutProjectInput },
      connectOrCreate: { type: FileCreateOrConnectWithoutProjectInput },
      connect: { type: FileWhereUniqueInput },
    }),
  })

export const BuildingCreateNestedManyWithoutProjectInput =
  new GraphQLInputObjectType({
    name: 'BuildingCreateNestedManyWithoutProjectInput',
    fields: () => ({
      create: {
        type: new GraphQLList(
          new GraphQLNonNull(BuildingCreateWithoutProjectInput),
        ),
      },
      connectOrCreate: {
        type: new GraphQLList(
          new GraphQLNonNull(BuildingCreateOrConnectWithoutProjectInput),
        ),
      },
      createMany: { type: BuildingCreateManyProjectInputEnvelope },
      connect: {
        type: new GraphQLList(new GraphQLNonNull(BuildingWhereUniqueInput)),
      },
    }),
  })

export const NullableStringFieldUpdateOperationsInput =
  new GraphQLInputObjectType({
    name: 'NullableStringFieldUpdateOperationsInput',
    fields: () => ({
      set: { type: GraphQLString },
    }),
  })

export const FileUpdateOneWithoutProjectInput = new GraphQLInputObjectType({
  name: 'FileUpdateOneWithoutProjectInput',
  fields: () => ({
    create: { type: FileCreateWithoutProjectInput },
    connectOrCreate: { type: FileCreateOrConnectWithoutProjectInput },
    upsert: { type: FileUpsertWithoutProjectInput },
    disconnect: { type: GraphQLBoolean },
    delete: { type: GraphQLBoolean },
    connect: { type: FileWhereUniqueInput },
    update: { type: FileUpdateWithoutProjectInput },
  }),
})

export const BuildingUpdateManyWithoutProjectInput = new GraphQLInputObjectType(
  {
    name: 'BuildingUpdateManyWithoutProjectInput',
    fields: () => ({
      create: {
        type: new GraphQLList(
          new GraphQLNonNull(BuildingCreateWithoutProjectInput),
        ),
      },
      connectOrCreate: {
        type: new GraphQLList(
          new GraphQLNonNull(BuildingCreateOrConnectWithoutProjectInput),
        ),
      },
      upsert: {
        type: new GraphQLList(
          new GraphQLNonNull(BuildingUpsertWithWhereUniqueWithoutProjectInput),
        ),
      },
      createMany: { type: BuildingCreateManyProjectInputEnvelope },
      set: {
        type: new GraphQLList(new GraphQLNonNull(BuildingWhereUniqueInput)),
      },
      disconnect: {
        type: new GraphQLList(new GraphQLNonNull(BuildingWhereUniqueInput)),
      },
      delete: {
        type: new GraphQLList(new GraphQLNonNull(BuildingWhereUniqueInput)),
      },
      connect: {
        type: new GraphQLList(new GraphQLNonNull(BuildingWhereUniqueInput)),
      },
      update: {
        type: new GraphQLList(
          new GraphQLNonNull(BuildingUpdateWithWhereUniqueWithoutProjectInput),
        ),
      },
      updateMany: {
        type: new GraphQLList(
          new GraphQLNonNull(BuildingUpdateManyWithWhereWithoutProjectInput),
        ),
      },
      deleteMany: {
        type: new GraphQLList(new GraphQLNonNull(BuildingScalarWhereInput)),
      },
    }),
  },
)

export const DeviceCreateNestedManyWithoutBuildingInput =
  new GraphQLInputObjectType({
    name: 'DeviceCreateNestedManyWithoutBuildingInput',
    fields: () => ({
      create: {
        type: new GraphQLList(
          new GraphQLNonNull(DeviceCreateWithoutBuildingInput),
        ),
      },
      connectOrCreate: {
        type: new GraphQLList(
          new GraphQLNonNull(DeviceCreateOrConnectWithoutBuildingInput),
        ),
      },
      createMany: { type: DeviceCreateManyBuildingInputEnvelope },
      connect: {
        type: new GraphQLList(new GraphQLNonNull(DeviceWhereUniqueInput)),
      },
    }),
  })

export const ProjectCreateNestedOneWithoutBuildingsInput =
  new GraphQLInputObjectType({
    name: 'ProjectCreateNestedOneWithoutBuildingsInput',
    fields: () => ({
      create: { type: ProjectCreateWithoutBuildingsInput },
      connectOrCreate: { type: ProjectCreateOrConnectWithoutBuildingsInput },
      connect: { type: ProjectWhereUniqueInput },
    }),
  })

export const NullableEnumBuildingProtocolFieldUpdateOperationsInput =
  new GraphQLInputObjectType({
    name: 'NullableEnumBuildingProtocolFieldUpdateOperationsInput',
    fields: () => ({
      set: { type: BuildingProtocol },
    }),
  })

export const DeviceUpdateManyWithoutBuildingInput = new GraphQLInputObjectType({
  name: 'DeviceUpdateManyWithoutBuildingInput',
  fields: () => ({
    create: {
      type: new GraphQLList(
        new GraphQLNonNull(DeviceCreateWithoutBuildingInput),
      ),
    },
    connectOrCreate: {
      type: new GraphQLList(
        new GraphQLNonNull(DeviceCreateOrConnectWithoutBuildingInput),
      ),
    },
    upsert: {
      type: new GraphQLList(
        new GraphQLNonNull(DeviceUpsertWithWhereUniqueWithoutBuildingInput),
      ),
    },
    createMany: { type: DeviceCreateManyBuildingInputEnvelope },
    set: { type: new GraphQLList(new GraphQLNonNull(DeviceWhereUniqueInput)) },
    disconnect: {
      type: new GraphQLList(new GraphQLNonNull(DeviceWhereUniqueInput)),
    },
    delete: {
      type: new GraphQLList(new GraphQLNonNull(DeviceWhereUniqueInput)),
    },
    connect: {
      type: new GraphQLList(new GraphQLNonNull(DeviceWhereUniqueInput)),
    },
    update: {
      type: new GraphQLList(
        new GraphQLNonNull(DeviceUpdateWithWhereUniqueWithoutBuildingInput),
      ),
    },
    updateMany: {
      type: new GraphQLList(
        new GraphQLNonNull(DeviceUpdateManyWithWhereWithoutBuildingInput),
      ),
    },
    deleteMany: {
      type: new GraphQLList(new GraphQLNonNull(DeviceScalarWhereInput)),
    },
  }),
})

export const ProjectUpdateOneRequiredWithoutBuildingsInput =
  new GraphQLInputObjectType({
    name: 'ProjectUpdateOneRequiredWithoutBuildingsInput',
    fields: () => ({
      create: { type: ProjectCreateWithoutBuildingsInput },
      connectOrCreate: { type: ProjectCreateOrConnectWithoutBuildingsInput },
      upsert: { type: ProjectUpsertWithoutBuildingsInput },
      connect: { type: ProjectWhereUniqueInput },
      update: { type: ProjectUpdateWithoutBuildingsInput },
    }),
  })

export const BuildingCreateNestedOneWithoutDevicesInput =
  new GraphQLInputObjectType({
    name: 'BuildingCreateNestedOneWithoutDevicesInput',
    fields: () => ({
      create: { type: BuildingCreateWithoutDevicesInput },
      connectOrCreate: { type: BuildingCreateOrConnectWithoutDevicesInput },
      connect: { type: BuildingWhereUniqueInput },
    }),
  })

export const InputCreateNestedManyWithoutDeviceInput =
  new GraphQLInputObjectType({
    name: 'InputCreateNestedManyWithoutDeviceInput',
    fields: () => ({
      create: {
        type: new GraphQLList(
          new GraphQLNonNull(InputCreateWithoutDeviceInput),
        ),
      },
      connectOrCreate: {
        type: new GraphQLList(
          new GraphQLNonNull(InputCreateOrConnectWithoutDeviceInput),
        ),
      },
      createMany: { type: InputCreateManyDeviceInputEnvelope },
      connect: {
        type: new GraphQLList(new GraphQLNonNull(InputWhereUniqueInput)),
      },
    }),
  })

export const OutputCreateNestedManyWithoutDeviceInput =
  new GraphQLInputObjectType({
    name: 'OutputCreateNestedManyWithoutDeviceInput',
    fields: () => ({
      create: {
        type: new GraphQLList(
          new GraphQLNonNull(OutputCreateWithoutDeviceInput),
        ),
      },
      connectOrCreate: {
        type: new GraphQLList(
          new GraphQLNonNull(OutputCreateOrConnectWithoutDeviceInput),
        ),
      },
      createMany: { type: OutputCreateManyDeviceInputEnvelope },
      connect: {
        type: new GraphQLList(new GraphQLNonNull(OutputWhereUniqueInput)),
      },
    }),
  })

export const PidCreateNestedManyWithoutDeviceInput = new GraphQLInputObjectType(
  {
    name: 'PidCreateNestedManyWithoutDeviceInput',
    fields: () => ({
      create: {
        type: new GraphQLList(new GraphQLNonNull(PidCreateWithoutDeviceInput)),
      },
      connectOrCreate: {
        type: new GraphQLList(
          new GraphQLNonNull(PidCreateOrConnectWithoutDeviceInput),
        ),
      },
      createMany: { type: PidCreateManyDeviceInputEnvelope },
      connect: {
        type: new GraphQLList(new GraphQLNonNull(PidWhereUniqueInput)),
      },
    }),
  },
)

export const VariableCreateNestedManyWithoutDeviceInput =
  new GraphQLInputObjectType({
    name: 'VariableCreateNestedManyWithoutDeviceInput',
    fields: () => ({
      create: {
        type: new GraphQLList(
          new GraphQLNonNull(VariableCreateWithoutDeviceInput),
        ),
      },
      connectOrCreate: {
        type: new GraphQLList(
          new GraphQLNonNull(VariableCreateOrConnectWithoutDeviceInput),
        ),
      },
      createMany: { type: VariableCreateManyDeviceInputEnvelope },
      connect: {
        type: new GraphQLList(new GraphQLNonNull(VariableWhereUniqueInput)),
      },
    }),
  })

export const GraphicCreateNestedManyWithoutDeviceInput =
  new GraphQLInputObjectType({
    name: 'GraphicCreateNestedManyWithoutDeviceInput',
    fields: () => ({
      create: {
        type: new GraphQLList(
          new GraphQLNonNull(GraphicCreateWithoutDeviceInput),
        ),
      },
      connectOrCreate: {
        type: new GraphQLList(
          new GraphQLNonNull(GraphicCreateOrConnectWithoutDeviceInput),
        ),
      },
      createMany: { type: GraphicCreateManyDeviceInputEnvelope },
      connect: {
        type: new GraphQLList(new GraphQLNonNull(GraphicWhereUniqueInput)),
      },
    }),
  })

export const ProgramCreateNestedManyWithoutDeviceInput =
  new GraphQLInputObjectType({
    name: 'ProgramCreateNestedManyWithoutDeviceInput',
    fields: () => ({
      create: {
        type: new GraphQLList(
          new GraphQLNonNull(ProgramCreateWithoutDeviceInput),
        ),
      },
      connectOrCreate: {
        type: new GraphQLList(
          new GraphQLNonNull(ProgramCreateOrConnectWithoutDeviceInput),
        ),
      },
      createMany: { type: ProgramCreateManyDeviceInputEnvelope },
      connect: {
        type: new GraphQLList(new GraphQLNonNull(ProgramWhereUniqueInput)),
      },
    }),
  })

export const HolidayCreateNestedManyWithoutDeviceInput =
  new GraphQLInputObjectType({
    name: 'HolidayCreateNestedManyWithoutDeviceInput',
    fields: () => ({
      create: {
        type: new GraphQLList(
          new GraphQLNonNull(HolidayCreateWithoutDeviceInput),
        ),
      },
      connectOrCreate: {
        type: new GraphQLList(
          new GraphQLNonNull(HolidayCreateOrConnectWithoutDeviceInput),
        ),
      },
      createMany: { type: HolidayCreateManyDeviceInputEnvelope },
      connect: {
        type: new GraphQLList(new GraphQLNonNull(HolidayWhereUniqueInput)),
      },
    }),
  })

export const ScheduleCreateNestedManyWithoutDeviceInput =
  new GraphQLInputObjectType({
    name: 'ScheduleCreateNestedManyWithoutDeviceInput',
    fields: () => ({
      create: {
        type: new GraphQLList(
          new GraphQLNonNull(ScheduleCreateWithoutDeviceInput),
        ),
      },
      connectOrCreate: {
        type: new GraphQLList(
          new GraphQLNonNull(ScheduleCreateOrConnectWithoutDeviceInput),
        ),
      },
      createMany: { type: ScheduleCreateManyDeviceInputEnvelope },
      connect: {
        type: new GraphQLList(new GraphQLNonNull(ScheduleWhereUniqueInput)),
      },
    }),
  })

export const EnumDeviceConnectionFieldUpdateOperationsInput =
  new GraphQLInputObjectType({
    name: 'EnumDeviceConnectionFieldUpdateOperationsInput',
    fields: () => ({
      set: { type: DeviceConnection },
    }),
  })

export const BuildingUpdateOneWithoutDevicesInput = new GraphQLInputObjectType({
  name: 'BuildingUpdateOneWithoutDevicesInput',
  fields: () => ({
    create: { type: BuildingCreateWithoutDevicesInput },
    connectOrCreate: { type: BuildingCreateOrConnectWithoutDevicesInput },
    upsert: { type: BuildingUpsertWithoutDevicesInput },
    disconnect: { type: GraphQLBoolean },
    delete: { type: GraphQLBoolean },
    connect: { type: BuildingWhereUniqueInput },
    update: { type: BuildingUpdateWithoutDevicesInput },
  }),
})

export const InputUpdateManyWithoutDeviceInput = new GraphQLInputObjectType({
  name: 'InputUpdateManyWithoutDeviceInput',
  fields: () => ({
    create: {
      type: new GraphQLList(new GraphQLNonNull(InputCreateWithoutDeviceInput)),
    },
    connectOrCreate: {
      type: new GraphQLList(
        new GraphQLNonNull(InputCreateOrConnectWithoutDeviceInput),
      ),
    },
    upsert: {
      type: new GraphQLList(
        new GraphQLNonNull(InputUpsertWithWhereUniqueWithoutDeviceInput),
      ),
    },
    createMany: { type: InputCreateManyDeviceInputEnvelope },
    set: { type: new GraphQLList(new GraphQLNonNull(InputWhereUniqueInput)) },
    disconnect: {
      type: new GraphQLList(new GraphQLNonNull(InputWhereUniqueInput)),
    },
    delete: {
      type: new GraphQLList(new GraphQLNonNull(InputWhereUniqueInput)),
    },
    connect: {
      type: new GraphQLList(new GraphQLNonNull(InputWhereUniqueInput)),
    },
    update: {
      type: new GraphQLList(
        new GraphQLNonNull(InputUpdateWithWhereUniqueWithoutDeviceInput),
      ),
    },
    updateMany: {
      type: new GraphQLList(
        new GraphQLNonNull(InputUpdateManyWithWhereWithoutDeviceInput),
      ),
    },
    deleteMany: {
      type: new GraphQLList(new GraphQLNonNull(InputScalarWhereInput)),
    },
  }),
})

export const OutputUpdateManyWithoutDeviceInput = new GraphQLInputObjectType({
  name: 'OutputUpdateManyWithoutDeviceInput',
  fields: () => ({
    create: {
      type: new GraphQLList(new GraphQLNonNull(OutputCreateWithoutDeviceInput)),
    },
    connectOrCreate: {
      type: new GraphQLList(
        new GraphQLNonNull(OutputCreateOrConnectWithoutDeviceInput),
      ),
    },
    upsert: {
      type: new GraphQLList(
        new GraphQLNonNull(OutputUpsertWithWhereUniqueWithoutDeviceInput),
      ),
    },
    createMany: { type: OutputCreateManyDeviceInputEnvelope },
    set: { type: new GraphQLList(new GraphQLNonNull(OutputWhereUniqueInput)) },
    disconnect: {
      type: new GraphQLList(new GraphQLNonNull(OutputWhereUniqueInput)),
    },
    delete: {
      type: new GraphQLList(new GraphQLNonNull(OutputWhereUniqueInput)),
    },
    connect: {
      type: new GraphQLList(new GraphQLNonNull(OutputWhereUniqueInput)),
    },
    update: {
      type: new GraphQLList(
        new GraphQLNonNull(OutputUpdateWithWhereUniqueWithoutDeviceInput),
      ),
    },
    updateMany: {
      type: new GraphQLList(
        new GraphQLNonNull(OutputUpdateManyWithWhereWithoutDeviceInput),
      ),
    },
    deleteMany: {
      type: new GraphQLList(new GraphQLNonNull(OutputScalarWhereInput)),
    },
  }),
})

export const PidUpdateManyWithoutDeviceInput = new GraphQLInputObjectType({
  name: 'PidUpdateManyWithoutDeviceInput',
  fields: () => ({
    create: {
      type: new GraphQLList(new GraphQLNonNull(PidCreateWithoutDeviceInput)),
    },
    connectOrCreate: {
      type: new GraphQLList(
        new GraphQLNonNull(PidCreateOrConnectWithoutDeviceInput),
      ),
    },
    upsert: {
      type: new GraphQLList(
        new GraphQLNonNull(PidUpsertWithWhereUniqueWithoutDeviceInput),
      ),
    },
    createMany: { type: PidCreateManyDeviceInputEnvelope },
    set: { type: new GraphQLList(new GraphQLNonNull(PidWhereUniqueInput)) },
    disconnect: {
      type: new GraphQLList(new GraphQLNonNull(PidWhereUniqueInput)),
    },
    delete: { type: new GraphQLList(new GraphQLNonNull(PidWhereUniqueInput)) },
    connect: { type: new GraphQLList(new GraphQLNonNull(PidWhereUniqueInput)) },
    update: {
      type: new GraphQLList(
        new GraphQLNonNull(PidUpdateWithWhereUniqueWithoutDeviceInput),
      ),
    },
    updateMany: {
      type: new GraphQLList(
        new GraphQLNonNull(PidUpdateManyWithWhereWithoutDeviceInput),
      ),
    },
    deleteMany: {
      type: new GraphQLList(new GraphQLNonNull(PidScalarWhereInput)),
    },
  }),
})

export const VariableUpdateManyWithoutDeviceInput = new GraphQLInputObjectType({
  name: 'VariableUpdateManyWithoutDeviceInput',
  fields: () => ({
    create: {
      type: new GraphQLList(
        new GraphQLNonNull(VariableCreateWithoutDeviceInput),
      ),
    },
    connectOrCreate: {
      type: new GraphQLList(
        new GraphQLNonNull(VariableCreateOrConnectWithoutDeviceInput),
      ),
    },
    upsert: {
      type: new GraphQLList(
        new GraphQLNonNull(VariableUpsertWithWhereUniqueWithoutDeviceInput),
      ),
    },
    createMany: { type: VariableCreateManyDeviceInputEnvelope },
    set: {
      type: new GraphQLList(new GraphQLNonNull(VariableWhereUniqueInput)),
    },
    disconnect: {
      type: new GraphQLList(new GraphQLNonNull(VariableWhereUniqueInput)),
    },
    delete: {
      type: new GraphQLList(new GraphQLNonNull(VariableWhereUniqueInput)),
    },
    connect: {
      type: new GraphQLList(new GraphQLNonNull(VariableWhereUniqueInput)),
    },
    update: {
      type: new GraphQLList(
        new GraphQLNonNull(VariableUpdateWithWhereUniqueWithoutDeviceInput),
      ),
    },
    updateMany: {
      type: new GraphQLList(
        new GraphQLNonNull(VariableUpdateManyWithWhereWithoutDeviceInput),
      ),
    },
    deleteMany: {
      type: new GraphQLList(new GraphQLNonNull(VariableScalarWhereInput)),
    },
  }),
})

export const GraphicUpdateManyWithoutDeviceInput = new GraphQLInputObjectType({
  name: 'GraphicUpdateManyWithoutDeviceInput',
  fields: () => ({
    create: {
      type: new GraphQLList(
        new GraphQLNonNull(GraphicCreateWithoutDeviceInput),
      ),
    },
    connectOrCreate: {
      type: new GraphQLList(
        new GraphQLNonNull(GraphicCreateOrConnectWithoutDeviceInput),
      ),
    },
    upsert: {
      type: new GraphQLList(
        new GraphQLNonNull(GraphicUpsertWithWhereUniqueWithoutDeviceInput),
      ),
    },
    createMany: { type: GraphicCreateManyDeviceInputEnvelope },
    set: { type: new GraphQLList(new GraphQLNonNull(GraphicWhereUniqueInput)) },
    disconnect: {
      type: new GraphQLList(new GraphQLNonNull(GraphicWhereUniqueInput)),
    },
    delete: {
      type: new GraphQLList(new GraphQLNonNull(GraphicWhereUniqueInput)),
    },
    connect: {
      type: new GraphQLList(new GraphQLNonNull(GraphicWhereUniqueInput)),
    },
    update: {
      type: new GraphQLList(
        new GraphQLNonNull(GraphicUpdateWithWhereUniqueWithoutDeviceInput),
      ),
    },
    updateMany: {
      type: new GraphQLList(
        new GraphQLNonNull(GraphicUpdateManyWithWhereWithoutDeviceInput),
      ),
    },
    deleteMany: {
      type: new GraphQLList(new GraphQLNonNull(GraphicScalarWhereInput)),
    },
  }),
})

export const ProgramUpdateManyWithoutDeviceInput = new GraphQLInputObjectType({
  name: 'ProgramUpdateManyWithoutDeviceInput',
  fields: () => ({
    create: {
      type: new GraphQLList(
        new GraphQLNonNull(ProgramCreateWithoutDeviceInput),
      ),
    },
    connectOrCreate: {
      type: new GraphQLList(
        new GraphQLNonNull(ProgramCreateOrConnectWithoutDeviceInput),
      ),
    },
    upsert: {
      type: new GraphQLList(
        new GraphQLNonNull(ProgramUpsertWithWhereUniqueWithoutDeviceInput),
      ),
    },
    createMany: { type: ProgramCreateManyDeviceInputEnvelope },
    set: { type: new GraphQLList(new GraphQLNonNull(ProgramWhereUniqueInput)) },
    disconnect: {
      type: new GraphQLList(new GraphQLNonNull(ProgramWhereUniqueInput)),
    },
    delete: {
      type: new GraphQLList(new GraphQLNonNull(ProgramWhereUniqueInput)),
    },
    connect: {
      type: new GraphQLList(new GraphQLNonNull(ProgramWhereUniqueInput)),
    },
    update: {
      type: new GraphQLList(
        new GraphQLNonNull(ProgramUpdateWithWhereUniqueWithoutDeviceInput),
      ),
    },
    updateMany: {
      type: new GraphQLList(
        new GraphQLNonNull(ProgramUpdateManyWithWhereWithoutDeviceInput),
      ),
    },
    deleteMany: {
      type: new GraphQLList(new GraphQLNonNull(ProgramScalarWhereInput)),
    },
  }),
})

export const HolidayUpdateManyWithoutDeviceInput = new GraphQLInputObjectType({
  name: 'HolidayUpdateManyWithoutDeviceInput',
  fields: () => ({
    create: {
      type: new GraphQLList(
        new GraphQLNonNull(HolidayCreateWithoutDeviceInput),
      ),
    },
    connectOrCreate: {
      type: new GraphQLList(
        new GraphQLNonNull(HolidayCreateOrConnectWithoutDeviceInput),
      ),
    },
    upsert: {
      type: new GraphQLList(
        new GraphQLNonNull(HolidayUpsertWithWhereUniqueWithoutDeviceInput),
      ),
    },
    createMany: { type: HolidayCreateManyDeviceInputEnvelope },
    set: { type: new GraphQLList(new GraphQLNonNull(HolidayWhereUniqueInput)) },
    disconnect: {
      type: new GraphQLList(new GraphQLNonNull(HolidayWhereUniqueInput)),
    },
    delete: {
      type: new GraphQLList(new GraphQLNonNull(HolidayWhereUniqueInput)),
    },
    connect: {
      type: new GraphQLList(new GraphQLNonNull(HolidayWhereUniqueInput)),
    },
    update: {
      type: new GraphQLList(
        new GraphQLNonNull(HolidayUpdateWithWhereUniqueWithoutDeviceInput),
      ),
    },
    updateMany: {
      type: new GraphQLList(
        new GraphQLNonNull(HolidayUpdateManyWithWhereWithoutDeviceInput),
      ),
    },
    deleteMany: {
      type: new GraphQLList(new GraphQLNonNull(HolidayScalarWhereInput)),
    },
  }),
})

export const ScheduleUpdateManyWithoutDeviceInput = new GraphQLInputObjectType({
  name: 'ScheduleUpdateManyWithoutDeviceInput',
  fields: () => ({
    create: {
      type: new GraphQLList(
        new GraphQLNonNull(ScheduleCreateWithoutDeviceInput),
      ),
    },
    connectOrCreate: {
      type: new GraphQLList(
        new GraphQLNonNull(ScheduleCreateOrConnectWithoutDeviceInput),
      ),
    },
    upsert: {
      type: new GraphQLList(
        new GraphQLNonNull(ScheduleUpsertWithWhereUniqueWithoutDeviceInput),
      ),
    },
    createMany: { type: ScheduleCreateManyDeviceInputEnvelope },
    set: {
      type: new GraphQLList(new GraphQLNonNull(ScheduleWhereUniqueInput)),
    },
    disconnect: {
      type: new GraphQLList(new GraphQLNonNull(ScheduleWhereUniqueInput)),
    },
    delete: {
      type: new GraphQLList(new GraphQLNonNull(ScheduleWhereUniqueInput)),
    },
    connect: {
      type: new GraphQLList(new GraphQLNonNull(ScheduleWhereUniqueInput)),
    },
    update: {
      type: new GraphQLList(
        new GraphQLNonNull(ScheduleUpdateWithWhereUniqueWithoutDeviceInput),
      ),
    },
    updateMany: {
      type: new GraphQLList(
        new GraphQLNonNull(ScheduleUpdateManyWithWhereWithoutDeviceInput),
      ),
    },
    deleteMany: {
      type: new GraphQLList(new GraphQLNonNull(ScheduleScalarWhereInput)),
    },
  }),
})

export const DeviceCreateNestedOneWithoutInputsInput =
  new GraphQLInputObjectType({
    name: 'DeviceCreateNestedOneWithoutInputsInput',
    fields: () => ({
      create: { type: DeviceCreateWithoutInputsInput },
      connectOrCreate: { type: DeviceCreateOrConnectWithoutInputsInput },
      connect: { type: DeviceWhereUniqueInput },
    }),
  })

export const EnumAutoManualFieldUpdateOperationsInput =
  new GraphQLInputObjectType({
    name: 'EnumAutoManualFieldUpdateOperationsInput',
    fields: () => ({
      set: { type: AutoManual },
    }),
  })

export const NullableFloatFieldUpdateOperationsInput =
  new GraphQLInputObjectType({
    name: 'NullableFloatFieldUpdateOperationsInput',
    fields: () => ({
      set: { type: GraphQLFloat },
      increment: { type: GraphQLFloat },
      decrement: { type: GraphQLFloat },
      multiply: { type: GraphQLFloat },
      divide: { type: GraphQLFloat },
    }),
  })

export const DeviceUpdateOneWithoutInputsInput = new GraphQLInputObjectType({
  name: 'DeviceUpdateOneWithoutInputsInput',
  fields: () => ({
    create: { type: DeviceCreateWithoutInputsInput },
    connectOrCreate: { type: DeviceCreateOrConnectWithoutInputsInput },
    upsert: { type: DeviceUpsertWithoutInputsInput },
    disconnect: { type: GraphQLBoolean },
    delete: { type: GraphQLBoolean },
    connect: { type: DeviceWhereUniqueInput },
    update: { type: DeviceUpdateWithoutInputsInput },
  }),
})

export const DeviceCreateNestedOneWithoutOutputsInput =
  new GraphQLInputObjectType({
    name: 'DeviceCreateNestedOneWithoutOutputsInput',
    fields: () => ({
      create: { type: DeviceCreateWithoutOutputsInput },
      connectOrCreate: { type: DeviceCreateOrConnectWithoutOutputsInput },
      connect: { type: DeviceWhereUniqueInput },
    }),
  })

export const NullableEnumAutoManualFieldUpdateOperationsInput =
  new GraphQLInputObjectType({
    name: 'NullableEnumAutoManualFieldUpdateOperationsInput',
    fields: () => ({
      set: { type: AutoManual },
    }),
  })

export const DeviceUpdateOneWithoutOutputsInput = new GraphQLInputObjectType({
  name: 'DeviceUpdateOneWithoutOutputsInput',
  fields: () => ({
    create: { type: DeviceCreateWithoutOutputsInput },
    connectOrCreate: { type: DeviceCreateOrConnectWithoutOutputsInput },
    upsert: { type: DeviceUpsertWithoutOutputsInput },
    disconnect: { type: GraphQLBoolean },
    delete: { type: GraphQLBoolean },
    connect: { type: DeviceWhereUniqueInput },
    update: { type: DeviceUpdateWithoutOutputsInput },
  }),
})

export const DeviceCreateNestedOneWithoutVariablesInput =
  new GraphQLInputObjectType({
    name: 'DeviceCreateNestedOneWithoutVariablesInput',
    fields: () => ({
      create: { type: DeviceCreateWithoutVariablesInput },
      connectOrCreate: { type: DeviceCreateOrConnectWithoutVariablesInput },
      connect: { type: DeviceWhereUniqueInput },
    }),
  })

export const DeviceUpdateOneWithoutVariablesInput = new GraphQLInputObjectType({
  name: 'DeviceUpdateOneWithoutVariablesInput',
  fields: () => ({
    create: { type: DeviceCreateWithoutVariablesInput },
    connectOrCreate: { type: DeviceCreateOrConnectWithoutVariablesInput },
    upsert: { type: DeviceUpsertWithoutVariablesInput },
    disconnect: { type: GraphQLBoolean },
    delete: { type: GraphQLBoolean },
    connect: { type: DeviceWhereUniqueInput },
    update: { type: DeviceUpdateWithoutVariablesInput },
  }),
})

export const DeviceCreateNestedOneWithoutProgramsInput =
  new GraphQLInputObjectType({
    name: 'DeviceCreateNestedOneWithoutProgramsInput',
    fields: () => ({
      create: { type: DeviceCreateWithoutProgramsInput },
      connectOrCreate: { type: DeviceCreateOrConnectWithoutProgramsInput },
      connect: { type: DeviceWhereUniqueInput },
    }),
  })

export const DeviceUpdateOneWithoutProgramsInput = new GraphQLInputObjectType({
  name: 'DeviceUpdateOneWithoutProgramsInput',
  fields: () => ({
    create: { type: DeviceCreateWithoutProgramsInput },
    connectOrCreate: { type: DeviceCreateOrConnectWithoutProgramsInput },
    upsert: { type: DeviceUpsertWithoutProgramsInput },
    disconnect: { type: GraphQLBoolean },
    delete: { type: GraphQLBoolean },
    connect: { type: DeviceWhereUniqueInput },
    update: { type: DeviceUpdateWithoutProgramsInput },
  }),
})

export const DeviceCreateNestedOneWithoutPidsInput = new GraphQLInputObjectType(
  {
    name: 'DeviceCreateNestedOneWithoutPidsInput',
    fields: () => ({
      create: { type: DeviceCreateWithoutPidsInput },
      connectOrCreate: { type: DeviceCreateOrConnectWithoutPidsInput },
      connect: { type: DeviceWhereUniqueInput },
    }),
  },
)

export const DeviceUpdateOneWithoutPidsInput = new GraphQLInputObjectType({
  name: 'DeviceUpdateOneWithoutPidsInput',
  fields: () => ({
    create: { type: DeviceCreateWithoutPidsInput },
    connectOrCreate: { type: DeviceCreateOrConnectWithoutPidsInput },
    upsert: { type: DeviceUpsertWithoutPidsInput },
    disconnect: { type: GraphQLBoolean },
    delete: { type: GraphQLBoolean },
    connect: { type: DeviceWhereUniqueInput },
    update: { type: DeviceUpdateWithoutPidsInput },
  }),
})

export const FileCreateNestedOneWithoutGraphicInput =
  new GraphQLInputObjectType({
    name: 'FileCreateNestedOneWithoutGraphicInput',
    fields: () => ({
      create: { type: FileCreateWithoutGraphicInput },
      connectOrCreate: { type: FileCreateOrConnectWithoutGraphicInput },
      connect: { type: FileWhereUniqueInput },
    }),
  })

export const DeviceCreateNestedOneWithoutGraphicsInput =
  new GraphQLInputObjectType({
    name: 'DeviceCreateNestedOneWithoutGraphicsInput',
    fields: () => ({
      create: { type: DeviceCreateWithoutGraphicsInput },
      connectOrCreate: { type: DeviceCreateOrConnectWithoutGraphicsInput },
      connect: { type: DeviceWhereUniqueInput },
    }),
  })

export const FileUpdateOneWithoutGraphicInput = new GraphQLInputObjectType({
  name: 'FileUpdateOneWithoutGraphicInput',
  fields: () => ({
    create: { type: FileCreateWithoutGraphicInput },
    connectOrCreate: { type: FileCreateOrConnectWithoutGraphicInput },
    upsert: { type: FileUpsertWithoutGraphicInput },
    disconnect: { type: GraphQLBoolean },
    delete: { type: GraphQLBoolean },
    connect: { type: FileWhereUniqueInput },
    update: { type: FileUpdateWithoutGraphicInput },
  }),
})

export const DeviceUpdateOneWithoutGraphicsInput = new GraphQLInputObjectType({
  name: 'DeviceUpdateOneWithoutGraphicsInput',
  fields: () => ({
    create: { type: DeviceCreateWithoutGraphicsInput },
    connectOrCreate: { type: DeviceCreateOrConnectWithoutGraphicsInput },
    upsert: { type: DeviceUpsertWithoutGraphicsInput },
    disconnect: { type: GraphQLBoolean },
    delete: { type: GraphQLBoolean },
    connect: { type: DeviceWhereUniqueInput },
    update: { type: DeviceUpdateWithoutGraphicsInput },
  }),
})

export const DeviceCreateNestedOneWithoutSchedulesInput =
  new GraphQLInputObjectType({
    name: 'DeviceCreateNestedOneWithoutSchedulesInput',
    fields: () => ({
      create: { type: DeviceCreateWithoutSchedulesInput },
      connectOrCreate: { type: DeviceCreateOrConnectWithoutSchedulesInput },
      connect: { type: DeviceWhereUniqueInput },
    }),
  })

export const ScheduleTimeCreateNestedManyWithoutScheduleInput =
  new GraphQLInputObjectType({
    name: 'ScheduleTimeCreateNestedManyWithoutScheduleInput',
    fields: () => ({
      create: {
        type: new GraphQLList(
          new GraphQLNonNull(ScheduleTimeCreateWithoutScheduleInput),
        ),
      },
      connectOrCreate: {
        type: new GraphQLList(
          new GraphQLNonNull(ScheduleTimeCreateOrConnectWithoutScheduleInput),
        ),
      },
      createMany: { type: ScheduleTimeCreateManyScheduleInputEnvelope },
      connect: {
        type: new GraphQLList(new GraphQLNonNull(ScheduleTimeWhereUniqueInput)),
      },
    }),
  })

export const DeviceUpdateOneWithoutSchedulesInput = new GraphQLInputObjectType({
  name: 'DeviceUpdateOneWithoutSchedulesInput',
  fields: () => ({
    create: { type: DeviceCreateWithoutSchedulesInput },
    connectOrCreate: { type: DeviceCreateOrConnectWithoutSchedulesInput },
    upsert: { type: DeviceUpsertWithoutSchedulesInput },
    disconnect: { type: GraphQLBoolean },
    delete: { type: GraphQLBoolean },
    connect: { type: DeviceWhereUniqueInput },
    update: { type: DeviceUpdateWithoutSchedulesInput },
  }),
})

export const ScheduleTimeUpdateManyWithoutScheduleInput =
  new GraphQLInputObjectType({
    name: 'ScheduleTimeUpdateManyWithoutScheduleInput',
    fields: () => ({
      create: {
        type: new GraphQLList(
          new GraphQLNonNull(ScheduleTimeCreateWithoutScheduleInput),
        ),
      },
      connectOrCreate: {
        type: new GraphQLList(
          new GraphQLNonNull(ScheduleTimeCreateOrConnectWithoutScheduleInput),
        ),
      },
      upsert: {
        type: new GraphQLList(
          new GraphQLNonNull(
            ScheduleTimeUpsertWithWhereUniqueWithoutScheduleInput,
          ),
        ),
      },
      createMany: { type: ScheduleTimeCreateManyScheduleInputEnvelope },
      set: {
        type: new GraphQLList(new GraphQLNonNull(ScheduleTimeWhereUniqueInput)),
      },
      disconnect: {
        type: new GraphQLList(new GraphQLNonNull(ScheduleTimeWhereUniqueInput)),
      },
      delete: {
        type: new GraphQLList(new GraphQLNonNull(ScheduleTimeWhereUniqueInput)),
      },
      connect: {
        type: new GraphQLList(new GraphQLNonNull(ScheduleTimeWhereUniqueInput)),
      },
      update: {
        type: new GraphQLList(
          new GraphQLNonNull(
            ScheduleTimeUpdateWithWhereUniqueWithoutScheduleInput,
          ),
        ),
      },
      updateMany: {
        type: new GraphQLList(
          new GraphQLNonNull(
            ScheduleTimeUpdateManyWithWhereWithoutScheduleInput,
          ),
        ),
      },
      deleteMany: {
        type: new GraphQLList(new GraphQLNonNull(ScheduleTimeScalarWhereInput)),
      },
    }),
  })

export const HolidayCreatedaysInput = new GraphQLInputObjectType({
  name: 'HolidayCreatedaysInput',
  fields: () => ({
    set: {
      type: new GraphQLNonNull(
        new GraphQLList(new GraphQLNonNull(GraphQLDateTime)),
      ),
    },
  }),
})

export const DeviceCreateNestedOneWithoutHolidaysInput =
  new GraphQLInputObjectType({
    name: 'DeviceCreateNestedOneWithoutHolidaysInput',
    fields: () => ({
      create: { type: DeviceCreateWithoutHolidaysInput },
      connectOrCreate: { type: DeviceCreateOrConnectWithoutHolidaysInput },
      connect: { type: DeviceWhereUniqueInput },
    }),
  })

export const HolidayUpdatedaysInput = new GraphQLInputObjectType({
  name: 'HolidayUpdatedaysInput',
  fields: () => ({
    set: { type: new GraphQLList(new GraphQLNonNull(GraphQLDateTime)) },
    push: { type: new GraphQLList(new GraphQLNonNull(GraphQLDateTime)) },
  }),
})

export const DeviceUpdateOneWithoutHolidaysInput = new GraphQLInputObjectType({
  name: 'DeviceUpdateOneWithoutHolidaysInput',
  fields: () => ({
    create: { type: DeviceCreateWithoutHolidaysInput },
    connectOrCreate: { type: DeviceCreateOrConnectWithoutHolidaysInput },
    upsert: { type: DeviceUpsertWithoutHolidaysInput },
    disconnect: { type: GraphQLBoolean },
    delete: { type: GraphQLBoolean },
    connect: { type: DeviceWhereUniqueInput },
    update: { type: DeviceUpdateWithoutHolidaysInput },
  }),
})

export const ScheduleCreateNestedOneWithoutTimesInput =
  new GraphQLInputObjectType({
    name: 'ScheduleCreateNestedOneWithoutTimesInput',
    fields: () => ({
      create: { type: ScheduleCreateWithoutTimesInput },
      connectOrCreate: { type: ScheduleCreateOrConnectWithoutTimesInput },
      connect: { type: ScheduleWhereUniqueInput },
    }),
  })

export const NullableDateTimeFieldUpdateOperationsInput =
  new GraphQLInputObjectType({
    name: 'NullableDateTimeFieldUpdateOperationsInput',
    fields: () => ({
      set: { type: GraphQLDateTime },
    }),
  })

export const ScheduleUpdateOneWithoutTimesInput = new GraphQLInputObjectType({
  name: 'ScheduleUpdateOneWithoutTimesInput',
  fields: () => ({
    create: { type: ScheduleCreateWithoutTimesInput },
    connectOrCreate: { type: ScheduleCreateOrConnectWithoutTimesInput },
    upsert: { type: ScheduleUpsertWithoutTimesInput },
    disconnect: { type: GraphQLBoolean },
    delete: { type: GraphQLBoolean },
    connect: { type: ScheduleWhereUniqueInput },
    update: { type: ScheduleUpdateWithoutTimesInput },
  }),
})

export const NestedIntFilter = new GraphQLInputObjectType({
  name: 'NestedIntFilter',
  fields: () => ({
    equals: { type: GraphQLInt },
    in: { type: new GraphQLList(new GraphQLNonNull(GraphQLInt)) },
    notIn: { type: new GraphQLList(new GraphQLNonNull(GraphQLInt)) },
    lt: { type: GraphQLInt },
    lte: { type: GraphQLInt },
    gt: { type: GraphQLInt },
    gte: { type: GraphQLInt },
    not: { type: NestedIntFilter },
  }),
})

export const NestedStringFilter = new GraphQLInputObjectType({
  name: 'NestedStringFilter',
  fields: () => ({
    equals: { type: GraphQLString },
    in: { type: new GraphQLList(new GraphQLNonNull(GraphQLString)) },
    notIn: { type: new GraphQLList(new GraphQLNonNull(GraphQLString)) },
    lt: { type: GraphQLString },
    lte: { type: GraphQLString },
    gt: { type: GraphQLString },
    gte: { type: GraphQLString },
    contains: { type: GraphQLString },
    startsWith: { type: GraphQLString },
    endsWith: { type: GraphQLString },
    not: { type: NestedStringFilter },
  }),
})

export const NestedIntNullableFilter = new GraphQLInputObjectType({
  name: 'NestedIntNullableFilter',
  fields: () => ({
    equals: { type: GraphQLInt },
    in: { type: new GraphQLList(GraphQLInt) },
    notIn: { type: new GraphQLList(GraphQLInt) },
    lt: { type: GraphQLInt },
    lte: { type: GraphQLInt },
    gt: { type: GraphQLInt },
    gte: { type: GraphQLInt },
    not: { type: NestedIntNullableFilter },
  }),
})

export const NestedDateTimeFilter = new GraphQLInputObjectType({
  name: 'NestedDateTimeFilter',
  fields: () => ({
    equals: { type: GraphQLDateTime },
    in: { type: new GraphQLList(new GraphQLNonNull(GraphQLDateTime)) },
    notIn: { type: new GraphQLList(new GraphQLNonNull(GraphQLDateTime)) },
    lt: { type: GraphQLDateTime },
    lte: { type: GraphQLDateTime },
    gt: { type: GraphQLDateTime },
    gte: { type: GraphQLDateTime },
    not: { type: NestedDateTimeFilter },
  }),
})

export const NestedIntWithAggregatesFilter = new GraphQLInputObjectType({
  name: 'NestedIntWithAggregatesFilter',
  fields: () => ({
    equals: { type: GraphQLInt },
    in: { type: new GraphQLList(new GraphQLNonNull(GraphQLInt)) },
    notIn: { type: new GraphQLList(new GraphQLNonNull(GraphQLInt)) },
    lt: { type: GraphQLInt },
    lte: { type: GraphQLInt },
    gt: { type: GraphQLInt },
    gte: { type: GraphQLInt },
    not: { type: NestedIntWithAggregatesFilter },
    _count: { type: NestedIntFilter },
    _avg: { type: NestedFloatFilter },
    _sum: { type: NestedIntFilter },
    _min: { type: NestedIntFilter },
    _max: { type: NestedIntFilter },
  }),
})

export const NestedFloatFilter = new GraphQLInputObjectType({
  name: 'NestedFloatFilter',
  fields: () => ({
    equals: { type: GraphQLFloat },
    in: { type: new GraphQLList(new GraphQLNonNull(GraphQLFloat)) },
    notIn: { type: new GraphQLList(new GraphQLNonNull(GraphQLFloat)) },
    lt: { type: GraphQLFloat },
    lte: { type: GraphQLFloat },
    gt: { type: GraphQLFloat },
    gte: { type: GraphQLFloat },
    not: { type: NestedFloatFilter },
  }),
})

export const NestedStringWithAggregatesFilter = new GraphQLInputObjectType({
  name: 'NestedStringWithAggregatesFilter',
  fields: () => ({
    equals: { type: GraphQLString },
    in: { type: new GraphQLList(new GraphQLNonNull(GraphQLString)) },
    notIn: { type: new GraphQLList(new GraphQLNonNull(GraphQLString)) },
    lt: { type: GraphQLString },
    lte: { type: GraphQLString },
    gt: { type: GraphQLString },
    gte: { type: GraphQLString },
    contains: { type: GraphQLString },
    startsWith: { type: GraphQLString },
    endsWith: { type: GraphQLString },
    not: { type: NestedStringWithAggregatesFilter },
    _count: { type: NestedIntFilter },
    _min: { type: NestedStringFilter },
    _max: { type: NestedStringFilter },
  }),
})

export const NestedIntNullableWithAggregatesFilter = new GraphQLInputObjectType(
  {
    name: 'NestedIntNullableWithAggregatesFilter',
    fields: () => ({
      equals: { type: GraphQLInt },
      in: { type: new GraphQLList(GraphQLInt) },
      notIn: { type: new GraphQLList(GraphQLInt) },
      lt: { type: GraphQLInt },
      lte: { type: GraphQLInt },
      gt: { type: GraphQLInt },
      gte: { type: GraphQLInt },
      not: { type: NestedIntNullableWithAggregatesFilter },
      _count: { type: NestedIntNullableFilter },
      _avg: { type: NestedFloatNullableFilter },
      _sum: { type: NestedIntNullableFilter },
      _min: { type: NestedIntNullableFilter },
      _max: { type: NestedIntNullableFilter },
    }),
  },
)

export const NestedFloatNullableFilter = new GraphQLInputObjectType({
  name: 'NestedFloatNullableFilter',
  fields: () => ({
    equals: { type: GraphQLFloat },
    in: { type: new GraphQLList(GraphQLFloat) },
    notIn: { type: new GraphQLList(GraphQLFloat) },
    lt: { type: GraphQLFloat },
    lte: { type: GraphQLFloat },
    gt: { type: GraphQLFloat },
    gte: { type: GraphQLFloat },
    not: { type: NestedFloatNullableFilter },
  }),
})

export const NestedDateTimeWithAggregatesFilter = new GraphQLInputObjectType({
  name: 'NestedDateTimeWithAggregatesFilter',
  fields: () => ({
    equals: { type: GraphQLDateTime },
    in: { type: new GraphQLList(new GraphQLNonNull(GraphQLDateTime)) },
    notIn: { type: new GraphQLList(new GraphQLNonNull(GraphQLDateTime)) },
    lt: { type: GraphQLDateTime },
    lte: { type: GraphQLDateTime },
    gt: { type: GraphQLDateTime },
    gte: { type: GraphQLDateTime },
    not: { type: NestedDateTimeWithAggregatesFilter },
    _count: { type: NestedIntFilter },
    _min: { type: NestedDateTimeFilter },
    _max: { type: NestedDateTimeFilter },
  }),
})

export const NestedJsonNullableFilter = new GraphQLInputObjectType({
  name: 'NestedJsonNullableFilter',
  fields: () => ({
    equals: { type: GraphQLJSON },
    not: { type: GraphQLJSON },
  }),
})

export const NestedStringNullableFilter = new GraphQLInputObjectType({
  name: 'NestedStringNullableFilter',
  fields: () => ({
    equals: { type: GraphQLString },
    in: { type: new GraphQLList(GraphQLString) },
    notIn: { type: new GraphQLList(GraphQLString) },
    lt: { type: GraphQLString },
    lte: { type: GraphQLString },
    gt: { type: GraphQLString },
    gte: { type: GraphQLString },
    contains: { type: GraphQLString },
    startsWith: { type: GraphQLString },
    endsWith: { type: GraphQLString },
    not: { type: NestedStringNullableFilter },
  }),
})

export const NestedStringNullableWithAggregatesFilter =
  new GraphQLInputObjectType({
    name: 'NestedStringNullableWithAggregatesFilter',
    fields: () => ({
      equals: { type: GraphQLString },
      in: { type: new GraphQLList(GraphQLString) },
      notIn: { type: new GraphQLList(GraphQLString) },
      lt: { type: GraphQLString },
      lte: { type: GraphQLString },
      gt: { type: GraphQLString },
      gte: { type: GraphQLString },
      contains: { type: GraphQLString },
      startsWith: { type: GraphQLString },
      endsWith: { type: GraphQLString },
      not: { type: NestedStringNullableWithAggregatesFilter },
      _count: { type: NestedIntNullableFilter },
      _min: { type: NestedStringNullableFilter },
      _max: { type: NestedStringNullableFilter },
    }),
  })

export const NestedEnumBuildingProtocolNullableFilter =
  new GraphQLInputObjectType({
    name: 'NestedEnumBuildingProtocolNullableFilter',
    fields: () => ({
      equals: { type: BuildingProtocol },
      in: { type: new GraphQLList(BuildingProtocol) },
      notIn: { type: new GraphQLList(BuildingProtocol) },
      not: { type: NestedEnumBuildingProtocolNullableFilter },
    }),
  })

export const NestedEnumBuildingProtocolNullableWithAggregatesFilter =
  new GraphQLInputObjectType({
    name: 'NestedEnumBuildingProtocolNullableWithAggregatesFilter',
    fields: () => ({
      equals: { type: BuildingProtocol },
      in: { type: new GraphQLList(BuildingProtocol) },
      notIn: { type: new GraphQLList(BuildingProtocol) },
      not: { type: NestedEnumBuildingProtocolNullableWithAggregatesFilter },
      _count: { type: NestedIntNullableFilter },
      _min: { type: NestedEnumBuildingProtocolNullableFilter },
      _max: { type: NestedEnumBuildingProtocolNullableFilter },
    }),
  })

export const NestedEnumDeviceConnectionFilter = new GraphQLInputObjectType({
  name: 'NestedEnumDeviceConnectionFilter',
  fields: () => ({
    equals: { type: DeviceConnection },
    in: { type: new GraphQLList(new GraphQLNonNull(DeviceConnection)) },
    notIn: { type: new GraphQLList(new GraphQLNonNull(DeviceConnection)) },
    not: { type: NestedEnumDeviceConnectionFilter },
  }),
})

export const NestedEnumDeviceConnectionWithAggregatesFilter =
  new GraphQLInputObjectType({
    name: 'NestedEnumDeviceConnectionWithAggregatesFilter',
    fields: () => ({
      equals: { type: DeviceConnection },
      in: { type: new GraphQLList(new GraphQLNonNull(DeviceConnection)) },
      notIn: { type: new GraphQLList(new GraphQLNonNull(DeviceConnection)) },
      not: { type: NestedEnumDeviceConnectionWithAggregatesFilter },
      _count: { type: NestedIntFilter },
      _min: { type: NestedEnumDeviceConnectionFilter },
      _max: { type: NestedEnumDeviceConnectionFilter },
    }),
  })

export const NestedEnumAutoManualFilter = new GraphQLInputObjectType({
  name: 'NestedEnumAutoManualFilter',
  fields: () => ({
    equals: { type: AutoManual },
    in: { type: new GraphQLList(new GraphQLNonNull(AutoManual)) },
    notIn: { type: new GraphQLList(new GraphQLNonNull(AutoManual)) },
    not: { type: NestedEnumAutoManualFilter },
  }),
})

export const NestedEnumAutoManualWithAggregatesFilter =
  new GraphQLInputObjectType({
    name: 'NestedEnumAutoManualWithAggregatesFilter',
    fields: () => ({
      equals: { type: AutoManual },
      in: { type: new GraphQLList(new GraphQLNonNull(AutoManual)) },
      notIn: { type: new GraphQLList(new GraphQLNonNull(AutoManual)) },
      not: { type: NestedEnumAutoManualWithAggregatesFilter },
      _count: { type: NestedIntFilter },
      _min: { type: NestedEnumAutoManualFilter },
      _max: { type: NestedEnumAutoManualFilter },
    }),
  })

export const NestedFloatNullableWithAggregatesFilter =
  new GraphQLInputObjectType({
    name: 'NestedFloatNullableWithAggregatesFilter',
    fields: () => ({
      equals: { type: GraphQLFloat },
      in: { type: new GraphQLList(GraphQLFloat) },
      notIn: { type: new GraphQLList(GraphQLFloat) },
      lt: { type: GraphQLFloat },
      lte: { type: GraphQLFloat },
      gt: { type: GraphQLFloat },
      gte: { type: GraphQLFloat },
      not: { type: NestedFloatNullableWithAggregatesFilter },
      _count: { type: NestedIntNullableFilter },
      _avg: { type: NestedFloatNullableFilter },
      _sum: { type: NestedFloatNullableFilter },
      _min: { type: NestedFloatNullableFilter },
      _max: { type: NestedFloatNullableFilter },
    }),
  })

export const NestedEnumAutoManualNullableFilter = new GraphQLInputObjectType({
  name: 'NestedEnumAutoManualNullableFilter',
  fields: () => ({
    equals: { type: AutoManual },
    in: { type: new GraphQLList(AutoManual) },
    notIn: { type: new GraphQLList(AutoManual) },
    not: { type: NestedEnumAutoManualNullableFilter },
  }),
})

export const NestedEnumAutoManualNullableWithAggregatesFilter =
  new GraphQLInputObjectType({
    name: 'NestedEnumAutoManualNullableWithAggregatesFilter',
    fields: () => ({
      equals: { type: AutoManual },
      in: { type: new GraphQLList(AutoManual) },
      notIn: { type: new GraphQLList(AutoManual) },
      not: { type: NestedEnumAutoManualNullableWithAggregatesFilter },
      _count: { type: NestedIntNullableFilter },
      _min: { type: NestedEnumAutoManualNullableFilter },
      _max: { type: NestedEnumAutoManualNullableFilter },
    }),
  })

export const NestedDateTimeNullableFilter = new GraphQLInputObjectType({
  name: 'NestedDateTimeNullableFilter',
  fields: () => ({
    equals: { type: GraphQLDateTime },
    in: { type: new GraphQLList(GraphQLDateTime) },
    notIn: { type: new GraphQLList(GraphQLDateTime) },
    lt: { type: GraphQLDateTime },
    lte: { type: GraphQLDateTime },
    gt: { type: GraphQLDateTime },
    gte: { type: GraphQLDateTime },
    not: { type: NestedDateTimeNullableFilter },
  }),
})

export const NestedDateTimeNullableWithAggregatesFilter =
  new GraphQLInputObjectType({
    name: 'NestedDateTimeNullableWithAggregatesFilter',
    fields: () => ({
      equals: { type: GraphQLDateTime },
      in: { type: new GraphQLList(GraphQLDateTime) },
      notIn: { type: new GraphQLList(GraphQLDateTime) },
      lt: { type: GraphQLDateTime },
      lte: { type: GraphQLDateTime },
      gt: { type: GraphQLDateTime },
      gte: { type: GraphQLDateTime },
      not: { type: NestedDateTimeNullableWithAggregatesFilter },
      _count: { type: NestedIntNullableFilter },
      _min: { type: NestedDateTimeNullableFilter },
      _max: { type: NestedDateTimeNullableFilter },
    }),
  })

export const GraphicCreateWithoutPictureInput = new GraphQLInputObjectType({
  name: 'GraphicCreateWithoutPictureInput',
  fields: () => ({
    index: { type: new GraphQLNonNull(GraphQLInt) },
    label: { type: GraphQLString },
    fullLabel: { type: GraphQLString },
    elementCount: { type: GraphQLInt },
    binaryArray: { type: GraphQLString },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
    Device: { type: DeviceCreateNestedOneWithoutGraphicsInput },
  }),
})

export const GraphicCreateOrConnectWithoutPictureInput =
  new GraphQLInputObjectType({
    name: 'GraphicCreateOrConnectWithoutPictureInput',
    fields: () => ({
      where: { type: new GraphQLNonNull(GraphicWhereUniqueInput) },
      create: { type: new GraphQLNonNull(GraphicCreateWithoutPictureInput) },
    }),
  })

export const GraphicCreateManyPictureInputEnvelope = new GraphQLInputObjectType(
  {
    name: 'GraphicCreateManyPictureInputEnvelope',
    fields: () => ({
      data: {
        type: new GraphQLNonNull(
          new GraphQLList(new GraphQLNonNull(GraphicCreateManyPictureInput)),
        ),
      },
      skipDuplicates: { type: GraphQLBoolean },
    }),
  },
)

export const ProjectCreateWithoutImageInput = new GraphQLInputObjectType({
  name: 'ProjectCreateWithoutImageInput',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: new GraphQLNonNull(GraphQLString) },
    slug: { type: GraphQLString },
    description: { type: GraphQLString },
    buildings: { type: BuildingCreateNestedManyWithoutProjectInput },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
  }),
})

export const ProjectCreateOrConnectWithoutImageInput =
  new GraphQLInputObjectType({
    name: 'ProjectCreateOrConnectWithoutImageInput',
    fields: () => ({
      where: { type: new GraphQLNonNull(ProjectWhereUniqueInput) },
      create: { type: new GraphQLNonNull(ProjectCreateWithoutImageInput) },
    }),
  })

export const ProjectCreateManyImageInputEnvelope = new GraphQLInputObjectType({
  name: 'ProjectCreateManyImageInputEnvelope',
  fields: () => ({
    data: {
      type: new GraphQLNonNull(
        new GraphQLList(new GraphQLNonNull(ProjectCreateManyImageInput)),
      ),
    },
    skipDuplicates: { type: GraphQLBoolean },
  }),
})

export const GraphicUpsertWithWhereUniqueWithoutPictureInput =
  new GraphQLInputObjectType({
    name: 'GraphicUpsertWithWhereUniqueWithoutPictureInput',
    fields: () => ({
      where: { type: new GraphQLNonNull(GraphicWhereUniqueInput) },
      update: { type: new GraphQLNonNull(GraphicUpdateWithoutPictureInput) },
      create: { type: new GraphQLNonNull(GraphicCreateWithoutPictureInput) },
    }),
  })

export const GraphicUpdateWithWhereUniqueWithoutPictureInput =
  new GraphQLInputObjectType({
    name: 'GraphicUpdateWithWhereUniqueWithoutPictureInput',
    fields: () => ({
      where: { type: new GraphQLNonNull(GraphicWhereUniqueInput) },
      data: { type: new GraphQLNonNull(GraphicUpdateWithoutPictureInput) },
    }),
  })

export const GraphicUpdateManyWithWhereWithoutPictureInput =
  new GraphQLInputObjectType({
    name: 'GraphicUpdateManyWithWhereWithoutPictureInput',
    fields: () => ({
      where: { type: new GraphQLNonNull(GraphicScalarWhereInput) },
      data: { type: new GraphQLNonNull(GraphicUpdateManyMutationInput) },
    }),
  })

export const GraphicScalarWhereInput = new GraphQLInputObjectType({
  name: 'GraphicScalarFilter',
  fields: () => ({
    AND: { type: new GraphQLList(new GraphQLNonNull(GraphicScalarWhereInput)) },
    OR: { type: new GraphQLList(new GraphQLNonNull(GraphicScalarWhereInput)) },
    NOT: { type: new GraphQLList(new GraphQLNonNull(GraphicScalarWhereInput)) },
    id: { type: IntFilter },
    index: { type: IntFilter },
    label: { type: StringNullableFilter },
    fullLabel: { type: StringNullableFilter },
    fileId: { type: IntNullableFilter },
    elementCount: { type: IntFilter },
    binaryArray: { type: StringNullableFilter },
    createdAt: { type: DateTimeFilter },
    updatedAt: { type: DateTimeFilter },
    deviceId: { type: IntNullableFilter },
  }),
})

export const ProjectUpsertWithWhereUniqueWithoutImageInput =
  new GraphQLInputObjectType({
    name: 'ProjectUpsertWithWhereUniqueWithoutImageInput',
    fields: () => ({
      where: { type: new GraphQLNonNull(ProjectWhereUniqueInput) },
      update: { type: new GraphQLNonNull(ProjectUpdateWithoutImageInput) },
      create: { type: new GraphQLNonNull(ProjectCreateWithoutImageInput) },
    }),
  })

export const ProjectUpdateWithWhereUniqueWithoutImageInput =
  new GraphQLInputObjectType({
    name: 'ProjectUpdateWithWhereUniqueWithoutImageInput',
    fields: () => ({
      where: { type: new GraphQLNonNull(ProjectWhereUniqueInput) },
      data: { type: new GraphQLNonNull(ProjectUpdateWithoutImageInput) },
    }),
  })

export const ProjectUpdateManyWithWhereWithoutImageInput =
  new GraphQLInputObjectType({
    name: 'ProjectUpdateManyWithWhereWithoutImageInput',
    fields: () => ({
      where: { type: new GraphQLNonNull(ProjectScalarWhereInput) },
      data: { type: new GraphQLNonNull(ProjectUpdateManyMutationInput) },
    }),
  })

export const ProjectScalarWhereInput = new GraphQLInputObjectType({
  name: 'ProjectScalarFilter',
  fields: () => ({
    AND: { type: new GraphQLList(new GraphQLNonNull(ProjectScalarWhereInput)) },
    OR: { type: new GraphQLList(new GraphQLNonNull(ProjectScalarWhereInput)) },
    NOT: { type: new GraphQLList(new GraphQLNonNull(ProjectScalarWhereInput)) },
    id: { type: StringFilter },
    name: { type: StringFilter },
    slug: { type: StringNullableFilter },
    description: { type: StringNullableFilter },
    imageFileId: { type: IntNullableFilter },
    createdAt: { type: DateTimeFilter },
    updatedAt: { type: DateTimeFilter },
  }),
})

export const FileCreateWithoutProjectInput = new GraphQLInputObjectType({
  name: 'FileCreateWithoutProjectInput',
  fields: () => ({
    name: { type: new GraphQLNonNull(GraphQLString) },
    mimeType: { type: new GraphQLNonNull(GraphQLString) },
    path: { type: new GraphQLNonNull(GraphQLString) },
    size: { type: GraphQLInt },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
    meta: { type: GraphQLJSON },
    tags: { type: new GraphQLList(new GraphQLNonNull(GraphQLString)) },
    Graphic: { type: GraphicCreateNestedManyWithoutPictureInput },
  }),
})

export const FileCreateOrConnectWithoutProjectInput =
  new GraphQLInputObjectType({
    name: 'FileCreateOrConnectWithoutProjectInput',
    fields: () => ({
      where: { type: new GraphQLNonNull(FileWhereUniqueInput) },
      create: { type: new GraphQLNonNull(FileCreateWithoutProjectInput) },
    }),
  })

export const BuildingCreateWithoutProjectInput = new GraphQLInputObjectType({
  name: 'BuildingCreateWithoutProjectInput',
  fields: () => ({
    title: { type: new GraphQLNonNull(GraphQLString) },
    protocol: { type: BuildingProtocol },
    ip: { type: GraphQLString },
    modbusTcpPort: { type: GraphQLString },
    comPort: { type: GraphQLString },
    baudRate: { type: GraphQLInt },
    country: { type: GraphQLString },
    state: { type: GraphQLString },
    city: { type: GraphQLString },
    street: { type: GraphQLString },
    zip: { type: GraphQLString },
    engineering: { type: GraphQLString },
    devices: { type: DeviceCreateNestedManyWithoutBuildingInput },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
  }),
})

export const BuildingCreateOrConnectWithoutProjectInput =
  new GraphQLInputObjectType({
    name: 'BuildingCreateOrConnectWithoutProjectInput',
    fields: () => ({
      where: { type: new GraphQLNonNull(BuildingWhereUniqueInput) },
      create: { type: new GraphQLNonNull(BuildingCreateWithoutProjectInput) },
    }),
  })

export const BuildingCreateManyProjectInputEnvelope =
  new GraphQLInputObjectType({
    name: 'BuildingCreateManyProjectInputEnvelope',
    fields: () => ({
      data: {
        type: new GraphQLNonNull(
          new GraphQLList(new GraphQLNonNull(BuildingCreateManyProjectInput)),
        ),
      },
      skipDuplicates: { type: GraphQLBoolean },
    }),
  })

export const FileUpsertWithoutProjectInput = new GraphQLInputObjectType({
  name: 'FileUpsertWithoutProjectInput',
  fields: () => ({
    update: { type: new GraphQLNonNull(FileUpdateWithoutProjectInput) },
    create: { type: new GraphQLNonNull(FileCreateWithoutProjectInput) },
  }),
})

export const FileUpdateWithoutProjectInput = new GraphQLInputObjectType({
  name: 'FileUpdateWithoutProjectInput',
  fields: () => ({
    name: { type: GraphQLString },
    mimeType: { type: GraphQLString },
    path: { type: GraphQLString },
    size: { type: GraphQLInt },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
    meta: { type: GraphQLJSON },
    tags: { type: new GraphQLList(new GraphQLNonNull(GraphQLString)) },
    Graphic: { type: GraphicUpdateManyWithoutPictureInput },
  }),
})

export const BuildingUpsertWithWhereUniqueWithoutProjectInput =
  new GraphQLInputObjectType({
    name: 'BuildingUpsertWithWhereUniqueWithoutProjectInput',
    fields: () => ({
      where: { type: new GraphQLNonNull(BuildingWhereUniqueInput) },
      update: { type: new GraphQLNonNull(BuildingUpdateWithoutProjectInput) },
      create: { type: new GraphQLNonNull(BuildingCreateWithoutProjectInput) },
    }),
  })

export const BuildingUpdateWithWhereUniqueWithoutProjectInput =
  new GraphQLInputObjectType({
    name: 'BuildingUpdateWithWhereUniqueWithoutProjectInput',
    fields: () => ({
      where: { type: new GraphQLNonNull(BuildingWhereUniqueInput) },
      data: { type: new GraphQLNonNull(BuildingUpdateWithoutProjectInput) },
    }),
  })

export const BuildingUpdateManyWithWhereWithoutProjectInput =
  new GraphQLInputObjectType({
    name: 'BuildingUpdateManyWithWhereWithoutProjectInput',
    fields: () => ({
      where: { type: new GraphQLNonNull(BuildingScalarWhereInput) },
      data: { type: new GraphQLNonNull(BuildingUpdateManyMutationInput) },
    }),
  })

export const BuildingScalarWhereInput = new GraphQLInputObjectType({
  name: 'BuildingScalarFilter',
  fields: () => ({
    AND: {
      type: new GraphQLList(new GraphQLNonNull(BuildingScalarWhereInput)),
    },
    OR: { type: new GraphQLList(new GraphQLNonNull(BuildingScalarWhereInput)) },
    NOT: {
      type: new GraphQLList(new GraphQLNonNull(BuildingScalarWhereInput)),
    },
    id: { type: IntFilter },
    title: { type: StringFilter },
    protocol: { type: EnumBuildingProtocolNullableFilter },
    ip: { type: StringNullableFilter },
    modbusTcpPort: { type: StringNullableFilter },
    comPort: { type: StringNullableFilter },
    baudRate: { type: IntNullableFilter },
    country: { type: StringNullableFilter },
    state: { type: StringNullableFilter },
    city: { type: StringNullableFilter },
    street: { type: StringNullableFilter },
    zip: { type: StringNullableFilter },
    engineering: { type: StringFilter },
    createdAt: { type: DateTimeFilter },
    updatedAt: { type: DateTimeFilter },
    projectId: { type: StringFilter },
  }),
})

export const DeviceCreateWithoutBuildingInput = new GraphQLInputObjectType({
  name: 'DeviceCreateWithoutBuildingInput',
  fields: () => ({
    connection: { type: new GraphQLNonNull(DeviceConnection) },
    productType: { type: new GraphQLNonNull(GraphQLString) },
    alias: { type: GraphQLString },
    serialNumber: { type: GraphQLInt },
    networkId: { type: GraphQLInt },
    floor: { type: GraphQLString },
    room: { type: GraphQLString },
    inputs: { type: InputCreateNestedManyWithoutDeviceInput },
    outputs: { type: OutputCreateNestedManyWithoutDeviceInput },
    pids: { type: PidCreateNestedManyWithoutDeviceInput },
    variables: { type: VariableCreateNestedManyWithoutDeviceInput },
    graphics: { type: GraphicCreateNestedManyWithoutDeviceInput },
    programs: { type: ProgramCreateNestedManyWithoutDeviceInput },
    holidays: { type: HolidayCreateNestedManyWithoutDeviceInput },
    schedules: { type: ScheduleCreateNestedManyWithoutDeviceInput },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
  }),
})

export const DeviceCreateOrConnectWithoutBuildingInput =
  new GraphQLInputObjectType({
    name: 'DeviceCreateOrConnectWithoutBuildingInput',
    fields: () => ({
      where: { type: new GraphQLNonNull(DeviceWhereUniqueInput) },
      create: { type: new GraphQLNonNull(DeviceCreateWithoutBuildingInput) },
    }),
  })

export const DeviceCreateManyBuildingInputEnvelope = new GraphQLInputObjectType(
  {
    name: 'DeviceCreateManyBuildingInputEnvelope',
    fields: () => ({
      data: {
        type: new GraphQLNonNull(
          new GraphQLList(new GraphQLNonNull(DeviceCreateManyBuildingInput)),
        ),
      },
      skipDuplicates: { type: GraphQLBoolean },
    }),
  },
)

export const ProjectCreateWithoutBuildingsInput = new GraphQLInputObjectType({
  name: 'ProjectCreateWithoutBuildingsInput',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: new GraphQLNonNull(GraphQLString) },
    slug: { type: GraphQLString },
    description: { type: GraphQLString },
    image: { type: FileCreateNestedOneWithoutProjectInput },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
  }),
})

export const ProjectCreateOrConnectWithoutBuildingsInput =
  new GraphQLInputObjectType({
    name: 'ProjectCreateOrConnectWithoutBuildingsInput',
    fields: () => ({
      where: { type: new GraphQLNonNull(ProjectWhereUniqueInput) },
      create: { type: new GraphQLNonNull(ProjectCreateWithoutBuildingsInput) },
    }),
  })

export const DeviceUpsertWithWhereUniqueWithoutBuildingInput =
  new GraphQLInputObjectType({
    name: 'DeviceUpsertWithWhereUniqueWithoutBuildingInput',
    fields: () => ({
      where: { type: new GraphQLNonNull(DeviceWhereUniqueInput) },
      update: { type: new GraphQLNonNull(DeviceUpdateWithoutBuildingInput) },
      create: { type: new GraphQLNonNull(DeviceCreateWithoutBuildingInput) },
    }),
  })

export const DeviceUpdateWithWhereUniqueWithoutBuildingInput =
  new GraphQLInputObjectType({
    name: 'DeviceUpdateWithWhereUniqueWithoutBuildingInput',
    fields: () => ({
      where: { type: new GraphQLNonNull(DeviceWhereUniqueInput) },
      data: { type: new GraphQLNonNull(DeviceUpdateWithoutBuildingInput) },
    }),
  })

export const DeviceUpdateManyWithWhereWithoutBuildingInput =
  new GraphQLInputObjectType({
    name: 'DeviceUpdateManyWithWhereWithoutBuildingInput',
    fields: () => ({
      where: { type: new GraphQLNonNull(DeviceScalarWhereInput) },
      data: { type: new GraphQLNonNull(DeviceUpdateManyMutationInput) },
    }),
  })

export const DeviceScalarWhereInput = new GraphQLInputObjectType({
  name: 'DeviceScalarFilter',
  fields: () => ({
    AND: { type: new GraphQLList(new GraphQLNonNull(DeviceScalarWhereInput)) },
    OR: { type: new GraphQLList(new GraphQLNonNull(DeviceScalarWhereInput)) },
    NOT: { type: new GraphQLList(new GraphQLNonNull(DeviceScalarWhereInput)) },
    id: { type: IntFilter },
    connection: { type: EnumDeviceConnectionFilter },
    productType: { type: StringFilter },
    alias: { type: StringNullableFilter },
    serialNumber: { type: IntNullableFilter },
    networkId: { type: IntNullableFilter },
    floor: { type: StringNullableFilter },
    room: { type: StringNullableFilter },
    buildingId: { type: IntNullableFilter },
    createdAt: { type: DateTimeFilter },
    updatedAt: { type: DateTimeFilter },
  }),
})

export const ProjectUpsertWithoutBuildingsInput = new GraphQLInputObjectType({
  name: 'ProjectUpsertWithoutBuildingsInput',
  fields: () => ({
    update: { type: new GraphQLNonNull(ProjectUpdateWithoutBuildingsInput) },
    create: { type: new GraphQLNonNull(ProjectCreateWithoutBuildingsInput) },
  }),
})

export const ProjectUpdateWithoutBuildingsInput = new GraphQLInputObjectType({
  name: 'ProjectUpdateWithoutBuildingsInput',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    slug: { type: GraphQLString },
    description: { type: GraphQLString },
    image: { type: FileUpdateOneWithoutProjectInput },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
  }),
})

export const BuildingCreateWithoutDevicesInput = new GraphQLInputObjectType({
  name: 'BuildingCreateWithoutDevicesInput',
  fields: () => ({
    title: { type: new GraphQLNonNull(GraphQLString) },
    protocol: { type: BuildingProtocol },
    ip: { type: GraphQLString },
    modbusTcpPort: { type: GraphQLString },
    comPort: { type: GraphQLString },
    baudRate: { type: GraphQLInt },
    country: { type: GraphQLString },
    state: { type: GraphQLString },
    city: { type: GraphQLString },
    street: { type: GraphQLString },
    zip: { type: GraphQLString },
    engineering: { type: GraphQLString },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
    Project: {
      type: new GraphQLNonNull(ProjectCreateNestedOneWithoutBuildingsInput),
    },
  }),
})

export const BuildingCreateOrConnectWithoutDevicesInput =
  new GraphQLInputObjectType({
    name: 'BuildingCreateOrConnectWithoutDevicesInput',
    fields: () => ({
      where: { type: new GraphQLNonNull(BuildingWhereUniqueInput) },
      create: { type: new GraphQLNonNull(BuildingCreateWithoutDevicesInput) },
    }),
  })

export const InputCreateWithoutDeviceInput = new GraphQLInputObjectType({
  name: 'InputCreateWithoutDeviceInput',
  fields: () => ({
    index: { type: new GraphQLNonNull(GraphQLInt) },
    panel: { type: new GraphQLNonNull(GraphQLInt) },
    label: { type: GraphQLString },
    fullLabel: { type: GraphQLString },
    autoManual: { type: new GraphQLNonNull(AutoManual) },
    value: { type: GraphQLString },
    units: { type: GraphQLString },
    range: { type: GraphQLString },
    calibration: { type: GraphQLFloat },
    sign: { type: GraphQLString },
    filter: { type: GraphQLInt },
    status: { type: GraphQLString },
    signalType: { type: GraphQLString },
    type: { type: GraphQLString },
    binaryArray: { type: GraphQLString },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
  }),
})

export const InputCreateOrConnectWithoutDeviceInput =
  new GraphQLInputObjectType({
    name: 'InputCreateOrConnectWithoutDeviceInput',
    fields: () => ({
      where: { type: new GraphQLNonNull(InputWhereUniqueInput) },
      create: { type: new GraphQLNonNull(InputCreateWithoutDeviceInput) },
    }),
  })

export const InputCreateManyDeviceInputEnvelope = new GraphQLInputObjectType({
  name: 'InputCreateManyDeviceInputEnvelope',
  fields: () => ({
    data: {
      type: new GraphQLNonNull(
        new GraphQLList(new GraphQLNonNull(InputCreateManyDeviceInput)),
      ),
    },
    skipDuplicates: { type: GraphQLBoolean },
  }),
})

export const OutputCreateWithoutDeviceInput = new GraphQLInputObjectType({
  name: 'OutputCreateWithoutDeviceInput',
  fields: () => ({
    index: { type: new GraphQLNonNull(GraphQLInt) },
    panel: { type: new GraphQLNonNull(GraphQLInt) },
    label: { type: GraphQLString },
    fullLabel: { type: GraphQLString },
    autoManual: { type: AutoManual },
    hoaSwitch: { type: GraphQLString },
    value: { type: GraphQLString },
    units: { type: GraphQLString },
    range: { type: GraphQLString },
    lowVoltage: { type: GraphQLFloat },
    highVoltage: { type: GraphQLFloat },
    pwmPeriod: { type: GraphQLInt },
    status: { type: GraphQLString },
    type: { type: GraphQLString },
    binaryArray: { type: GraphQLString },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
  }),
})

export const OutputCreateOrConnectWithoutDeviceInput =
  new GraphQLInputObjectType({
    name: 'OutputCreateOrConnectWithoutDeviceInput',
    fields: () => ({
      where: { type: new GraphQLNonNull(OutputWhereUniqueInput) },
      create: { type: new GraphQLNonNull(OutputCreateWithoutDeviceInput) },
    }),
  })

export const OutputCreateManyDeviceInputEnvelope = new GraphQLInputObjectType({
  name: 'OutputCreateManyDeviceInputEnvelope',
  fields: () => ({
    data: {
      type: new GraphQLNonNull(
        new GraphQLList(new GraphQLNonNull(OutputCreateManyDeviceInput)),
      ),
    },
    skipDuplicates: { type: GraphQLBoolean },
  }),
})

export const PidCreateWithoutDeviceInput = new GraphQLInputObjectType({
  name: 'PidCreateWithoutDeviceInput',
  fields: () => ({
    index: { type: new GraphQLNonNull(GraphQLInt) },
    input: { type: GraphQLString },
    inputValue: { type: GraphQLString },
    inputUnits: { type: GraphQLString },
    autoManual: { type: new GraphQLNonNull(AutoManual) },
    output: { type: GraphQLString },
    setpoint: { type: GraphQLString },
    setpointValue: { type: GraphQLFloat },
    setpointUnits: { type: GraphQLString },
    action: { type: GraphQLString },
    pidProp: { type: GraphQLInt },
    pidInt: { type: GraphQLInt },
    pidTime: { type: GraphQLString },
    pidDer: { type: GraphQLFloat },
    bias: { type: GraphQLInt },
    binaryArray: { type: GraphQLString },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
  }),
})

export const PidCreateOrConnectWithoutDeviceInput = new GraphQLInputObjectType({
  name: 'PidCreateOrConnectWithoutDeviceInput',
  fields: () => ({
    where: { type: new GraphQLNonNull(PidWhereUniqueInput) },
    create: { type: new GraphQLNonNull(PidCreateWithoutDeviceInput) },
  }),
})

export const PidCreateManyDeviceInputEnvelope = new GraphQLInputObjectType({
  name: 'PidCreateManyDeviceInputEnvelope',
  fields: () => ({
    data: {
      type: new GraphQLNonNull(
        new GraphQLList(new GraphQLNonNull(PidCreateManyDeviceInput)),
      ),
    },
    skipDuplicates: { type: GraphQLBoolean },
  }),
})

export const VariableCreateWithoutDeviceInput = new GraphQLInputObjectType({
  name: 'VariableCreateWithoutDeviceInput',
  fields: () => ({
    index: { type: new GraphQLNonNull(GraphQLInt) },
    label: { type: GraphQLString },
    fullLabel: { type: GraphQLString },
    autoManual: { type: new GraphQLNonNull(AutoManual) },
    value: { type: GraphQLString },
    units: { type: GraphQLString },
    binaryArray: { type: GraphQLString },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
  }),
})

export const VariableCreateOrConnectWithoutDeviceInput =
  new GraphQLInputObjectType({
    name: 'VariableCreateOrConnectWithoutDeviceInput',
    fields: () => ({
      where: { type: new GraphQLNonNull(VariableWhereUniqueInput) },
      create: { type: new GraphQLNonNull(VariableCreateWithoutDeviceInput) },
    }),
  })

export const VariableCreateManyDeviceInputEnvelope = new GraphQLInputObjectType(
  {
    name: 'VariableCreateManyDeviceInputEnvelope',
    fields: () => ({
      data: {
        type: new GraphQLNonNull(
          new GraphQLList(new GraphQLNonNull(VariableCreateManyDeviceInput)),
        ),
      },
      skipDuplicates: { type: GraphQLBoolean },
    }),
  },
)

export const GraphicCreateWithoutDeviceInput = new GraphQLInputObjectType({
  name: 'GraphicCreateWithoutDeviceInput',
  fields: () => ({
    index: { type: new GraphQLNonNull(GraphQLInt) },
    label: { type: GraphQLString },
    fullLabel: { type: GraphQLString },
    picture: { type: FileCreateNestedOneWithoutGraphicInput },
    elementCount: { type: GraphQLInt },
    binaryArray: { type: GraphQLString },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
  }),
})

export const GraphicCreateOrConnectWithoutDeviceInput =
  new GraphQLInputObjectType({
    name: 'GraphicCreateOrConnectWithoutDeviceInput',
    fields: () => ({
      where: { type: new GraphQLNonNull(GraphicWhereUniqueInput) },
      create: { type: new GraphQLNonNull(GraphicCreateWithoutDeviceInput) },
    }),
  })

export const GraphicCreateManyDeviceInputEnvelope = new GraphQLInputObjectType({
  name: 'GraphicCreateManyDeviceInputEnvelope',
  fields: () => ({
    data: {
      type: new GraphQLNonNull(
        new GraphQLList(new GraphQLNonNull(GraphicCreateManyDeviceInput)),
      ),
    },
    skipDuplicates: { type: GraphQLBoolean },
  }),
})

export const ProgramCreateWithoutDeviceInput = new GraphQLInputObjectType({
  name: 'ProgramCreateWithoutDeviceInput',
  fields: () => ({
    index: { type: new GraphQLNonNull(GraphQLInt) },
    label: { type: GraphQLString },
    fullLabel: { type: GraphQLString },
    status: { type: GraphQLString },
    autoManual: { type: new GraphQLNonNull(AutoManual) },
    size: { type: GraphQLInt },
    executionTime: { type: GraphQLInt },
    sourceCode: { type: GraphQLString },
    binaryArray: { type: GraphQLString },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
  }),
})

export const ProgramCreateOrConnectWithoutDeviceInput =
  new GraphQLInputObjectType({
    name: 'ProgramCreateOrConnectWithoutDeviceInput',
    fields: () => ({
      where: { type: new GraphQLNonNull(ProgramWhereUniqueInput) },
      create: { type: new GraphQLNonNull(ProgramCreateWithoutDeviceInput) },
    }),
  })

export const ProgramCreateManyDeviceInputEnvelope = new GraphQLInputObjectType({
  name: 'ProgramCreateManyDeviceInputEnvelope',
  fields: () => ({
    data: {
      type: new GraphQLNonNull(
        new GraphQLList(new GraphQLNonNull(ProgramCreateManyDeviceInput)),
      ),
    },
    skipDuplicates: { type: GraphQLBoolean },
  }),
})

export const HolidayCreateWithoutDeviceInput = new GraphQLInputObjectType({
  name: 'HolidayCreateWithoutDeviceInput',
  fields: () => ({
    index: { type: new GraphQLNonNull(GraphQLInt) },
    label: { type: GraphQLString },
    fullLabel: { type: GraphQLString },
    autoManual: { type: new GraphQLNonNull(AutoManual) },
    value: { type: GraphQLString },
    days: { type: new GraphQLList(new GraphQLNonNull(GraphQLDateTime)) },
    binaryArray: { type: GraphQLString },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
  }),
})

export const HolidayCreateOrConnectWithoutDeviceInput =
  new GraphQLInputObjectType({
    name: 'HolidayCreateOrConnectWithoutDeviceInput',
    fields: () => ({
      where: { type: new GraphQLNonNull(HolidayWhereUniqueInput) },
      create: { type: new GraphQLNonNull(HolidayCreateWithoutDeviceInput) },
    }),
  })

export const HolidayCreateManyDeviceInputEnvelope = new GraphQLInputObjectType({
  name: 'HolidayCreateManyDeviceInputEnvelope',
  fields: () => ({
    data: {
      type: new GraphQLNonNull(
        new GraphQLList(new GraphQLNonNull(HolidayCreateManyDeviceInput)),
      ),
    },
    skipDuplicates: { type: GraphQLBoolean },
  }),
})

export const ScheduleCreateWithoutDeviceInput = new GraphQLInputObjectType({
  name: 'ScheduleCreateWithoutDeviceInput',
  fields: () => ({
    index: { type: new GraphQLNonNull(GraphQLInt) },
    label: { type: GraphQLString },
    fullLabel: { type: GraphQLString },
    autoManual: { type: new GraphQLNonNull(AutoManual) },
    output: { type: GraphQLString },
    holiday1: { type: GraphQLString },
    status1: { type: GraphQLString },
    holiday2: { type: GraphQLString },
    status2: { type: GraphQLString },
    binaryArray: { type: GraphQLString },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
    times: { type: ScheduleTimeCreateNestedManyWithoutScheduleInput },
  }),
})

export const ScheduleCreateOrConnectWithoutDeviceInput =
  new GraphQLInputObjectType({
    name: 'ScheduleCreateOrConnectWithoutDeviceInput',
    fields: () => ({
      where: { type: new GraphQLNonNull(ScheduleWhereUniqueInput) },
      create: { type: new GraphQLNonNull(ScheduleCreateWithoutDeviceInput) },
    }),
  })

export const ScheduleCreateManyDeviceInputEnvelope = new GraphQLInputObjectType(
  {
    name: 'ScheduleCreateManyDeviceInputEnvelope',
    fields: () => ({
      data: {
        type: new GraphQLNonNull(
          new GraphQLList(new GraphQLNonNull(ScheduleCreateManyDeviceInput)),
        ),
      },
      skipDuplicates: { type: GraphQLBoolean },
    }),
  },
)

export const BuildingUpsertWithoutDevicesInput = new GraphQLInputObjectType({
  name: 'BuildingUpsertWithoutDevicesInput',
  fields: () => ({
    update: { type: new GraphQLNonNull(BuildingUpdateWithoutDevicesInput) },
    create: { type: new GraphQLNonNull(BuildingCreateWithoutDevicesInput) },
  }),
})

export const BuildingUpdateWithoutDevicesInput = new GraphQLInputObjectType({
  name: 'BuildingUpdateWithoutDevicesInput',
  fields: () => ({
    title: { type: GraphQLString },
    protocol: { type: BuildingProtocol },
    ip: { type: GraphQLString },
    modbusTcpPort: { type: GraphQLString },
    comPort: { type: GraphQLString },
    baudRate: { type: GraphQLInt },
    country: { type: GraphQLString },
    state: { type: GraphQLString },
    city: { type: GraphQLString },
    street: { type: GraphQLString },
    zip: { type: GraphQLString },
    engineering: { type: GraphQLString },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
    Project: { type: ProjectUpdateOneRequiredWithoutBuildingsInput },
  }),
})

export const InputUpsertWithWhereUniqueWithoutDeviceInput =
  new GraphQLInputObjectType({
    name: 'InputUpsertWithWhereUniqueWithoutDeviceInput',
    fields: () => ({
      where: { type: new GraphQLNonNull(InputWhereUniqueInput) },
      update: { type: new GraphQLNonNull(InputUpdateWithoutDeviceInput) },
      create: { type: new GraphQLNonNull(InputCreateWithoutDeviceInput) },
    }),
  })

export const InputUpdateWithWhereUniqueWithoutDeviceInput =
  new GraphQLInputObjectType({
    name: 'InputUpdateWithWhereUniqueWithoutDeviceInput',
    fields: () => ({
      where: { type: new GraphQLNonNull(InputWhereUniqueInput) },
      data: { type: new GraphQLNonNull(InputUpdateWithoutDeviceInput) },
    }),
  })

export const InputUpdateManyWithWhereWithoutDeviceInput =
  new GraphQLInputObjectType({
    name: 'InputUpdateManyWithWhereWithoutDeviceInput',
    fields: () => ({
      where: { type: new GraphQLNonNull(InputScalarWhereInput) },
      data: { type: new GraphQLNonNull(InputUpdateManyMutationInput) },
    }),
  })

export const InputScalarWhereInput = new GraphQLInputObjectType({
  name: 'InputScalarFilter',
  fields: () => ({
    AND: { type: new GraphQLList(new GraphQLNonNull(InputScalarWhereInput)) },
    OR: { type: new GraphQLList(new GraphQLNonNull(InputScalarWhereInput)) },
    NOT: { type: new GraphQLList(new GraphQLNonNull(InputScalarWhereInput)) },
    id: { type: IntFilter },
    index: { type: IntFilter },
    panel: { type: IntFilter },
    label: { type: StringNullableFilter },
    fullLabel: { type: StringNullableFilter },
    autoManual: { type: EnumAutoManualFilter },
    value: { type: StringNullableFilter },
    units: { type: StringNullableFilter },
    range: { type: StringNullableFilter },
    calibration: { type: FloatNullableFilter },
    sign: { type: StringNullableFilter },
    filter: { type: IntNullableFilter },
    status: { type: StringFilter },
    signalType: { type: StringNullableFilter },
    type: { type: StringNullableFilter },
    binaryArray: { type: StringNullableFilter },
    createdAt: { type: DateTimeFilter },
    updatedAt: { type: DateTimeFilter },
    deviceId: { type: IntNullableFilter },
  }),
})

export const OutputUpsertWithWhereUniqueWithoutDeviceInput =
  new GraphQLInputObjectType({
    name: 'OutputUpsertWithWhereUniqueWithoutDeviceInput',
    fields: () => ({
      where: { type: new GraphQLNonNull(OutputWhereUniqueInput) },
      update: { type: new GraphQLNonNull(OutputUpdateWithoutDeviceInput) },
      create: { type: new GraphQLNonNull(OutputCreateWithoutDeviceInput) },
    }),
  })

export const OutputUpdateWithWhereUniqueWithoutDeviceInput =
  new GraphQLInputObjectType({
    name: 'OutputUpdateWithWhereUniqueWithoutDeviceInput',
    fields: () => ({
      where: { type: new GraphQLNonNull(OutputWhereUniqueInput) },
      data: { type: new GraphQLNonNull(OutputUpdateWithoutDeviceInput) },
    }),
  })

export const OutputUpdateManyWithWhereWithoutDeviceInput =
  new GraphQLInputObjectType({
    name: 'OutputUpdateManyWithWhereWithoutDeviceInput',
    fields: () => ({
      where: { type: new GraphQLNonNull(OutputScalarWhereInput) },
      data: { type: new GraphQLNonNull(OutputUpdateManyMutationInput) },
    }),
  })

export const OutputScalarWhereInput = new GraphQLInputObjectType({
  name: 'OutputScalarFilter',
  fields: () => ({
    AND: { type: new GraphQLList(new GraphQLNonNull(OutputScalarWhereInput)) },
    OR: { type: new GraphQLList(new GraphQLNonNull(OutputScalarWhereInput)) },
    NOT: { type: new GraphQLList(new GraphQLNonNull(OutputScalarWhereInput)) },
    id: { type: IntFilter },
    index: { type: IntFilter },
    panel: { type: IntFilter },
    label: { type: StringNullableFilter },
    fullLabel: { type: StringNullableFilter },
    autoManual: { type: EnumAutoManualNullableFilter },
    hoaSwitch: { type: StringNullableFilter },
    value: { type: StringNullableFilter },
    units: { type: StringNullableFilter },
    range: { type: StringNullableFilter },
    lowVoltage: { type: FloatNullableFilter },
    highVoltage: { type: FloatNullableFilter },
    pwmPeriod: { type: IntNullableFilter },
    status: { type: StringFilter },
    type: { type: StringNullableFilter },
    binaryArray: { type: StringNullableFilter },
    createdAt: { type: DateTimeFilter },
    updatedAt: { type: DateTimeFilter },
    deviceId: { type: IntNullableFilter },
  }),
})

export const PidUpsertWithWhereUniqueWithoutDeviceInput =
  new GraphQLInputObjectType({
    name: 'PidUpsertWithWhereUniqueWithoutDeviceInput',
    fields: () => ({
      where: { type: new GraphQLNonNull(PidWhereUniqueInput) },
      update: { type: new GraphQLNonNull(PidUpdateWithoutDeviceInput) },
      create: { type: new GraphQLNonNull(PidCreateWithoutDeviceInput) },
    }),
  })

export const PidUpdateWithWhereUniqueWithoutDeviceInput =
  new GraphQLInputObjectType({
    name: 'PidUpdateWithWhereUniqueWithoutDeviceInput',
    fields: () => ({
      where: { type: new GraphQLNonNull(PidWhereUniqueInput) },
      data: { type: new GraphQLNonNull(PidUpdateWithoutDeviceInput) },
    }),
  })

export const PidUpdateManyWithWhereWithoutDeviceInput =
  new GraphQLInputObjectType({
    name: 'PidUpdateManyWithWhereWithoutDeviceInput',
    fields: () => ({
      where: { type: new GraphQLNonNull(PidScalarWhereInput) },
      data: { type: new GraphQLNonNull(PidUpdateManyMutationInput) },
    }),
  })

export const PidScalarWhereInput = new GraphQLInputObjectType({
  name: 'PidScalarFilter',
  fields: () => ({
    AND: { type: new GraphQLList(new GraphQLNonNull(PidScalarWhereInput)) },
    OR: { type: new GraphQLList(new GraphQLNonNull(PidScalarWhereInput)) },
    NOT: { type: new GraphQLList(new GraphQLNonNull(PidScalarWhereInput)) },
    id: { type: IntFilter },
    index: { type: IntFilter },
    input: { type: StringNullableFilter },
    inputValue: { type: StringNullableFilter },
    inputUnits: { type: StringNullableFilter },
    autoManual: { type: EnumAutoManualFilter },
    output: { type: StringNullableFilter },
    setpoint: { type: StringNullableFilter },
    setpointValue: { type: FloatNullableFilter },
    setpointUnits: { type: StringNullableFilter },
    action: { type: StringNullableFilter },
    pidProp: { type: IntNullableFilter },
    pidInt: { type: IntNullableFilter },
    pidTime: { type: StringNullableFilter },
    pidDer: { type: FloatNullableFilter },
    bias: { type: IntNullableFilter },
    binaryArray: { type: StringNullableFilter },
    createdAt: { type: DateTimeFilter },
    updatedAt: { type: DateTimeFilter },
    deviceId: { type: IntNullableFilter },
  }),
})

export const VariableUpsertWithWhereUniqueWithoutDeviceInput =
  new GraphQLInputObjectType({
    name: 'VariableUpsertWithWhereUniqueWithoutDeviceInput',
    fields: () => ({
      where: { type: new GraphQLNonNull(VariableWhereUniqueInput) },
      update: { type: new GraphQLNonNull(VariableUpdateWithoutDeviceInput) },
      create: { type: new GraphQLNonNull(VariableCreateWithoutDeviceInput) },
    }),
  })

export const VariableUpdateWithWhereUniqueWithoutDeviceInput =
  new GraphQLInputObjectType({
    name: 'VariableUpdateWithWhereUniqueWithoutDeviceInput',
    fields: () => ({
      where: { type: new GraphQLNonNull(VariableWhereUniqueInput) },
      data: { type: new GraphQLNonNull(VariableUpdateWithoutDeviceInput) },
    }),
  })

export const VariableUpdateManyWithWhereWithoutDeviceInput =
  new GraphQLInputObjectType({
    name: 'VariableUpdateManyWithWhereWithoutDeviceInput',
    fields: () => ({
      where: { type: new GraphQLNonNull(VariableScalarWhereInput) },
      data: { type: new GraphQLNonNull(VariableUpdateManyMutationInput) },
    }),
  })

export const VariableScalarWhereInput = new GraphQLInputObjectType({
  name: 'VariableScalarFilter',
  fields: () => ({
    AND: {
      type: new GraphQLList(new GraphQLNonNull(VariableScalarWhereInput)),
    },
    OR: { type: new GraphQLList(new GraphQLNonNull(VariableScalarWhereInput)) },
    NOT: {
      type: new GraphQLList(new GraphQLNonNull(VariableScalarWhereInput)),
    },
    id: { type: IntFilter },
    index: { type: IntFilter },
    label: { type: StringNullableFilter },
    fullLabel: { type: StringNullableFilter },
    autoManual: { type: EnumAutoManualFilter },
    value: { type: StringNullableFilter },
    units: { type: StringNullableFilter },
    binaryArray: { type: StringNullableFilter },
    createdAt: { type: DateTimeFilter },
    updatedAt: { type: DateTimeFilter },
    deviceId: { type: IntNullableFilter },
  }),
})

export const GraphicUpsertWithWhereUniqueWithoutDeviceInput =
  new GraphQLInputObjectType({
    name: 'GraphicUpsertWithWhereUniqueWithoutDeviceInput',
    fields: () => ({
      where: { type: new GraphQLNonNull(GraphicWhereUniqueInput) },
      update: { type: new GraphQLNonNull(GraphicUpdateWithoutDeviceInput) },
      create: { type: new GraphQLNonNull(GraphicCreateWithoutDeviceInput) },
    }),
  })

export const GraphicUpdateWithWhereUniqueWithoutDeviceInput =
  new GraphQLInputObjectType({
    name: 'GraphicUpdateWithWhereUniqueWithoutDeviceInput',
    fields: () => ({
      where: { type: new GraphQLNonNull(GraphicWhereUniqueInput) },
      data: { type: new GraphQLNonNull(GraphicUpdateWithoutDeviceInput) },
    }),
  })

export const GraphicUpdateManyWithWhereWithoutDeviceInput =
  new GraphQLInputObjectType({
    name: 'GraphicUpdateManyWithWhereWithoutDeviceInput',
    fields: () => ({
      where: { type: new GraphQLNonNull(GraphicScalarWhereInput) },
      data: { type: new GraphQLNonNull(GraphicUpdateManyMutationInput) },
    }),
  })

export const ProgramUpsertWithWhereUniqueWithoutDeviceInput =
  new GraphQLInputObjectType({
    name: 'ProgramUpsertWithWhereUniqueWithoutDeviceInput',
    fields: () => ({
      where: { type: new GraphQLNonNull(ProgramWhereUniqueInput) },
      update: { type: new GraphQLNonNull(ProgramUpdateWithoutDeviceInput) },
      create: { type: new GraphQLNonNull(ProgramCreateWithoutDeviceInput) },
    }),
  })

export const ProgramUpdateWithWhereUniqueWithoutDeviceInput =
  new GraphQLInputObjectType({
    name: 'ProgramUpdateWithWhereUniqueWithoutDeviceInput',
    fields: () => ({
      where: { type: new GraphQLNonNull(ProgramWhereUniqueInput) },
      data: { type: new GraphQLNonNull(ProgramUpdateWithoutDeviceInput) },
    }),
  })

export const ProgramUpdateManyWithWhereWithoutDeviceInput =
  new GraphQLInputObjectType({
    name: 'ProgramUpdateManyWithWhereWithoutDeviceInput',
    fields: () => ({
      where: { type: new GraphQLNonNull(ProgramScalarWhereInput) },
      data: { type: new GraphQLNonNull(ProgramUpdateManyMutationInput) },
    }),
  })

export const ProgramScalarWhereInput = new GraphQLInputObjectType({
  name: 'ProgramScalarFilter',
  fields: () => ({
    AND: { type: new GraphQLList(new GraphQLNonNull(ProgramScalarWhereInput)) },
    OR: { type: new GraphQLList(new GraphQLNonNull(ProgramScalarWhereInput)) },
    NOT: { type: new GraphQLList(new GraphQLNonNull(ProgramScalarWhereInput)) },
    id: { type: IntFilter },
    index: { type: IntFilter },
    label: { type: StringNullableFilter },
    fullLabel: { type: StringNullableFilter },
    status: { type: StringNullableFilter },
    autoManual: { type: EnumAutoManualFilter },
    size: { type: IntNullableFilter },
    executionTime: { type: IntFilter },
    sourceCode: { type: StringNullableFilter },
    binaryArray: { type: StringNullableFilter },
    createdAt: { type: DateTimeFilter },
    updatedAt: { type: DateTimeFilter },
    deviceId: { type: IntNullableFilter },
  }),
})

export const HolidayUpsertWithWhereUniqueWithoutDeviceInput =
  new GraphQLInputObjectType({
    name: 'HolidayUpsertWithWhereUniqueWithoutDeviceInput',
    fields: () => ({
      where: { type: new GraphQLNonNull(HolidayWhereUniqueInput) },
      update: { type: new GraphQLNonNull(HolidayUpdateWithoutDeviceInput) },
      create: { type: new GraphQLNonNull(HolidayCreateWithoutDeviceInput) },
    }),
  })

export const HolidayUpdateWithWhereUniqueWithoutDeviceInput =
  new GraphQLInputObjectType({
    name: 'HolidayUpdateWithWhereUniqueWithoutDeviceInput',
    fields: () => ({
      where: { type: new GraphQLNonNull(HolidayWhereUniqueInput) },
      data: { type: new GraphQLNonNull(HolidayUpdateWithoutDeviceInput) },
    }),
  })

export const HolidayUpdateManyWithWhereWithoutDeviceInput =
  new GraphQLInputObjectType({
    name: 'HolidayUpdateManyWithWhereWithoutDeviceInput',
    fields: () => ({
      where: { type: new GraphQLNonNull(HolidayScalarWhereInput) },
      data: { type: new GraphQLNonNull(HolidayUpdateManyMutationInput) },
    }),
  })

export const HolidayScalarWhereInput = new GraphQLInputObjectType({
  name: 'HolidayScalarFilter',
  fields: () => ({
    AND: { type: new GraphQLList(new GraphQLNonNull(HolidayScalarWhereInput)) },
    OR: { type: new GraphQLList(new GraphQLNonNull(HolidayScalarWhereInput)) },
    NOT: { type: new GraphQLList(new GraphQLNonNull(HolidayScalarWhereInput)) },
    id: { type: IntFilter },
    index: { type: IntFilter },
    label: { type: StringNullableFilter },
    fullLabel: { type: StringNullableFilter },
    autoManual: { type: EnumAutoManualFilter },
    value: { type: StringNullableFilter },
    days: { type: DateTimeNullableListFilter },
    binaryArray: { type: StringNullableFilter },
    createdAt: { type: DateTimeFilter },
    updatedAt: { type: DateTimeFilter },
    deviceId: { type: IntNullableFilter },
  }),
})

export const ScheduleUpsertWithWhereUniqueWithoutDeviceInput =
  new GraphQLInputObjectType({
    name: 'ScheduleUpsertWithWhereUniqueWithoutDeviceInput',
    fields: () => ({
      where: { type: new GraphQLNonNull(ScheduleWhereUniqueInput) },
      update: { type: new GraphQLNonNull(ScheduleUpdateWithoutDeviceInput) },
      create: { type: new GraphQLNonNull(ScheduleCreateWithoutDeviceInput) },
    }),
  })

export const ScheduleUpdateWithWhereUniqueWithoutDeviceInput =
  new GraphQLInputObjectType({
    name: 'ScheduleUpdateWithWhereUniqueWithoutDeviceInput',
    fields: () => ({
      where: { type: new GraphQLNonNull(ScheduleWhereUniqueInput) },
      data: { type: new GraphQLNonNull(ScheduleUpdateWithoutDeviceInput) },
    }),
  })

export const ScheduleUpdateManyWithWhereWithoutDeviceInput =
  new GraphQLInputObjectType({
    name: 'ScheduleUpdateManyWithWhereWithoutDeviceInput',
    fields: () => ({
      where: { type: new GraphQLNonNull(ScheduleScalarWhereInput) },
      data: { type: new GraphQLNonNull(ScheduleUpdateManyMutationInput) },
    }),
  })

export const ScheduleScalarWhereInput = new GraphQLInputObjectType({
  name: 'ScheduleScalarFilter',
  fields: () => ({
    AND: {
      type: new GraphQLList(new GraphQLNonNull(ScheduleScalarWhereInput)),
    },
    OR: { type: new GraphQLList(new GraphQLNonNull(ScheduleScalarWhereInput)) },
    NOT: {
      type: new GraphQLList(new GraphQLNonNull(ScheduleScalarWhereInput)),
    },
    id: { type: IntFilter },
    index: { type: IntFilter },
    label: { type: StringNullableFilter },
    fullLabel: { type: StringNullableFilter },
    autoManual: { type: EnumAutoManualFilter },
    output: { type: StringNullableFilter },
    holiday1: { type: StringNullableFilter },
    status1: { type: StringNullableFilter },
    holiday2: { type: StringNullableFilter },
    status2: { type: StringNullableFilter },
    binaryArray: { type: StringNullableFilter },
    createdAt: { type: DateTimeFilter },
    updatedAt: { type: DateTimeFilter },
    deviceId: { type: IntNullableFilter },
  }),
})

export const DeviceCreateWithoutInputsInput = new GraphQLInputObjectType({
  name: 'DeviceCreateWithoutInputsInput',
  fields: () => ({
    connection: { type: new GraphQLNonNull(DeviceConnection) },
    productType: { type: new GraphQLNonNull(GraphQLString) },
    alias: { type: GraphQLString },
    serialNumber: { type: GraphQLInt },
    networkId: { type: GraphQLInt },
    floor: { type: GraphQLString },
    room: { type: GraphQLString },
    building: { type: BuildingCreateNestedOneWithoutDevicesInput },
    outputs: { type: OutputCreateNestedManyWithoutDeviceInput },
    pids: { type: PidCreateNestedManyWithoutDeviceInput },
    variables: { type: VariableCreateNestedManyWithoutDeviceInput },
    graphics: { type: GraphicCreateNestedManyWithoutDeviceInput },
    programs: { type: ProgramCreateNestedManyWithoutDeviceInput },
    holidays: { type: HolidayCreateNestedManyWithoutDeviceInput },
    schedules: { type: ScheduleCreateNestedManyWithoutDeviceInput },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
  }),
})

export const DeviceCreateOrConnectWithoutInputsInput =
  new GraphQLInputObjectType({
    name: 'DeviceCreateOrConnectWithoutInputsInput',
    fields: () => ({
      where: { type: new GraphQLNonNull(DeviceWhereUniqueInput) },
      create: { type: new GraphQLNonNull(DeviceCreateWithoutInputsInput) },
    }),
  })

export const DeviceUpsertWithoutInputsInput = new GraphQLInputObjectType({
  name: 'DeviceUpsertWithoutInputsInput',
  fields: () => ({
    update: { type: new GraphQLNonNull(DeviceUpdateWithoutInputsInput) },
    create: { type: new GraphQLNonNull(DeviceCreateWithoutInputsInput) },
  }),
})

export const DeviceUpdateWithoutInputsInput = new GraphQLInputObjectType({
  name: 'DeviceUpdateWithoutInputsInput',
  fields: () => ({
    connection: { type: DeviceConnection },
    productType: { type: GraphQLString },
    alias: { type: GraphQLString },
    serialNumber: { type: GraphQLInt },
    networkId: { type: GraphQLInt },
    floor: { type: GraphQLString },
    room: { type: GraphQLString },
    building: { type: BuildingUpdateOneWithoutDevicesInput },
    outputs: { type: OutputUpdateManyWithoutDeviceInput },
    pids: { type: PidUpdateManyWithoutDeviceInput },
    variables: { type: VariableUpdateManyWithoutDeviceInput },
    graphics: { type: GraphicUpdateManyWithoutDeviceInput },
    programs: { type: ProgramUpdateManyWithoutDeviceInput },
    holidays: { type: HolidayUpdateManyWithoutDeviceInput },
    schedules: { type: ScheduleUpdateManyWithoutDeviceInput },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
  }),
})

export const DeviceCreateWithoutOutputsInput = new GraphQLInputObjectType({
  name: 'DeviceCreateWithoutOutputsInput',
  fields: () => ({
    connection: { type: new GraphQLNonNull(DeviceConnection) },
    productType: { type: new GraphQLNonNull(GraphQLString) },
    alias: { type: GraphQLString },
    serialNumber: { type: GraphQLInt },
    networkId: { type: GraphQLInt },
    floor: { type: GraphQLString },
    room: { type: GraphQLString },
    building: { type: BuildingCreateNestedOneWithoutDevicesInput },
    inputs: { type: InputCreateNestedManyWithoutDeviceInput },
    pids: { type: PidCreateNestedManyWithoutDeviceInput },
    variables: { type: VariableCreateNestedManyWithoutDeviceInput },
    graphics: { type: GraphicCreateNestedManyWithoutDeviceInput },
    programs: { type: ProgramCreateNestedManyWithoutDeviceInput },
    holidays: { type: HolidayCreateNestedManyWithoutDeviceInput },
    schedules: { type: ScheduleCreateNestedManyWithoutDeviceInput },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
  }),
})

export const DeviceCreateOrConnectWithoutOutputsInput =
  new GraphQLInputObjectType({
    name: 'DeviceCreateOrConnectWithoutOutputsInput',
    fields: () => ({
      where: { type: new GraphQLNonNull(DeviceWhereUniqueInput) },
      create: { type: new GraphQLNonNull(DeviceCreateWithoutOutputsInput) },
    }),
  })

export const DeviceUpsertWithoutOutputsInput = new GraphQLInputObjectType({
  name: 'DeviceUpsertWithoutOutputsInput',
  fields: () => ({
    update: { type: new GraphQLNonNull(DeviceUpdateWithoutOutputsInput) },
    create: { type: new GraphQLNonNull(DeviceCreateWithoutOutputsInput) },
  }),
})

export const DeviceUpdateWithoutOutputsInput = new GraphQLInputObjectType({
  name: 'DeviceUpdateWithoutOutputsInput',
  fields: () => ({
    connection: { type: DeviceConnection },
    productType: { type: GraphQLString },
    alias: { type: GraphQLString },
    serialNumber: { type: GraphQLInt },
    networkId: { type: GraphQLInt },
    floor: { type: GraphQLString },
    room: { type: GraphQLString },
    building: { type: BuildingUpdateOneWithoutDevicesInput },
    inputs: { type: InputUpdateManyWithoutDeviceInput },
    pids: { type: PidUpdateManyWithoutDeviceInput },
    variables: { type: VariableUpdateManyWithoutDeviceInput },
    graphics: { type: GraphicUpdateManyWithoutDeviceInput },
    programs: { type: ProgramUpdateManyWithoutDeviceInput },
    holidays: { type: HolidayUpdateManyWithoutDeviceInput },
    schedules: { type: ScheduleUpdateManyWithoutDeviceInput },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
  }),
})

export const DeviceCreateWithoutVariablesInput = new GraphQLInputObjectType({
  name: 'DeviceCreateWithoutVariablesInput',
  fields: () => ({
    connection: { type: new GraphQLNonNull(DeviceConnection) },
    productType: { type: new GraphQLNonNull(GraphQLString) },
    alias: { type: GraphQLString },
    serialNumber: { type: GraphQLInt },
    networkId: { type: GraphQLInt },
    floor: { type: GraphQLString },
    room: { type: GraphQLString },
    building: { type: BuildingCreateNestedOneWithoutDevicesInput },
    inputs: { type: InputCreateNestedManyWithoutDeviceInput },
    outputs: { type: OutputCreateNestedManyWithoutDeviceInput },
    pids: { type: PidCreateNestedManyWithoutDeviceInput },
    graphics: { type: GraphicCreateNestedManyWithoutDeviceInput },
    programs: { type: ProgramCreateNestedManyWithoutDeviceInput },
    holidays: { type: HolidayCreateNestedManyWithoutDeviceInput },
    schedules: { type: ScheduleCreateNestedManyWithoutDeviceInput },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
  }),
})

export const DeviceCreateOrConnectWithoutVariablesInput =
  new GraphQLInputObjectType({
    name: 'DeviceCreateOrConnectWithoutVariablesInput',
    fields: () => ({
      where: { type: new GraphQLNonNull(DeviceWhereUniqueInput) },
      create: { type: new GraphQLNonNull(DeviceCreateWithoutVariablesInput) },
    }),
  })

export const DeviceUpsertWithoutVariablesInput = new GraphQLInputObjectType({
  name: 'DeviceUpsertWithoutVariablesInput',
  fields: () => ({
    update: { type: new GraphQLNonNull(DeviceUpdateWithoutVariablesInput) },
    create: { type: new GraphQLNonNull(DeviceCreateWithoutVariablesInput) },
  }),
})

export const DeviceUpdateWithoutVariablesInput = new GraphQLInputObjectType({
  name: 'DeviceUpdateWithoutVariablesInput',
  fields: () => ({
    connection: { type: DeviceConnection },
    productType: { type: GraphQLString },
    alias: { type: GraphQLString },
    serialNumber: { type: GraphQLInt },
    networkId: { type: GraphQLInt },
    floor: { type: GraphQLString },
    room: { type: GraphQLString },
    building: { type: BuildingUpdateOneWithoutDevicesInput },
    inputs: { type: InputUpdateManyWithoutDeviceInput },
    outputs: { type: OutputUpdateManyWithoutDeviceInput },
    pids: { type: PidUpdateManyWithoutDeviceInput },
    graphics: { type: GraphicUpdateManyWithoutDeviceInput },
    programs: { type: ProgramUpdateManyWithoutDeviceInput },
    holidays: { type: HolidayUpdateManyWithoutDeviceInput },
    schedules: { type: ScheduleUpdateManyWithoutDeviceInput },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
  }),
})

export const DeviceCreateWithoutProgramsInput = new GraphQLInputObjectType({
  name: 'DeviceCreateWithoutProgramsInput',
  fields: () => ({
    connection: { type: new GraphQLNonNull(DeviceConnection) },
    productType: { type: new GraphQLNonNull(GraphQLString) },
    alias: { type: GraphQLString },
    serialNumber: { type: GraphQLInt },
    networkId: { type: GraphQLInt },
    floor: { type: GraphQLString },
    room: { type: GraphQLString },
    building: { type: BuildingCreateNestedOneWithoutDevicesInput },
    inputs: { type: InputCreateNestedManyWithoutDeviceInput },
    outputs: { type: OutputCreateNestedManyWithoutDeviceInput },
    pids: { type: PidCreateNestedManyWithoutDeviceInput },
    variables: { type: VariableCreateNestedManyWithoutDeviceInput },
    graphics: { type: GraphicCreateNestedManyWithoutDeviceInput },
    holidays: { type: HolidayCreateNestedManyWithoutDeviceInput },
    schedules: { type: ScheduleCreateNestedManyWithoutDeviceInput },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
  }),
})

export const DeviceCreateOrConnectWithoutProgramsInput =
  new GraphQLInputObjectType({
    name: 'DeviceCreateOrConnectWithoutProgramsInput',
    fields: () => ({
      where: { type: new GraphQLNonNull(DeviceWhereUniqueInput) },
      create: { type: new GraphQLNonNull(DeviceCreateWithoutProgramsInput) },
    }),
  })

export const DeviceUpsertWithoutProgramsInput = new GraphQLInputObjectType({
  name: 'DeviceUpsertWithoutProgramsInput',
  fields: () => ({
    update: { type: new GraphQLNonNull(DeviceUpdateWithoutProgramsInput) },
    create: { type: new GraphQLNonNull(DeviceCreateWithoutProgramsInput) },
  }),
})

export const DeviceUpdateWithoutProgramsInput = new GraphQLInputObjectType({
  name: 'DeviceUpdateWithoutProgramsInput',
  fields: () => ({
    connection: { type: DeviceConnection },
    productType: { type: GraphQLString },
    alias: { type: GraphQLString },
    serialNumber: { type: GraphQLInt },
    networkId: { type: GraphQLInt },
    floor: { type: GraphQLString },
    room: { type: GraphQLString },
    building: { type: BuildingUpdateOneWithoutDevicesInput },
    inputs: { type: InputUpdateManyWithoutDeviceInput },
    outputs: { type: OutputUpdateManyWithoutDeviceInput },
    pids: { type: PidUpdateManyWithoutDeviceInput },
    variables: { type: VariableUpdateManyWithoutDeviceInput },
    graphics: { type: GraphicUpdateManyWithoutDeviceInput },
    holidays: { type: HolidayUpdateManyWithoutDeviceInput },
    schedules: { type: ScheduleUpdateManyWithoutDeviceInput },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
  }),
})

export const DeviceCreateWithoutPidsInput = new GraphQLInputObjectType({
  name: 'DeviceCreateWithoutPidsInput',
  fields: () => ({
    connection: { type: new GraphQLNonNull(DeviceConnection) },
    productType: { type: new GraphQLNonNull(GraphQLString) },
    alias: { type: GraphQLString },
    serialNumber: { type: GraphQLInt },
    networkId: { type: GraphQLInt },
    floor: { type: GraphQLString },
    room: { type: GraphQLString },
    building: { type: BuildingCreateNestedOneWithoutDevicesInput },
    inputs: { type: InputCreateNestedManyWithoutDeviceInput },
    outputs: { type: OutputCreateNestedManyWithoutDeviceInput },
    variables: { type: VariableCreateNestedManyWithoutDeviceInput },
    graphics: { type: GraphicCreateNestedManyWithoutDeviceInput },
    programs: { type: ProgramCreateNestedManyWithoutDeviceInput },
    holidays: { type: HolidayCreateNestedManyWithoutDeviceInput },
    schedules: { type: ScheduleCreateNestedManyWithoutDeviceInput },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
  }),
})

export const DeviceCreateOrConnectWithoutPidsInput = new GraphQLInputObjectType(
  {
    name: 'DeviceCreateOrConnectWithoutPidsInput',
    fields: () => ({
      where: { type: new GraphQLNonNull(DeviceWhereUniqueInput) },
      create: { type: new GraphQLNonNull(DeviceCreateWithoutPidsInput) },
    }),
  },
)

export const DeviceUpsertWithoutPidsInput = new GraphQLInputObjectType({
  name: 'DeviceUpsertWithoutPidsInput',
  fields: () => ({
    update: { type: new GraphQLNonNull(DeviceUpdateWithoutPidsInput) },
    create: { type: new GraphQLNonNull(DeviceCreateWithoutPidsInput) },
  }),
})

export const DeviceUpdateWithoutPidsInput = new GraphQLInputObjectType({
  name: 'DeviceUpdateWithoutPidsInput',
  fields: () => ({
    connection: { type: DeviceConnection },
    productType: { type: GraphQLString },
    alias: { type: GraphQLString },
    serialNumber: { type: GraphQLInt },
    networkId: { type: GraphQLInt },
    floor: { type: GraphQLString },
    room: { type: GraphQLString },
    building: { type: BuildingUpdateOneWithoutDevicesInput },
    inputs: { type: InputUpdateManyWithoutDeviceInput },
    outputs: { type: OutputUpdateManyWithoutDeviceInput },
    variables: { type: VariableUpdateManyWithoutDeviceInput },
    graphics: { type: GraphicUpdateManyWithoutDeviceInput },
    programs: { type: ProgramUpdateManyWithoutDeviceInput },
    holidays: { type: HolidayUpdateManyWithoutDeviceInput },
    schedules: { type: ScheduleUpdateManyWithoutDeviceInput },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
  }),
})

export const FileCreateWithoutGraphicInput = new GraphQLInputObjectType({
  name: 'FileCreateWithoutGraphicInput',
  fields: () => ({
    name: { type: new GraphQLNonNull(GraphQLString) },
    mimeType: { type: new GraphQLNonNull(GraphQLString) },
    path: { type: new GraphQLNonNull(GraphQLString) },
    size: { type: GraphQLInt },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
    meta: { type: GraphQLJSON },
    tags: { type: new GraphQLList(new GraphQLNonNull(GraphQLString)) },
    Project: { type: ProjectCreateNestedManyWithoutImageInput },
  }),
})

export const FileCreateOrConnectWithoutGraphicInput =
  new GraphQLInputObjectType({
    name: 'FileCreateOrConnectWithoutGraphicInput',
    fields: () => ({
      where: { type: new GraphQLNonNull(FileWhereUniqueInput) },
      create: { type: new GraphQLNonNull(FileCreateWithoutGraphicInput) },
    }),
  })

export const DeviceCreateWithoutGraphicsInput = new GraphQLInputObjectType({
  name: 'DeviceCreateWithoutGraphicsInput',
  fields: () => ({
    connection: { type: new GraphQLNonNull(DeviceConnection) },
    productType: { type: new GraphQLNonNull(GraphQLString) },
    alias: { type: GraphQLString },
    serialNumber: { type: GraphQLInt },
    networkId: { type: GraphQLInt },
    floor: { type: GraphQLString },
    room: { type: GraphQLString },
    building: { type: BuildingCreateNestedOneWithoutDevicesInput },
    inputs: { type: InputCreateNestedManyWithoutDeviceInput },
    outputs: { type: OutputCreateNestedManyWithoutDeviceInput },
    pids: { type: PidCreateNestedManyWithoutDeviceInput },
    variables: { type: VariableCreateNestedManyWithoutDeviceInput },
    programs: { type: ProgramCreateNestedManyWithoutDeviceInput },
    holidays: { type: HolidayCreateNestedManyWithoutDeviceInput },
    schedules: { type: ScheduleCreateNestedManyWithoutDeviceInput },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
  }),
})

export const DeviceCreateOrConnectWithoutGraphicsInput =
  new GraphQLInputObjectType({
    name: 'DeviceCreateOrConnectWithoutGraphicsInput',
    fields: () => ({
      where: { type: new GraphQLNonNull(DeviceWhereUniqueInput) },
      create: { type: new GraphQLNonNull(DeviceCreateWithoutGraphicsInput) },
    }),
  })

export const FileUpsertWithoutGraphicInput = new GraphQLInputObjectType({
  name: 'FileUpsertWithoutGraphicInput',
  fields: () => ({
    update: { type: new GraphQLNonNull(FileUpdateWithoutGraphicInput) },
    create: { type: new GraphQLNonNull(FileCreateWithoutGraphicInput) },
  }),
})

export const FileUpdateWithoutGraphicInput = new GraphQLInputObjectType({
  name: 'FileUpdateWithoutGraphicInput',
  fields: () => ({
    name: { type: GraphQLString },
    mimeType: { type: GraphQLString },
    path: { type: GraphQLString },
    size: { type: GraphQLInt },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
    meta: { type: GraphQLJSON },
    tags: { type: new GraphQLList(new GraphQLNonNull(GraphQLString)) },
    Project: { type: ProjectUpdateManyWithoutImageInput },
  }),
})

export const DeviceUpsertWithoutGraphicsInput = new GraphQLInputObjectType({
  name: 'DeviceUpsertWithoutGraphicsInput',
  fields: () => ({
    update: { type: new GraphQLNonNull(DeviceUpdateWithoutGraphicsInput) },
    create: { type: new GraphQLNonNull(DeviceCreateWithoutGraphicsInput) },
  }),
})

export const DeviceUpdateWithoutGraphicsInput = new GraphQLInputObjectType({
  name: 'DeviceUpdateWithoutGraphicsInput',
  fields: () => ({
    connection: { type: DeviceConnection },
    productType: { type: GraphQLString },
    alias: { type: GraphQLString },
    serialNumber: { type: GraphQLInt },
    networkId: { type: GraphQLInt },
    floor: { type: GraphQLString },
    room: { type: GraphQLString },
    building: { type: BuildingUpdateOneWithoutDevicesInput },
    inputs: { type: InputUpdateManyWithoutDeviceInput },
    outputs: { type: OutputUpdateManyWithoutDeviceInput },
    pids: { type: PidUpdateManyWithoutDeviceInput },
    variables: { type: VariableUpdateManyWithoutDeviceInput },
    programs: { type: ProgramUpdateManyWithoutDeviceInput },
    holidays: { type: HolidayUpdateManyWithoutDeviceInput },
    schedules: { type: ScheduleUpdateManyWithoutDeviceInput },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
  }),
})

export const DeviceCreateWithoutSchedulesInput = new GraphQLInputObjectType({
  name: 'DeviceCreateWithoutSchedulesInput',
  fields: () => ({
    connection: { type: new GraphQLNonNull(DeviceConnection) },
    productType: { type: new GraphQLNonNull(GraphQLString) },
    alias: { type: GraphQLString },
    serialNumber: { type: GraphQLInt },
    networkId: { type: GraphQLInt },
    floor: { type: GraphQLString },
    room: { type: GraphQLString },
    building: { type: BuildingCreateNestedOneWithoutDevicesInput },
    inputs: { type: InputCreateNestedManyWithoutDeviceInput },
    outputs: { type: OutputCreateNestedManyWithoutDeviceInput },
    pids: { type: PidCreateNestedManyWithoutDeviceInput },
    variables: { type: VariableCreateNestedManyWithoutDeviceInput },
    graphics: { type: GraphicCreateNestedManyWithoutDeviceInput },
    programs: { type: ProgramCreateNestedManyWithoutDeviceInput },
    holidays: { type: HolidayCreateNestedManyWithoutDeviceInput },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
  }),
})

export const DeviceCreateOrConnectWithoutSchedulesInput =
  new GraphQLInputObjectType({
    name: 'DeviceCreateOrConnectWithoutSchedulesInput',
    fields: () => ({
      where: { type: new GraphQLNonNull(DeviceWhereUniqueInput) },
      create: { type: new GraphQLNonNull(DeviceCreateWithoutSchedulesInput) },
    }),
  })

export const ScheduleTimeCreateWithoutScheduleInput =
  new GraphQLInputObjectType({
    name: 'ScheduleTimeCreateWithoutScheduleInput',
    fields: () => ({
      status: { type: GraphQLString },
      monday: { type: GraphQLDateTime },
      tuesday: { type: GraphQLDateTime },
      wednesday: { type: GraphQLDateTime },
      thursday: { type: GraphQLDateTime },
      friday: { type: GraphQLDateTime },
      saterday: { type: GraphQLDateTime },
      sunday: { type: GraphQLDateTime },
      holiday1: { type: GraphQLDateTime },
      holiday2: { type: GraphQLDateTime },
      createdAt: { type: GraphQLDateTime },
      updatedAt: { type: GraphQLDateTime },
    }),
  })

export const ScheduleTimeCreateOrConnectWithoutScheduleInput =
  new GraphQLInputObjectType({
    name: 'ScheduleTimeCreateOrConnectWithoutScheduleInput',
    fields: () => ({
      where: { type: new GraphQLNonNull(ScheduleTimeWhereUniqueInput) },
      create: {
        type: new GraphQLNonNull(ScheduleTimeCreateWithoutScheduleInput),
      },
    }),
  })

export const ScheduleTimeCreateManyScheduleInputEnvelope =
  new GraphQLInputObjectType({
    name: 'ScheduleTimeCreateManyScheduleInputEnvelope',
    fields: () => ({
      data: {
        type: new GraphQLNonNull(
          new GraphQLList(
            new GraphQLNonNull(ScheduleTimeCreateManyScheduleInput),
          ),
        ),
      },
      skipDuplicates: { type: GraphQLBoolean },
    }),
  })

export const DeviceUpsertWithoutSchedulesInput = new GraphQLInputObjectType({
  name: 'DeviceUpsertWithoutSchedulesInput',
  fields: () => ({
    update: { type: new GraphQLNonNull(DeviceUpdateWithoutSchedulesInput) },
    create: { type: new GraphQLNonNull(DeviceCreateWithoutSchedulesInput) },
  }),
})

export const DeviceUpdateWithoutSchedulesInput = new GraphQLInputObjectType({
  name: 'DeviceUpdateWithoutSchedulesInput',
  fields: () => ({
    connection: { type: DeviceConnection },
    productType: { type: GraphQLString },
    alias: { type: GraphQLString },
    serialNumber: { type: GraphQLInt },
    networkId: { type: GraphQLInt },
    floor: { type: GraphQLString },
    room: { type: GraphQLString },
    building: { type: BuildingUpdateOneWithoutDevicesInput },
    inputs: { type: InputUpdateManyWithoutDeviceInput },
    outputs: { type: OutputUpdateManyWithoutDeviceInput },
    pids: { type: PidUpdateManyWithoutDeviceInput },
    variables: { type: VariableUpdateManyWithoutDeviceInput },
    graphics: { type: GraphicUpdateManyWithoutDeviceInput },
    programs: { type: ProgramUpdateManyWithoutDeviceInput },
    holidays: { type: HolidayUpdateManyWithoutDeviceInput },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
  }),
})

export const ScheduleTimeUpsertWithWhereUniqueWithoutScheduleInput =
  new GraphQLInputObjectType({
    name: 'ScheduleTimeUpsertWithWhereUniqueWithoutScheduleInput',
    fields: () => ({
      where: { type: new GraphQLNonNull(ScheduleTimeWhereUniqueInput) },
      update: {
        type: new GraphQLNonNull(ScheduleTimeUpdateWithoutScheduleInput),
      },
      create: {
        type: new GraphQLNonNull(ScheduleTimeCreateWithoutScheduleInput),
      },
    }),
  })

export const ScheduleTimeUpdateWithWhereUniqueWithoutScheduleInput =
  new GraphQLInputObjectType({
    name: 'ScheduleTimeUpdateWithWhereUniqueWithoutScheduleInput',
    fields: () => ({
      where: { type: new GraphQLNonNull(ScheduleTimeWhereUniqueInput) },
      data: {
        type: new GraphQLNonNull(ScheduleTimeUpdateWithoutScheduleInput),
      },
    }),
  })

export const ScheduleTimeUpdateManyWithWhereWithoutScheduleInput =
  new GraphQLInputObjectType({
    name: 'ScheduleTimeUpdateManyWithWhereWithoutScheduleInput',
    fields: () => ({
      where: { type: new GraphQLNonNull(ScheduleTimeScalarWhereInput) },
      data: { type: new GraphQLNonNull(ScheduleTimeUpdateManyMutationInput) },
    }),
  })

export const ScheduleTimeScalarWhereInput = new GraphQLInputObjectType({
  name: 'ScheduleTimeScalarFilter',
  fields: () => ({
    AND: {
      type: new GraphQLList(new GraphQLNonNull(ScheduleTimeScalarWhereInput)),
    },
    OR: {
      type: new GraphQLList(new GraphQLNonNull(ScheduleTimeScalarWhereInput)),
    },
    NOT: {
      type: new GraphQLList(new GraphQLNonNull(ScheduleTimeScalarWhereInput)),
    },
    id: { type: IntFilter },
    status: { type: StringFilter },
    monday: { type: DateTimeNullableFilter },
    tuesday: { type: DateTimeNullableFilter },
    wednesday: { type: DateTimeNullableFilter },
    thursday: { type: DateTimeNullableFilter },
    friday: { type: DateTimeNullableFilter },
    saterday: { type: DateTimeNullableFilter },
    sunday: { type: DateTimeNullableFilter },
    holiday1: { type: DateTimeNullableFilter },
    holiday2: { type: DateTimeNullableFilter },
    createdAt: { type: DateTimeFilter },
    updatedAt: { type: DateTimeFilter },
    scheduleId: { type: IntNullableFilter },
  }),
})

export const DeviceCreateWithoutHolidaysInput = new GraphQLInputObjectType({
  name: 'DeviceCreateWithoutHolidaysInput',
  fields: () => ({
    connection: { type: new GraphQLNonNull(DeviceConnection) },
    productType: { type: new GraphQLNonNull(GraphQLString) },
    alias: { type: GraphQLString },
    serialNumber: { type: GraphQLInt },
    networkId: { type: GraphQLInt },
    floor: { type: GraphQLString },
    room: { type: GraphQLString },
    building: { type: BuildingCreateNestedOneWithoutDevicesInput },
    inputs: { type: InputCreateNestedManyWithoutDeviceInput },
    outputs: { type: OutputCreateNestedManyWithoutDeviceInput },
    pids: { type: PidCreateNestedManyWithoutDeviceInput },
    variables: { type: VariableCreateNestedManyWithoutDeviceInput },
    graphics: { type: GraphicCreateNestedManyWithoutDeviceInput },
    programs: { type: ProgramCreateNestedManyWithoutDeviceInput },
    schedules: { type: ScheduleCreateNestedManyWithoutDeviceInput },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
  }),
})

export const DeviceCreateOrConnectWithoutHolidaysInput =
  new GraphQLInputObjectType({
    name: 'DeviceCreateOrConnectWithoutHolidaysInput',
    fields: () => ({
      where: { type: new GraphQLNonNull(DeviceWhereUniqueInput) },
      create: { type: new GraphQLNonNull(DeviceCreateWithoutHolidaysInput) },
    }),
  })

export const DeviceUpsertWithoutHolidaysInput = new GraphQLInputObjectType({
  name: 'DeviceUpsertWithoutHolidaysInput',
  fields: () => ({
    update: { type: new GraphQLNonNull(DeviceUpdateWithoutHolidaysInput) },
    create: { type: new GraphQLNonNull(DeviceCreateWithoutHolidaysInput) },
  }),
})

export const DeviceUpdateWithoutHolidaysInput = new GraphQLInputObjectType({
  name: 'DeviceUpdateWithoutHolidaysInput',
  fields: () => ({
    connection: { type: DeviceConnection },
    productType: { type: GraphQLString },
    alias: { type: GraphQLString },
    serialNumber: { type: GraphQLInt },
    networkId: { type: GraphQLInt },
    floor: { type: GraphQLString },
    room: { type: GraphQLString },
    building: { type: BuildingUpdateOneWithoutDevicesInput },
    inputs: { type: InputUpdateManyWithoutDeviceInput },
    outputs: { type: OutputUpdateManyWithoutDeviceInput },
    pids: { type: PidUpdateManyWithoutDeviceInput },
    variables: { type: VariableUpdateManyWithoutDeviceInput },
    graphics: { type: GraphicUpdateManyWithoutDeviceInput },
    programs: { type: ProgramUpdateManyWithoutDeviceInput },
    schedules: { type: ScheduleUpdateManyWithoutDeviceInput },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
  }),
})

export const ScheduleCreateWithoutTimesInput = new GraphQLInputObjectType({
  name: 'ScheduleCreateWithoutTimesInput',
  fields: () => ({
    index: { type: new GraphQLNonNull(GraphQLInt) },
    label: { type: GraphQLString },
    fullLabel: { type: GraphQLString },
    autoManual: { type: new GraphQLNonNull(AutoManual) },
    output: { type: GraphQLString },
    holiday1: { type: GraphQLString },
    status1: { type: GraphQLString },
    holiday2: { type: GraphQLString },
    status2: { type: GraphQLString },
    binaryArray: { type: GraphQLString },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
    Device: { type: DeviceCreateNestedOneWithoutSchedulesInput },
  }),
})

export const ScheduleCreateOrConnectWithoutTimesInput =
  new GraphQLInputObjectType({
    name: 'ScheduleCreateOrConnectWithoutTimesInput',
    fields: () => ({
      where: { type: new GraphQLNonNull(ScheduleWhereUniqueInput) },
      create: { type: new GraphQLNonNull(ScheduleCreateWithoutTimesInput) },
    }),
  })

export const ScheduleUpsertWithoutTimesInput = new GraphQLInputObjectType({
  name: 'ScheduleUpsertWithoutTimesInput',
  fields: () => ({
    update: { type: new GraphQLNonNull(ScheduleUpdateWithoutTimesInput) },
    create: { type: new GraphQLNonNull(ScheduleCreateWithoutTimesInput) },
  }),
})

export const ScheduleUpdateWithoutTimesInput = new GraphQLInputObjectType({
  name: 'ScheduleUpdateWithoutTimesInput',
  fields: () => ({
    index: { type: GraphQLInt },
    label: { type: GraphQLString },
    fullLabel: { type: GraphQLString },
    autoManual: { type: AutoManual },
    output: { type: GraphQLString },
    holiday1: { type: GraphQLString },
    status1: { type: GraphQLString },
    holiday2: { type: GraphQLString },
    status2: { type: GraphQLString },
    binaryArray: { type: GraphQLString },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
    Device: { type: DeviceUpdateOneWithoutSchedulesInput },
  }),
})

export const GraphicCreateManyPictureInput = new GraphQLInputObjectType({
  name: 'GraphicCreateManyPictureInput',
  fields: () => ({
    id: { type: GraphQLInt },
    index: { type: new GraphQLNonNull(GraphQLInt) },
    label: { type: GraphQLString },
    fullLabel: { type: GraphQLString },
    elementCount: { type: GraphQLInt },
    binaryArray: { type: GraphQLString },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
    deviceId: { type: GraphQLInt },
  }),
})

export const ProjectCreateManyImageInput = new GraphQLInputObjectType({
  name: 'ProjectCreateManyImageInput',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: new GraphQLNonNull(GraphQLString) },
    slug: { type: GraphQLString },
    description: { type: GraphQLString },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
  }),
})

export const GraphicUpdateWithoutPictureInput = new GraphQLInputObjectType({
  name: 'GraphicUpdateWithoutPictureInput',
  fields: () => ({
    index: { type: GraphQLInt },
    label: { type: GraphQLString },
    fullLabel: { type: GraphQLString },
    elementCount: { type: GraphQLInt },
    binaryArray: { type: GraphQLString },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
    Device: { type: DeviceUpdateOneWithoutGraphicsInput },
  }),
})

export const ProjectUpdateWithoutImageInput = new GraphQLInputObjectType({
  name: 'ProjectUpdateWithoutImageInput',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    slug: { type: GraphQLString },
    description: { type: GraphQLString },
    buildings: { type: BuildingUpdateManyWithoutProjectInput },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
  }),
})

export const BuildingCreateManyProjectInput = new GraphQLInputObjectType({
  name: 'BuildingCreateManyProjectInput',
  fields: () => ({
    id: { type: GraphQLInt },
    title: { type: new GraphQLNonNull(GraphQLString) },
    protocol: { type: BuildingProtocol },
    ip: { type: GraphQLString },
    modbusTcpPort: { type: GraphQLString },
    comPort: { type: GraphQLString },
    baudRate: { type: GraphQLInt },
    country: { type: GraphQLString },
    state: { type: GraphQLString },
    city: { type: GraphQLString },
    street: { type: GraphQLString },
    zip: { type: GraphQLString },
    engineering: { type: GraphQLString },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
  }),
})

export const BuildingUpdateWithoutProjectInput = new GraphQLInputObjectType({
  name: 'BuildingUpdateWithoutProjectInput',
  fields: () => ({
    title: { type: GraphQLString },
    protocol: { type: BuildingProtocol },
    ip: { type: GraphQLString },
    modbusTcpPort: { type: GraphQLString },
    comPort: { type: GraphQLString },
    baudRate: { type: GraphQLInt },
    country: { type: GraphQLString },
    state: { type: GraphQLString },
    city: { type: GraphQLString },
    street: { type: GraphQLString },
    zip: { type: GraphQLString },
    engineering: { type: GraphQLString },
    devices: { type: DeviceUpdateManyWithoutBuildingInput },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
  }),
})

export const DeviceCreateManyBuildingInput = new GraphQLInputObjectType({
  name: 'DeviceCreateManyBuildingInput',
  fields: () => ({
    id: { type: GraphQLInt },
    connection: { type: new GraphQLNonNull(DeviceConnection) },
    productType: { type: new GraphQLNonNull(GraphQLString) },
    alias: { type: GraphQLString },
    serialNumber: { type: GraphQLInt },
    networkId: { type: GraphQLInt },
    floor: { type: GraphQLString },
    room: { type: GraphQLString },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
  }),
})

export const DeviceUpdateWithoutBuildingInput = new GraphQLInputObjectType({
  name: 'DeviceUpdateWithoutBuildingInput',
  fields: () => ({
    connection: { type: DeviceConnection },
    productType: { type: GraphQLString },
    alias: { type: GraphQLString },
    serialNumber: { type: GraphQLInt },
    networkId: { type: GraphQLInt },
    floor: { type: GraphQLString },
    room: { type: GraphQLString },
    inputs: { type: InputUpdateManyWithoutDeviceInput },
    outputs: { type: OutputUpdateManyWithoutDeviceInput },
    pids: { type: PidUpdateManyWithoutDeviceInput },
    variables: { type: VariableUpdateManyWithoutDeviceInput },
    graphics: { type: GraphicUpdateManyWithoutDeviceInput },
    programs: { type: ProgramUpdateManyWithoutDeviceInput },
    holidays: { type: HolidayUpdateManyWithoutDeviceInput },
    schedules: { type: ScheduleUpdateManyWithoutDeviceInput },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
  }),
})

export const InputCreateManyDeviceInput = new GraphQLInputObjectType({
  name: 'InputCreateManyDeviceInput',
  fields: () => ({
    id: { type: GraphQLInt },
    index: { type: new GraphQLNonNull(GraphQLInt) },
    panel: { type: new GraphQLNonNull(GraphQLInt) },
    label: { type: GraphQLString },
    fullLabel: { type: GraphQLString },
    autoManual: { type: new GraphQLNonNull(AutoManual) },
    value: { type: GraphQLString },
    units: { type: GraphQLString },
    range: { type: GraphQLString },
    calibration: { type: GraphQLFloat },
    sign: { type: GraphQLString },
    filter: { type: GraphQLInt },
    status: { type: GraphQLString },
    signalType: { type: GraphQLString },
    type: { type: GraphQLString },
    binaryArray: { type: GraphQLString },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
  }),
})

export const OutputCreateManyDeviceInput = new GraphQLInputObjectType({
  name: 'OutputCreateManyDeviceInput',
  fields: () => ({
    id: { type: GraphQLInt },
    index: { type: new GraphQLNonNull(GraphQLInt) },
    panel: { type: new GraphQLNonNull(GraphQLInt) },
    label: { type: GraphQLString },
    fullLabel: { type: GraphQLString },
    autoManual: { type: AutoManual },
    hoaSwitch: { type: GraphQLString },
    value: { type: GraphQLString },
    units: { type: GraphQLString },
    range: { type: GraphQLString },
    lowVoltage: { type: GraphQLFloat },
    highVoltage: { type: GraphQLFloat },
    pwmPeriod: { type: GraphQLInt },
    status: { type: GraphQLString },
    type: { type: GraphQLString },
    binaryArray: { type: GraphQLString },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
  }),
})

export const PidCreateManyDeviceInput = new GraphQLInputObjectType({
  name: 'PidCreateManyDeviceInput',
  fields: () => ({
    id: { type: GraphQLInt },
    index: { type: new GraphQLNonNull(GraphQLInt) },
    input: { type: GraphQLString },
    inputValue: { type: GraphQLString },
    inputUnits: { type: GraphQLString },
    autoManual: { type: new GraphQLNonNull(AutoManual) },
    output: { type: GraphQLString },
    setpoint: { type: GraphQLString },
    setpointValue: { type: GraphQLFloat },
    setpointUnits: { type: GraphQLString },
    action: { type: GraphQLString },
    pidProp: { type: GraphQLInt },
    pidInt: { type: GraphQLInt },
    pidTime: { type: GraphQLString },
    pidDer: { type: GraphQLFloat },
    bias: { type: GraphQLInt },
    binaryArray: { type: GraphQLString },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
  }),
})

export const VariableCreateManyDeviceInput = new GraphQLInputObjectType({
  name: 'VariableCreateManyDeviceInput',
  fields: () => ({
    id: { type: GraphQLInt },
    index: { type: new GraphQLNonNull(GraphQLInt) },
    label: { type: GraphQLString },
    fullLabel: { type: GraphQLString },
    autoManual: { type: new GraphQLNonNull(AutoManual) },
    value: { type: GraphQLString },
    units: { type: GraphQLString },
    binaryArray: { type: GraphQLString },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
  }),
})

export const GraphicCreateManyDeviceInput = new GraphQLInputObjectType({
  name: 'GraphicCreateManyDeviceInput',
  fields: () => ({
    id: { type: GraphQLInt },
    index: { type: new GraphQLNonNull(GraphQLInt) },
    label: { type: GraphQLString },
    fullLabel: { type: GraphQLString },
    fileId: { type: GraphQLInt },
    elementCount: { type: GraphQLInt },
    binaryArray: { type: GraphQLString },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
  }),
})

export const ProgramCreateManyDeviceInput = new GraphQLInputObjectType({
  name: 'ProgramCreateManyDeviceInput',
  fields: () => ({
    id: { type: GraphQLInt },
    index: { type: new GraphQLNonNull(GraphQLInt) },
    label: { type: GraphQLString },
    fullLabel: { type: GraphQLString },
    status: { type: GraphQLString },
    autoManual: { type: new GraphQLNonNull(AutoManual) },
    size: { type: GraphQLInt },
    executionTime: { type: GraphQLInt },
    sourceCode: { type: GraphQLString },
    binaryArray: { type: GraphQLString },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
  }),
})

export const HolidayCreateManyDeviceInput = new GraphQLInputObjectType({
  name: 'HolidayCreateManyDeviceInput',
  fields: () => ({
    id: { type: GraphQLInt },
    index: { type: new GraphQLNonNull(GraphQLInt) },
    label: { type: GraphQLString },
    fullLabel: { type: GraphQLString },
    autoManual: { type: new GraphQLNonNull(AutoManual) },
    value: { type: GraphQLString },
    days: { type: new GraphQLList(new GraphQLNonNull(GraphQLDateTime)) },
    binaryArray: { type: GraphQLString },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
  }),
})

export const ScheduleCreateManyDeviceInput = new GraphQLInputObjectType({
  name: 'ScheduleCreateManyDeviceInput',
  fields: () => ({
    id: { type: GraphQLInt },
    index: { type: new GraphQLNonNull(GraphQLInt) },
    label: { type: GraphQLString },
    fullLabel: { type: GraphQLString },
    autoManual: { type: new GraphQLNonNull(AutoManual) },
    output: { type: GraphQLString },
    holiday1: { type: GraphQLString },
    status1: { type: GraphQLString },
    holiday2: { type: GraphQLString },
    status2: { type: GraphQLString },
    binaryArray: { type: GraphQLString },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
  }),
})

export const InputUpdateWithoutDeviceInput = new GraphQLInputObjectType({
  name: 'InputUpdateWithoutDeviceInput',
  fields: () => ({
    index: { type: GraphQLInt },
    panel: { type: GraphQLInt },
    label: { type: GraphQLString },
    fullLabel: { type: GraphQLString },
    autoManual: { type: AutoManual },
    value: { type: GraphQLString },
    units: { type: GraphQLString },
    range: { type: GraphQLString },
    calibration: { type: GraphQLFloat },
    sign: { type: GraphQLString },
    filter: { type: GraphQLInt },
    status: { type: GraphQLString },
    signalType: { type: GraphQLString },
    type: { type: GraphQLString },
    binaryArray: { type: GraphQLString },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
  }),
})

export const OutputUpdateWithoutDeviceInput = new GraphQLInputObjectType({
  name: 'OutputUpdateWithoutDeviceInput',
  fields: () => ({
    index: { type: GraphQLInt },
    panel: { type: GraphQLInt },
    label: { type: GraphQLString },
    fullLabel: { type: GraphQLString },
    autoManual: { type: AutoManual },
    hoaSwitch: { type: GraphQLString },
    value: { type: GraphQLString },
    units: { type: GraphQLString },
    range: { type: GraphQLString },
    lowVoltage: { type: GraphQLFloat },
    highVoltage: { type: GraphQLFloat },
    pwmPeriod: { type: GraphQLInt },
    status: { type: GraphQLString },
    type: { type: GraphQLString },
    binaryArray: { type: GraphQLString },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
  }),
})

export const PidUpdateWithoutDeviceInput = new GraphQLInputObjectType({
  name: 'PidUpdateWithoutDeviceInput',
  fields: () => ({
    index: { type: GraphQLInt },
    input: { type: GraphQLString },
    inputValue: { type: GraphQLString },
    inputUnits: { type: GraphQLString },
    autoManual: { type: AutoManual },
    output: { type: GraphQLString },
    setpoint: { type: GraphQLString },
    setpointValue: { type: GraphQLFloat },
    setpointUnits: { type: GraphQLString },
    action: { type: GraphQLString },
    pidProp: { type: GraphQLInt },
    pidInt: { type: GraphQLInt },
    pidTime: { type: GraphQLString },
    pidDer: { type: GraphQLFloat },
    bias: { type: GraphQLInt },
    binaryArray: { type: GraphQLString },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
  }),
})

export const VariableUpdateWithoutDeviceInput = new GraphQLInputObjectType({
  name: 'VariableUpdateWithoutDeviceInput',
  fields: () => ({
    index: { type: GraphQLInt },
    label: { type: GraphQLString },
    fullLabel: { type: GraphQLString },
    autoManual: { type: AutoManual },
    value: { type: GraphQLString },
    units: { type: GraphQLString },
    binaryArray: { type: GraphQLString },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
  }),
})

export const GraphicUpdateWithoutDeviceInput = new GraphQLInputObjectType({
  name: 'GraphicUpdateWithoutDeviceInput',
  fields: () => ({
    index: { type: GraphQLInt },
    label: { type: GraphQLString },
    fullLabel: { type: GraphQLString },
    picture: { type: FileUpdateOneWithoutGraphicInput },
    elementCount: { type: GraphQLInt },
    binaryArray: { type: GraphQLString },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
  }),
})

export const ProgramUpdateWithoutDeviceInput = new GraphQLInputObjectType({
  name: 'ProgramUpdateWithoutDeviceInput',
  fields: () => ({
    index: { type: GraphQLInt },
    label: { type: GraphQLString },
    fullLabel: { type: GraphQLString },
    status: { type: GraphQLString },
    autoManual: { type: AutoManual },
    size: { type: GraphQLInt },
    executionTime: { type: GraphQLInt },
    sourceCode: { type: GraphQLString },
    binaryArray: { type: GraphQLString },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
  }),
})

export const HolidayUpdateWithoutDeviceInput = new GraphQLInputObjectType({
  name: 'HolidayUpdateWithoutDeviceInput',
  fields: () => ({
    index: { type: GraphQLInt },
    label: { type: GraphQLString },
    fullLabel: { type: GraphQLString },
    autoManual: { type: AutoManual },
    value: { type: GraphQLString },
    days: { type: new GraphQLList(new GraphQLNonNull(GraphQLDateTime)) },
    binaryArray: { type: GraphQLString },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
  }),
})

export const ScheduleUpdateWithoutDeviceInput = new GraphQLInputObjectType({
  name: 'ScheduleUpdateWithoutDeviceInput',
  fields: () => ({
    index: { type: GraphQLInt },
    label: { type: GraphQLString },
    fullLabel: { type: GraphQLString },
    autoManual: { type: AutoManual },
    output: { type: GraphQLString },
    holiday1: { type: GraphQLString },
    status1: { type: GraphQLString },
    holiday2: { type: GraphQLString },
    status2: { type: GraphQLString },
    binaryArray: { type: GraphQLString },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
    times: { type: ScheduleTimeUpdateManyWithoutScheduleInput },
  }),
})

export const ScheduleTimeCreateManyScheduleInput = new GraphQLInputObjectType({
  name: 'ScheduleTimeCreateManyScheduleInput',
  fields: () => ({
    id: { type: GraphQLInt },
    status: { type: GraphQLString },
    monday: { type: GraphQLDateTime },
    tuesday: { type: GraphQLDateTime },
    wednesday: { type: GraphQLDateTime },
    thursday: { type: GraphQLDateTime },
    friday: { type: GraphQLDateTime },
    saterday: { type: GraphQLDateTime },
    sunday: { type: GraphQLDateTime },
    holiday1: { type: GraphQLDateTime },
    holiday2: { type: GraphQLDateTime },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
  }),
})

export const ScheduleTimeUpdateWithoutScheduleInput =
  new GraphQLInputObjectType({
    name: 'ScheduleTimeUpdateWithoutScheduleInput',
    fields: () => ({
      status: { type: GraphQLString },
      monday: { type: GraphQLDateTime },
      tuesday: { type: GraphQLDateTime },
      wednesday: { type: GraphQLDateTime },
      thursday: { type: GraphQLDateTime },
      friday: { type: GraphQLDateTime },
      saterday: { type: GraphQLDateTime },
      sunday: { type: GraphQLDateTime },
      holiday1: { type: GraphQLDateTime },
      holiday2: { type: GraphQLDateTime },
      createdAt: { type: GraphQLDateTime },
      updatedAt: { type: GraphQLDateTime },
    }),
  })
