import express from "express";
import {
  createJob,
  getAllJobs,
  getJobById,
  updateJob,
  deleteJob,
  applyToJob,
} from "../controller/job.controller.js";
import { protect } from "../middleware/auth.middleware.js";

const router = express.Router();

// CRUD routes
router.post("/", protect, createJob); // Create job
router.get("/", getAllJobs); // List all jobs
router.get("/:id", getJobById); // View single job
router.put("/:id", protect, updateJob); // Update job
router.delete("/:id", protect, deleteJob); // Delete job

// Apply
router.post("/:id/apply", protect, applyToJob); // Apply to job

export default router;