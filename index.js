import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import router from "./route/userRoutes.js";

const live_url =
  "mongodb+srv://dev_chuks:Chuks08149009710@cluster0.zsqe3tc.mongodb.net/formDB?appName=Cluster0";
const local_url = "mongodb://localhost:27017/formDB";

mongoose
  .connect(live_url)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch(() => {
    console.error("Error connecting MongoDB");
  });

const app = express();
const Port = 3000;

app.use(express.json());
app.use(cors());
app.use("/api", router);

app.post("/submit", (req, res) => {
  console.log(req.body);

  res.status(200).json(req.body, {
    message: "Data submitted successfully",
  });
});

app.listen(Port, () => {
  console.log(`Server is up and running on port: ${Port}`);
});
