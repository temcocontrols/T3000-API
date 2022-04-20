import { randomBytes } from 'crypto'
export const generateKey = (length) => {
  const key = randomBytes(length * 2)
    .toString('base64')
    .replace(/[^A-Za-z0-9]/g, '')
    .substring(0, length)
  return key
}
