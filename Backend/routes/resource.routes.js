import express from "express";
import {
  uploadResource,
  getAllResources,
  getResourceById,
  updateResource,
  deleteResource,
} from "../controller/resource.controller.js";
import protect from "../middleware/auth.middleware.js";

const router = express.Router();

// Public Routes
router.get("/", getAllResources);
router.get("/:id", getResourceById);

// Protected Routes
router.post("/", protect, uploadResource);
router.put("/:id", protect, updateResource);
router.delete("/:id", protect, deleteResource);

export default router;