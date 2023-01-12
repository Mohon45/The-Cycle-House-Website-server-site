const mongoose = require("mongoose");
const validator = require("validator");

const reviewSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a first name"],
      trim: true,
      minLength: [3, "Name must be at least 3 characters."],
      maxLength: [100, "Name is too large"],
    },
    image: {
      type: String,
      validate: [validator.isURL, "Please provide a valid url"],
    },
    rating: {
      type: String,
      required: [true, "Please provide a Product Price"],
      minLength: [1, "Rating must be at least 1."],
      maxLength: [5, "Rating must be too 5."],
    },
    description: {
      type: String,
      required: [true, "Please provide a Product Description."],
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("reviews", reviewSchema);

module.exports = User;
