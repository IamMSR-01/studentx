import express from "express";
import upload from "../middleware/multer.middleware.js";
import {
  getAllUsers,
  getUser,
  getUserById,
  login,
  logout,
  signup,
} from "../controller/auth.controller.js";
import protect from "../middleware/auth.middleware.js";
import authenticateUser from "../middleware/authenticateUser.js";

const router = express.Router();

router.post("/signup", upload.single("avatar"), signup);
router.post("/login", login);
router.post("/logout", logout);
router.get("/:id", getUserById);
router.get("/", authenticateUser, getUser)
router.get("/all-user", protect, getAllUsers);

export default router;