import { GraphQLInt, GraphQLNonNull, GraphQLObjectType } from 'graphql'

export const AffectedRowsOutput = new GraphQLObjectType({
  name: 'AffectedRowsOutput',
  fields: () => ({
    count: {
      type: new GraphQLNonNull(GraphQLInt),
    },
  }),
})
export * from './File/type'
export * from './Project/type'
export * from './Building/type'
export * from './Device/type'
export * from './Input/type'
export * from './Output/type'
export * from './Variable/type'
export * from './Program/type'
export * from './Pid/type'
export * from './Graphic/type'
export * from './Schedule/type'
export * from './Holiday/type'
