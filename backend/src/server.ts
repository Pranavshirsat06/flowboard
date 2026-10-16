import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = Number(process.env.PORT) || 5000;

app.use(cors());
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({
    status: "ok",
    message: "FlowBoard API is running",
  });
});

app.listen(PORT, () => {
  console.log(`FlowBoard API running on http://localhost:${PORT}`);
});
