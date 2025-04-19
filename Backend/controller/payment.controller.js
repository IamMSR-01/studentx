import Payment from "../models/payment.model.js";

// Create a new payment record
export const createPayment = async (req, res) => {
  try {
    const {
      receiver,
      amount,
      currency,
      method,
      status,
      relatedModel,
      relatedId,
      transactionId,
    } = req.body;

    const payment = new Payment({
      payer: req.user._id,
      receiver,
      amount,
      currency,
      method,
      status,
      relatedModel,
      relatedId,
      transactionId,
    });

    const savedPayment = await payment.save();
    res.status(201).json(savedPayment);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error creating payment", error: err.message });
  }
};

// Get all payments of the logged-in user (payer or receiver)
export const getUserPayments = async (req, res) => {
  try {
    const payments = await Payment.find({
      $or: [{ payer: req.user._id }, { receiver: req.user._id }],
    })
      .populate("payer", "name email")
      .populate("receiver", "name email");

    res.status(200).json(payments);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching payments", error: err.message });
  }
};

// Get a single payment by ID
export const getPaymentById = async (req, res) => {
  try {
    const payment = await Payment.findById(req.params.id)
      .populate("payer", "name email")
      .populate("receiver", "name email");

    if (!payment) return res.status(404).json({ message: "Payment not found" });

    if (
      payment.payer.toString() !== req.user._id.toString() &&
      payment.receiver.toString() !== req.user._id.toString()
    ) {
      return res
        .status(403)
        .json({ message: "Not authorized to view this payment" });
    }

    res.status(200).json(payment);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error retrieving payment", error: err.message });
  }
};

// Admin: Get all payments in the system
export const getAllPayments = async (req, res) => {
  try {
    const payments = await Payment.find({})
      .populate("payer", "name email")
      .populate("receiver", "name email");

    res.status(200).json(payments);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error retrieving payments", error: err.message });
  }
};