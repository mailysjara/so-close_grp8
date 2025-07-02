"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const gardens_1 = __importDefault(require("./routes/gardens"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/api/gardens", gardens_1.default);
const PORT = 4000;
app.listen(PORT, () => {
    console.log(`API server listening on port ${PORT}`);
});
