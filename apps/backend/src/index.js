"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_yoga_1 = require("graphql-yoga");
const node_http_1 = require("node:http");
const schema_1 = __importDefault(require("./schema"));
const context_1 = __importDefault(require("./context"));
require("./seed");
// seed();
const yoga = (0, graphql_yoga_1.createYoga)({
    schema: schema_1.default,
    context: context_1.default
});
const server = (0, node_http_1.createServer)(yoga);
server.listen(4000, () => {
    console.info('Server is running on http://localhost:4000/graphql');
});
