"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringFilter = exports.IDFilter = void 0;
const builder_1 = __importDefault(require("../builder"));
exports.IDFilter = builder_1.default.prismaFilter('ID', {
    ops: ['equals', 'not'],
});
exports.StringFilter = builder_1.default.prismaFilter('String', {
    ops: ['contains', 'equals', 'startsWith', 'not'],
});
