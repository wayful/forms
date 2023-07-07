"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionTypeBooleanRef = void 0;
const builder_1 = __importDefault(require("../builder"));
const QuestionType_1 = require("./QuestionType");
exports.QuestionTypeBooleanRef = builder_1.default.objectRef('QuestionTypeBoolean');
exports.QuestionTypeBooleanRef.implement({
    interfaces: [QuestionType_1.QuestionTypeRef],
    fields: (t) => ({
        trueLabel: t.exposeString('trueLabel'),
        falseLabel: t.exposeString('falseLabel'),
    }),
});
