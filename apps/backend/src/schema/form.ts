import builder from "../builder";

builder.prismaObject('Form', {
  fields: (t) => ({
    id: t.exposeID('id'),
    name: t.exposeString('name'),
    // owner: t.relation('owner'),
    questions: t.relation('questions'),
  }),
});

builder.queryFields((t) => ({
  // form: t.field({
  //   type: Form,
  //   resolve: (_root, _args, ctx) => ctx.prisma.form.findMany()
  // }),
  forms: t.prismaField({
    type: ['Form'],
    resolve: async (query, _root, _args, ctx) => ctx.prisma.form.findMany({
      ...query,
    })
  }),
}));
