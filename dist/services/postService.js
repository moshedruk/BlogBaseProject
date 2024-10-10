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
const CreateNewPost = () => __awaiter(void 0, void 0, void 0, function* () { });
exports.CreateNewPost = CreateNewPost;
const DeletePost = () => __awaiter(void 0, void 0, void 0, function* () { });
exports.DeletePost = DeletePost;
const GetAllPost = () => __awaiter(void 0, void 0, void 0, function* () { });
exports.GetAllPost = GetAllPost;
const GetPostById = () => __awaiter(void 0, void 0, void 0, function* () { });
exports.GetPostById = GetPostById;
const UpdetePost = () => __awaiter(void 0, void 0, void 0, function* () { });
exports.UpdetePost = UpdetePost;
const AddCommentForPost = () => __awaiter(void 0, void 0, void 0, function* () { });
exports.AddCommentForPost = AddCommentForPost;
