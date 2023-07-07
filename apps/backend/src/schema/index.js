"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = exports.Query = void 0;
const builder_1 = __importDefault(require("../builder"));
exports.Query = builder_1.default.queryType({});
// export * from './user'
__exportStar(require("./form"), exports);
__exportStar(require("./Question"), exports);
__exportStar(require("./QuestionType"), exports);
__exportStar(require("./QuestionTypeNumber"), exports);
__exportStar(require("./QuestionTypeString"), exports);
__exportStar(require("./QuestionTypeBoolean"), exports);
__exportStar(require("./QuestionTypeOptions"), exports);
__exportStar(require("./QuestionTypeOptionsOption"), exports);
exports.schema = builder_1.default.toSchema();
exports.default = exports.schema;
