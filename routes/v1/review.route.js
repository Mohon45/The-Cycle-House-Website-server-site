const express = require("express");
const reviewController = require("../../controllers/review.controller");

const router = express.Router();

router.route("/reviews").get(reviewController.getReviews);
router.route("/review").post(reviewController.createReview);

module.exports = router;
