import { PrismaClient } from '@prisma/client'

declare global {
    var prisma: PrismaClient | undefined;
};

// to help prevent multiple instance of PrismaClient with next.js 13 hot reloading
const prismadb = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalThis.prisma = prismadb;

export default prismadb;