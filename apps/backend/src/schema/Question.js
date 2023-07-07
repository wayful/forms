"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionRef = void 0;
const client_1 = require("@prisma/client");
const builder_1 = __importDefault(require("../builder"));
const QuestionType_1 = require("./QuestionType");
exports.QuestionRef = builder_1.default.prismaObject('Question', {
    fields: (t) => ({
        id: t.exposeID('id'),
        text: t.exposeString('text'),
        required: t.exposeBoolean('required'),
        type: t.field({
            select: {
                type: {
                    include: {
                        number: true,
                        string: true,
                        boolean: true,
                        options: {
                            include: {
                                options: true
                            }
                        },
                    },
                },
            },
            type: QuestionType_1.QuestionTypeRef,
            resolve: ({ type }) => {
                switch (type.kind) {
                    case client_1.QuestionTypeKind.Number:
                        return {
                            ...type,
                            ...type.number,
                        };
                    case client_1.QuestionTypeKind.String:
                        return {
                            ...type,
                            ...type.string,
                        };
                    case client_1.QuestionTypeKind.Boolean:
                        return {
                            ...type,
                            ...type.boolean,
                        };
                    case client_1.QuestionTypeKind.Options:
                        return {
                            ...type,
                            ...type.options,
                        };
                }
            }
        }),
    }),
});
