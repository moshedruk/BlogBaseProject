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
exports.GetUserById = exports.GetAllUser = exports.CreateNewuser = void 0;
const CreateNewuser = (newUser) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, email, profile } = newUser;
        const dbUser = new userModel({
            username,
            email,
            profile
        });
        yield dbUser.save();
    }
    catch (err) {
        console.error(err);
        throw err;
    }
});
exports.CreateNewuser = CreateNewuser;
const GetAllUser = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield userModel.find({});
        return users;
    }
    catch (err) {
        console.error(err);
        throw err;
    }
});
exports.GetAllUser = GetAllUser;
const GetUserById = (myuser) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield userModel.findOne({ _id: myuser.id });
    }
    catch (err) {
        console.error(err);
        throw err;
    }
});
exports.GetUserById = GetUserById;
