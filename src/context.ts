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

export function createContext(req, reply?): Context {
  return {
    prisma,
    // add_context_items
    user: getUserFromRequest(req, reply),
    fns,
  }
}
