export const resolverMiddlewares = async (resolve, root, args, ctx, info) => {
  if (['Mutation'].includes(info.path.typename)) {
    const ext = info.parentType.getFields()[info.fieldName].extensions
    if (ext.model === 'Project' && ext.op === 'createOne') {
      args.data.slug = await ctx.fns.projectSlugGen(ctx, args.data, 'slug')
    }
  }

  return resolve(root, args, ctx, info)
}
