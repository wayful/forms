"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionTypeRef = exports.QuestionTypeKindRef = void 0;
const client_1 = require("@prisma/client");
const builder_1 = __importDefault(require("../builder"));
exports.QuestionTypeKindRef = builder_1.default.enumType(client_1.QuestionTypeKind, {
    name: 'QuestionTypeKind',
});
exports.QuestionTypeRef = builder_1.default.interfaceRef('QuestionType');
exports.QuestionTypeRef.implement({
    resolveType(questionType, _context, _info) {
        switch (questionType.kind) {
            case client_1.QuestionTypeKind.Number:
                return 'QuestionTypeNumber';
            case client_1.QuestionTypeKind.String:
                return 'QuestionTypeString';
            case client_1.QuestionTypeKind.Boolean:
                return 'QuestionTypeBoolean';
            case client_1.QuestionTypeKind.Options:
                return 'QuestionTypeOptions';
        }
    },
    fields: (t) => ({
        id: t.exposeID('id'),
        name: t.exposeString('name'),
        kind: t.expose('kind', { type: exports.QuestionTypeKindRef }),
    }),
});
