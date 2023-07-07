"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionTypeNumberRef = void 0;
const builder_1 = __importDefault(require("../builder"));
const QuestionType_1 = require("./QuestionType");
exports.QuestionTypeNumberRef = builder_1.default.objectRef('QuestionTypeNumber');
exports.QuestionTypeNumberRef.implement({
    interfaces: [QuestionType_1.QuestionTypeRef],
    fields: (t) => ({
        min: t.exposeFloat('min', { nullable: true }),
        max: t.exposeFloat('max', { nullable: true }),
        step: t.exposeFloat('step', { nullable: true }),
    }),
});
