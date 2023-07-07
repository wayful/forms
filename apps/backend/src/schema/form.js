"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const builder_1 = __importDefault(require("../builder"));
builder_1.default.prismaObject('Form', {
    fields: (t) => ({
        id: t.exposeID('id'),
        name: t.exposeString('name'),
        // owner: t.relation('owner'),
        questions: t.relation('questions'),
    }),
});
builder_1.default.queryFields((t) => ({
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
