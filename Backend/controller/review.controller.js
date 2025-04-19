import Review from "../models/review.model.js";

// Create a new review
export const createReview = async (req, res) => {
  try {
    const { reviewee, relatedModel, relatedId, rating, comment } = req.body;

    const review = new Review({
      reviewer: req.user._id,
      reviewee,
      relatedModel,
      relatedId,
      rating,
      comment,
    });

    const savedReview = await review.save();
    res.status(201).json(savedReview);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all reviews
export const getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find()
      .populate("reviewer", "name")
      .populate("reviewee", "name");
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get reviews by relatedId and relatedModel (e.g. for a room or project)
export const getReviewsForItem = async (req, res) => {
  const { model, id } = req.params;
  try {
    const reviews = await Review.find({
      relatedModel: model,
      relatedId: id,
    })
      .populate("reviewer", "name email")
      .populate("reviewee", "name email");

    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete review (only by reviewer)
export const deleteReview = async (req, res) => {
  try {
    const review = await Review.findById(req.params.id);
    if (!review) return res.status(404).json({ message: "Review not found" });

    if (review.reviewer.toString() !== req.user._id.toString()) {
      return res
        .status(403)
        .json({ message: "Not authorized to delete this review" });
    }

    await review.deleteOne();
    res.status(200).json({ message: "Review deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};