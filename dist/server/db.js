"use strict";
/*
    defining database
    prisma will come here
*/
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
exports.db = void 0;
// Imaginary database
const users = [];
exports.db = {
    user: {
        findMany: () => __awaiter(void 0, void 0, void 0, function* () { return users; }),
        findById: (id) => __awaiter(void 0, void 0, void 0, function* () { return users.find((user) => user.id === id); }),
        create: (data) => __awaiter(void 0, void 0, void 0, function* () {
            const user = Object.assign({ id: String(users.length + 1) }, data);
            users.push(user);
            return user;
        }),
    },
};
