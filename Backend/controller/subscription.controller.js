import Subscription from "../models/subscription.model.js";

// Create a subscription
export const createSubscription = async (req, res) => {
  try {
    const {
      planName,
      price,
      billingCycle,
      endDate,
      paymentMethod,
      transactionId,
    } = req.body;

    const subscription = new Subscription({
      user: req.user._id,
      planName,
      price,
      billingCycle,
      endDate,
      paymentMethod,
      transactionId,
    });

    await subscription.save();
    res.status(201).json(subscription);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all subscriptions
export const getAllSubscriptions = async (req, res) => {
  try {
    const subscriptions = await Subscription.find().populate(
      "user",
      "name email"
    );
    res.status(200).json(subscriptions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single subscription by ID
export const getSubscriptionById = async (req, res) => {
  try {
    const subscription = await Subscription.findById(req.params.id).populate(
      "user",
      "name email"
    );
    if (!subscription) {
      return res.status(404).json({ message: "Subscription not found" });
    }
    res.status(200).json(subscription);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a subscription (e.g. status, end date)
export const updateSubscription = async (req, res) => {
  try {
    const updates = req.body;
    const subscription = await Subscription.findByIdAndUpdate(
      req.params.id,
      updates,
      { new: true }
    );
    if (!subscription) {
      return res.status(404).json({ message: "Subscription not found" });
    }
    res.status(200).json(subscription);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Cancel (delete) a subscription
export const cancelSubscription = async (req, res) => {
  try {
    const subscription = await Subscription.findByIdAndDelete(req.params.id);
    if (!subscription) {
      return res.status(404).json({ message: "Subscription not found" });
    }
    res.status(200).json({ message: "Subscription cancelled successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};