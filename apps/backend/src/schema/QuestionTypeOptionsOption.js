"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionTypeOptionsOptionRef = void 0;
const builder_1 = __importDefault(require("../builder"));
exports.QuestionTypeOptionsOptionRef = builder_1.default.objectRef('QuestionTypeOptionsOption');
exports.QuestionTypeOptionsOptionRef.implement({
    fields: (t) => ({
        label: t.exposeString('label'),
        value: t.exposeString('value'),
    }),
});
