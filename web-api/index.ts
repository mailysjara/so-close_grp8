import express from "express";
import cors from "cors";
import gardensRoutes from "./routes/gardens";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/gardens", gardensRoutes);

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`API server listening on port ${PORT}`);
});
