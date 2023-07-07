"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionTypeOptionsRef = void 0;
const builder_1 = __importDefault(require("../builder"));
const QuestionType_1 = require("./QuestionType");
const QuestionTypeOptionsOption_1 = require("./QuestionTypeOptionsOption");
exports.QuestionTypeOptionsRef = builder_1.default.objectRef('QuestionTypeOptions');
exports.QuestionTypeOptionsRef.implement({
    interfaces: [QuestionType_1.QuestionTypeRef],
    fields: (t) => ({
        minOptions: t.exposeInt('minOptions', { nullable: true }),
        maxOptions: t.exposeInt('maxOptions', { nullable: true }),
        options: t.field({
            type: [QuestionTypeOptionsOption_1.QuestionTypeOptionsOptionRef],
            resolve: (questionTypeOptions) => {
                console.log(questionTypeOptions);
                return questionTypeOptions.options;
            },
        }),
    }),
});
