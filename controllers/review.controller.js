const {
  getReviewsServices,
  createReviewServices,
} = require("../services/review.services");

exports.getReviews = async (req, res) => {
  try {
    const reviews = await getReviewsServices();

    res.status(200).json({
      status: "success",
      reviews,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "can't find reviews",
      error: error,
    });
  }
};
exports.createReview = async (req, res) => {
  try {
    const review = await createReviewServices(req.body);

    res.status(200).json({
      status: "success",
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "can't add a review",
      error: error,
    });
  }
};
