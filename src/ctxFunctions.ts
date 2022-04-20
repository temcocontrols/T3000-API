import { paramCase } from 'change-case'
import { flatten } from 'flat'
import { generateKey } from './common/generateKey'
import { AppContext } from './context'

export const fns = {
  async projectSlugGen(ctx: AppContext, data, path) {
    const flatData = flatten(data)
    if (path.endsWith('slug') && !flatData[path]) {
      const namePath = path.slice(0, path.length - 4) + 'name'
      if (flatData[namePath]) {
        const slug = await getUniqueSlug(
          ctx,
          'project',
          paramCase(flatData[namePath]),
        )
        return slug
      }
    }
    return ''
  },
  generateKey() {
    return generateKey(87)
  },
}

async function getUniqueSlug(ctx: AppContext, type, slug, index = 0) {
  let uniqueSlug = index ? `${slug}-${index}` : slug
  await ctx.prisma[type]
    .findUnique({ where: { slug: uniqueSlug } })
    .then(async (res) => {
      if (res?.id) {
        index++
        uniqueSlug = await getUniqueSlug(ctx, type, slug, index)
      }
    })
  return uniqueSlug
}
