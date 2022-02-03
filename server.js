import cookieParser from "cookie-parser";
import express from "express";
import cors from "cors";
import { auth, my, challenge } from "./src/router/index.js";

const corsOption = {
  origin: "http://localhost:8080",
  optionsSuccessStatus: 200,
  credentials: true,
};

const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(cors(corsOption));

app.use("/api/auth", auth);
app.use("/api/my", my);
app.use("/api/challenge", challenge);

app.get("/api/tree/:treeId", (req, res) => {
  return res.status(200).json({
    treeName: "향나무",
  });
});

app.listen(8080, () => {
  console.log("server Open");
});
