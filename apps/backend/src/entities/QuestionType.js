"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionTypeBoolean = exports.QuestionTypeNumber = exports.QuestionType = void 0;
class QuestionType {
    id;
    name;
}
exports.QuestionType = QuestionType;
class QuestionTypeNumber extends QuestionType {
    min;
    max;
    step;
}
exports.QuestionTypeNumber = QuestionTypeNumber;
class QuestionTypeBoolean extends QuestionType {
    trueLabel;
    falseLabel;
}
exports.QuestionTypeBoolean = QuestionTypeBoolean;
