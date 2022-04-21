export function getUserFromRequest(req, reply) {
  const accessKey = req.cookies?.access_key || req.headers['access-key']
  if (accessKey) {
    if (accessKey === process.env.ACCESS_KEY) {
      const userRole = 'ADMIN'
      const userId = 1
      return { id: userId, role: userRole }
    } else {
      reply.clearCookie('access_key', {
        path: '/',
        httpOnly: true,
        secure: true,
        sameSite: 'none',
      })
      throw new Error('Invalid access key!')
    }
  } else {
    return { role: process.env.UNAUTHORIZED_ROLE || 'UNAUTHORIZED' }
  }
}
