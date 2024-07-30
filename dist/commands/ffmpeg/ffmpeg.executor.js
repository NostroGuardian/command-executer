"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FfmpegExecutor = void 0;
const command_executor_1 = require("../../core/executor/command.executor");
const file_service_1 = require("../../core/files/file.service");
const prompt_service_1 = require("../../core/prompt/prompt.service");
class FfmpegExecutor extends command_executor_1.CommandExecutor {
    constructor(logger) {
        super(logger);
        this.fileService = new file_service_1.FileService();
        this.promptService = new prompt_service_1.PromptService();
    }
    prompt() {
        return __awaiter(this, void 0, void 0, function* () {
            const width = yield this.promptService.input('Ширина', 'number');
            const height = yield this.promptService.input('Высота', 'number');
            const path = yield this.promptService.input('Путь до файла', 'input');
            const name = yield this.promptService.input('Имя', 'input');
            return { width, height, path, name };
        });
    }
    build(input) {
        throw new Error('Method not implemented.');
    }
    spawn(command) {
        throw new Error('Method not implemented.');
    }
    processStream(stream, logger) {
        throw new Error('Method not implemented.');
    }
}
exports.FfmpegExecutor = FfmpegExecutor;
