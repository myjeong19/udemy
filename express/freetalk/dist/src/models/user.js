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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const userSchema = new mongoose_1.default.Schema({
    email: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
    posts: [
        {
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: 'Post',
        },
    ],
});
userSchema.pre('save', function (done) {
    return __awaiter(this, void 0, void 0, function* () { });
});
const User = mongoose_1.default.model('Post', userSchema) || mongoose_1.default.model('comment', userSchema);
exports.default = User;
