import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../controller/auth.js";
import * as userRepository from "../model/auth.js";

const AUTH_ERROR = {
  timestamp: Date.now(),
  error: new Error("Authentication Error"),
  message: "Authentication Error",
};

export const isAuth = async (req, res, next) => {
  let token;

  const authHeader = req.get("Authorization");
  if (authHeader && authHeader.startsWith("Bearer ")) {
    token = authHeader.split(" ")[1];
  }

  if (!token) {
    token = req.cookies["token"];
  }

  if (!token) {
    return res.status(401).json(AUTH_ERROR);
  }

  jwt.verify(token, JWT_SECRET, async (error, decoded) => {
    if (error) {
      return res.status(401).json(AUTH_ERROR);
    }
    const user = await userRepository.findById(decoded.id);
    if (!user) {
      return res.status(401).json(AUTH_ERROR);
    }
    req.userId = user.userId;
    req.token = token;
    return next();
  });
};
