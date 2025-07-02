import express from "express";
import path from "path";
import fs from "fs";

const router = express.Router();

const dataFile = path.join(__dirname, "../../data/gardens.json");

router.get("/", (req, res) => {
    const data = JSON.parse(fs.readFileSync(dataFile, "utf-8"));
    res.json(data);
});

router.post("/", (req, res) => {
    const data = JSON.parse(fs.readFileSync(dataFile, "utf-8"));
    const newGarden = req.body;
    newGarden.id = data.length + 1;
    data.push(newGarden);
    fs.writeFileSync(dataFile, JSON.stringify(data, null, 2));
    res.status(201).json(newGarden);
});

export default router;