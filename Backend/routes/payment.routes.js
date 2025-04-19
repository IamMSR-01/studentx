import express from "express";
import {
  createPayment,
  getUserPayments,
  getPaymentById,
  getAllPayments,
} from "../controller/payment.controller.js";
import protect from "../middleware/auth.middleware.js";

const router = express.Router();

// Protected routes
router.post("/", protect, createPayment); // Create a payment
router.get("/my", protect, getUserPayments); // Get current user's payments
router.get("/:id", protect, getPaymentById); // Get a specific payment

// Admin route (optional - add middleware if needed)
router.get("/", protect, getAllPayments); // Get all payments (admin only)

export default router;