"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const router = express_1.default.Router();
const dataFile = path_1.default.join(__dirname, "../../data/gardens.json");
router.get("/", (req, res) => {
    const data = JSON.parse(fs_1.default.readFileSync(dataFile, "utf-8"));
    res.json(data);
});
router.post("/", (req, res) => {
    const data = JSON.parse(fs_1.default.readFileSync(dataFile, "utf-8"));
    const newGarden = req.body;
    newGarden.id = data.length + 1;
    data.push(newGarden);
    fs_1.default.writeFileSync(dataFile, JSON.stringify(data, null, 2));
    res.status(201).json(newGarden);
});
exports.default = router;
