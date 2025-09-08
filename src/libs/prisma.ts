import { PrismaClient } from '@prisma/client'

// Verificar si Prisma Client está disponible
let prisma: PrismaClient

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

try {
  prisma = globalForPrisma.prisma ?? new PrismaClient()
} catch {
  console.error('Prisma Client not initialized. Run "prisma generate" first.')
  // Fallback o manejo de error
  throw new Error('Prisma Client not initialized. Please run "prisma generate"')
}

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma
}

export default prisma