import {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLString,
} from 'graphql'
import { AppContext } from '../context'
import { programEncode } from 't3000-interpretor'

const compileProgramPayload = new GraphQLObjectType({
  name: 'CompileProgramPayload',
  fields: () => ({
    errorCode: { type: GraphQLInt },
    encodeArray: { type: GraphQLString },
    message: { type: GraphQLString },
  }),
})

export const programCustomMutations = {
  compileProgram: {
    type: new GraphQLNonNull(compileProgramPayload),
    args: {
      code: { type: new GraphQLNonNull(GraphQLString) },
    },
    async resolve(_root, args, ctx: AppContext) {
      const res = programEncode(args.code)
      return {
        errorCode: res.errorcode,
        encodeArray: res.encode_array,
        message: res.encode_message,
      }
    },
  },
}
