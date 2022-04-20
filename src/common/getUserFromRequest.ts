export async function getUserFromRequest(req, reply) {
  let user
  
  const adminSecret = req.cookies?.access_key || req.headers['access-key']
  if(!adminSecret){
    return { role: process.env.UNAUTHORIZED_ROLE || 'UNAUTHORIZED' }
  }
  if (adminSecret) {
    if (adminSecret === process.env.ACCESS_KEY) {
      const userRole = 'ADMIN'
      const userId = 1
      return { id: userId, role: userRole }
    } else {
      throw new Error('Invalid access key!')
    }
  }
  return user
}
