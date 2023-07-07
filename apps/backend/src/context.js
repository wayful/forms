"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.context = void 0;
const client_1 = require("@prisma/client");
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
const context = async () => {
    const prisma = new client_1.PrismaClient();
    const user = await prisma.user.findFirst(); // TODO
    // const xprisma = prisma.$extends(rls(rules, { user }));
    const ctx = {
        user,
        prisma //: xprisma
    };
    return ctx;
};
exports.context = context;
exports.default = exports.context;
