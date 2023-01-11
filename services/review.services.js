const Review = require("../models/Reviews");

exports.getReviewsServices = async () => {
  const reviews = await Review.find({});
  return reviews;
};
exports.createReviewServices = async (data) => {
  const review = await Review.create(data);
  return review;
};
