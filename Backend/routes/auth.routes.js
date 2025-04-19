import express from "express";
import upload from "../middleware/multer.middlewre.js";
import {
  getAllUsers,
  getUserById,
  login,
  logout,
  signup,
} from "../controller/auth.controller.js";
import protect from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/signup", upload.single("avatar"), signup);
router.post("/login", login);
router.post("/logout", logout);
router.get("/:id", protect, getUserById);
router.get("/", protect, getAllUsers);

export default router;