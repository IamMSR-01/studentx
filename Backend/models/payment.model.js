import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
  payer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  receiver: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // e.g., mentor, landlord, freelancer
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  currency: {
    type: String,
    default: "USD",
  },
  method: {
    type: String,
    enum: ["card", "upi", "paypal", "stripe", "bank"],
    required: true,
  },
  status: {
    type: String,
    enum: ["pending", "completed", "failed", "refunded"],
    default: "pending",
  },
  relatedModel: {
    type: String,
    enum: ["MentorshipBooking", "FreelanceProject", "Room"], 
    required: true,
  },
  relatedId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  transactionId: {
    type: String, // from payment gateway (e.g. Stripe, Razorpay, etc.)
  },
  paidAt: {
    type: Date,
    default: Date.now,
  },
});

const Payment = mongoose.model("Payment", paymentSchema);

export default Payment;