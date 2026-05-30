import path from "path";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import router from "./route/userRoutes.js";
import dotenv from "dotenv";
dotenv.config();

mongoose
  .connect(process.env.LIVE_URL)
  .then(() => console.log("MongoDB connected"))
  .catch(() => console.error("Error connecting MongoDB"));

const app = express();
const _dirname = path.resolve();
const Port = process.env.PORT;

app.use(express.json());
app.use(express.static(path.join(__dirname, "client")));
app.use(cors());
app.use("/api", router);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "index.html"));
});

app.post("/submit", (req, res) => {
  console.log(req.body);

  res.status(200).json({
    message: "Data submitted successfully",
    data: req.body,
  });
});

app.listen(Port, () => {
  console.log(`Server is up and running on http://localhost:${Port}`);
});
