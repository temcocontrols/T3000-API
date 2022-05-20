import { ErrorWithProps } from 'mercurius'
export const auth = async (resolve, root, args, context, info) => {
  if (['Mutation', 'Query'].includes(info.path.typename)) {
    // const ext = info.parentType.getFields()[info.fieldName].extensions
    if (
      !['login', 'logout'].includes(info.fieldName) &&
      context.user?.role === 'UNAUTHORIZED'
    ) {
      throw new ErrorWithProps('Unauthorized!', {}, 403)
    }
  }

  return resolve(root, args, context, info)
}
