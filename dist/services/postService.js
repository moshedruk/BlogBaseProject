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
exports.AddCommentForPost = exports.UpdetePost = exports.GetPostById = exports.GetAllPost = exports.DeletePost = exports.CreateNewPost = void 0;
const CreateNewPost = (newPost) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, content, author } = newPost;
        const dbpost = new postModel({
            title,
            content,
            author
        });
        yield dbpost.save();
    }
    catch (err) {
        throw err;
    }
});
exports.CreateNewPost = CreateNewPost;
const DeletePost = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
    }
    catch (err) {
        throw err;
    }
});
exports.DeletePost = DeletePost;
const GetAllPost = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
    }
    catch (err) {
        throw err;
    }
});
exports.GetAllPost = GetAllPost;
const GetPostById = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
    }
    catch (err) {
        throw err;
    }
});
exports.GetPostById = GetPostById;
const UpdetePost = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
    }
    catch (err) {
        throw err;
    }
});
exports.UpdetePost = UpdetePost;
const AddCommentForPost = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
    }
    catch (err) {
        throw err;
    }
});
exports.AddCommentForPost = AddCommentForPost;
