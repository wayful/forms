"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionTypeStringRef = void 0;
const builder_1 = __importDefault(require("../builder"));
const QuestionType_1 = require("./QuestionType");
exports.QuestionTypeStringRef = builder_1.default.objectRef('QuestionTypeString');
exports.QuestionTypeStringRef.implement({
    interfaces: [QuestionType_1.QuestionTypeRef],
    fields: (t) => ({
        minLength: t.exposeInt('minLength', { nullable: true }),
        maxLength: t.exposeInt('maxLength', { nullable: true }),
    }),
});
