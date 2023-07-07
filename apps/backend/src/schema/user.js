"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserOrderBy = exports.UserFilter = exports.User = void 0;
const builder_1 = __importDefault(require("../builder"));
const filters_1 = require("./filters");
// import { FoundryFilter, FoundryOrderBy } from "./foundry";
exports.User = builder_1.default.prismaObject('User', {
    fields: (t) => ({
        id: t.exposeID('id'),
        name: t.exposeString('name'),
        email: t.exposeString('email'),
        // foundries: t.relation('forms', {
        //   args: {
        //     where: t.arg({ type: FoundryFilter }),
        //     orderBy: t.arg({ type: FoundryOrderBy }),
        //   },
        //   query: ({ where, orderBy }, _context) => ({
        //     where: where || {},
        //     orderBy: orderBy || {}
        //   }),
        // }),
    }),
});
exports.UserFilter = builder_1.default.prismaWhere('User', {
    fields: {
        id: filters_1.IDFilter,
        name: filters_1.StringFilter,
        email: filters_1.StringFilter,
        // foundries: FoundryListFilter,
    },
});
exports.UserOrderBy = builder_1.default.prismaOrderBy('User', {
    fields: {
        id: true,
        name: true,
        email: true,
    }
});
builder_1.default.queryFields((t) => ({
    user: t.prismaField({
        type: 'User',
        args: {
            where: t.arg({ type: exports.UserFilter }),
        },
        resolve: (query, _root, { where }, ctx) => ctx.prisma.user.findFirstOrThrow({
            ...query,
            ...where ? { where } : {},
        }),
    }),
    users: t.prismaField({
        type: ['User'],
        args: {
            take: t.arg.int(),
            skip: t.arg.int(),
            where: t.arg({ type: exports.UserFilter }),
            orderBy: t.arg({ type: exports.UserOrderBy }),
        },
        resolve: async (query, _root, { take, skip, where, orderBy }, ctx) => ctx.prisma.user.findMany({
            ...query,
            ...take ? { take } : {},
            ...skip ? { skip } : {},
            ...where ? { where } : {},
            ...orderBy ? { orderBy } : {},
        }),
    }),
}));
