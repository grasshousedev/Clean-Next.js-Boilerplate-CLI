"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeESLintRC = void 0;
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const constants_1 = require("../utils/constants");
const writeESLintRC = async (basePath) => {
    fs_1.default.writeFileSync(path_1.default.join(__dirname, basePath, "/.eslintrc.json"), constants_1.ESLINT_RC);
};
exports.writeESLintRC = writeESLintRC;
