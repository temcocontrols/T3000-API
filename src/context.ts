import { prisma } from './prisma'
import { PrismaClient } from '@prisma/client'
import { MercuriusContext } from 'mercurius'
import { getUserFromRequest } from './common/getUserFromRequest'
import { fns } from './ctxFunctions'

export interface Context {
  prisma: PrismaClient
  user: any
  fns: Record<string, Function>
}

export interface AppContext extends MercuriusContext {
  prisma: PrismaClient
  user: any
  fns: Record<string, Function>
}

export async function createContext(req, reply?): Promise<Context> {
  return {
    prisma,
    // add_context_items
    user: await getUserFromRequest(req, reply),
    fns,
  }
}
