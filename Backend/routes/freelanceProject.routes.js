import express from "express";
import {
  createFreelanceProject,
  getAllFreelanceProjects,
  getFreelanceProjectById,
  updateFreelanceProject,
  deleteFreelanceProject,
  submitProposal,
} from "../controller/freelanceProject.controller.js";
import protect from "../middleware/auth.middleware.js";

const router = express.Router();

// Route to create a new freelance project (requires authentication)
router.post("/", protect, createFreelanceProject);

// Route to get all freelance projects (public or authenticated, based on your needs)
router.get("/", getAllFreelanceProjects);

// Route to get a specific freelance project by ID (public or authenticated)
router.get("/:id", getFreelanceProjectById);

// Route to update a freelance project (requires authentication)
router.put("/:id", protect, updateFreelanceProject);

// Route to delete a freelance project (requires authentication)
router.delete("/:id", protect, deleteFreelanceProject);

// Route to submit a proposal for a freelance project (requires authentication)
router.post("/:id/proposal", protect, submitProposal);

export default router;