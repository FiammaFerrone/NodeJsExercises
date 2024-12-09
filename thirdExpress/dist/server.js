"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.get("/", (request, response) => {
    response.status(200).send("server is started");
});
app.listen(3000, () => {
    console.log("server listen at http://localhost:3000");
});
//# sourceMappingURL=server.js.map