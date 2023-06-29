import { PrismaClient, User } from "@prisma/client";
import type { YogaInitialContext } from "graphql-yoga";
// import rls, { allow, Rules } from "./rls";

export interface Context  {
  user: User | null,
  prisma: PrismaClient;
}

// const rules: Rules<{ user: User | null }> = {
//   User: [
//     allow('read', ({ user }) => user !== null),
//     allow('update', ({ user }) => user && { id: user.id }),
//     allow('delete', ({ user }) => user && { id: user.id }),
//   ],
//   Foundry: [
//     allow('read', ({ user }) => user && { owner: { id: user.id } }),
//     allow('update', ({ user }) => user && { owner: { id: user.id } }),
//     allow('delete', ({ user }) => user && { owner: { id: user.id } }),
//   ]
// }

export const context: ((initialContext: YogaInitialContext) => Context | Promise<Context>) = async () => {
  const prisma = new PrismaClient()
  const user = await prisma.user.findFirst(); // TODO
  // const xprisma = prisma.$extends(rls(rules, { user }));
  const ctx: Context = {
    user,
    prisma //: xprisma
  }
  return ctx;
}

export default context;
