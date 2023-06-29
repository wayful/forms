import builder from "../builder";
import { IDFilter, StringFilter } from "./filters";
// import { FoundryFilter, FoundryOrderBy } from "./foundry";

export const User = builder.prismaObject('User', {
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

export const UserFilter = builder.prismaWhere('User', {
  fields: {
    id: IDFilter,
    name: StringFilter,
    email: StringFilter,
    // foundries: FoundryListFilter,
  },
});

export const UserOrderBy = builder.prismaOrderBy('User', {
  fields: {
    id: true,
    name: true,
    email: true,
  }
});

builder.queryFields((t) => ({
  user: t.prismaField({
    type: 'User',
    args: {
      where: t.arg({ type: UserFilter }),
    },
    resolve: (query, _root, { where }, ctx) =>
      ctx.prisma.user.findFirstOrThrow({
        ...query,
        ...where ? { where } : {},
      }),
  }),
  users: t.prismaField({
    type: ['User'],
    args: {
      take: t.arg.int(),
      skip: t.arg.int(),
      where: t.arg({ type: UserFilter }),
      orderBy: t.arg({ type: UserOrderBy }),
    },
    resolve: async (query, _root, { take, skip, where, orderBy }, ctx) =>
      ctx.prisma.user.findMany({
        ...query,
        ...take ? { take } : {},
        ...skip ? { skip } : {},
        ...where ? { where } : {},
        ...orderBy ? { orderBy } : {},
      }),
  }),
}));
