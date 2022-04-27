export const auth = async (resolve, root, args, context, info) => {
  if (['Mutation', 'Query'].includes(info.path.typename)) {
    const ext = info.parentType.getFields()[info.fieldName].extensions
    if (
      !['login', 'logout'].includes(info.fieldName) &&
      context.user?.role === 'UNAUTHORIZED'
    ) {
      throw new Error('Unauthorized!')
    }
  }

  return resolve(root, args, context, info)
}
