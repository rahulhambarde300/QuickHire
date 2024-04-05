/**
 * @Author Tijilkumar Parmar
 * Controller for all the interactions regarding the rating dialog.
 */
import Review from "../models/review.model.js";
import User from "../models/user.model.js";

// Controller function to add a review
const addReview = async (req, res) => {
  try {
    const { serviceID, rating, review, userId, createdAt } = req.body;
    console.log(rating);
    const newReview = new Review({
      serviceID,
      rating,
      review,
      userId,
      createdAt,
    });
    const savedReview = await newReview.save();
    res.status(201).json(savedReview);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controller function to fetch all reviews for a particular service ID
const getReviewsByServiceID = async (req, res) => {
  try {
    const { id } = req.params;
    const reviews = await Review.find({ serviceID: id }).lean();
    const newReviews = [];
    for (const feedback of reviews) {
      if (feedback.review) {
        const user = await User.find({ email: feedback.userId }).lean();
        feedback.user = user;
      }
      newReviews.push(feedback);
    }
    res.json(newReviews);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export { addReview, getReviewsByServiceID };
