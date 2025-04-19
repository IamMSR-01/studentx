import express from "express";
import {
  createSubscription,
  getAllSubscriptions,
  getSubscriptionById,
  updateSubscription,
  cancelSubscription,
} from "../controller/subscription.controller.js";
import protect from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/", protect, createSubscription); // Create
router.get("/", protect, getAllSubscriptions); // All subs
router.get("/:id", protect, getSubscriptionById); // Single sub
router.put("/:id", protect, updateSubscription); // Update
router.delete("/:id", protect, cancelSubscription); // Cancel/Delete

export default router;