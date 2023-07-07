"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const core_1 = __importDefault(require("@pothos/core"));
const plugin_prisma_1 = __importDefault(require("@pothos/plugin-prisma"));
const plugin_prisma_utils_1 = __importDefault(require("@pothos/plugin-prisma-utils"));
const builder = new core_1.default({
    plugins: [plugin_prisma_1.default, plugin_prisma_utils_1.default],
    prisma: {
        dmmf: client_1.Prisma.dmmf,
        client: context => context.prisma,
        filterConnectionTotalCount: true,
    }
});
exports.default = builder;
