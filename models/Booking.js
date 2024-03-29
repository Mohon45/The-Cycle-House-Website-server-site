const mongoose = require("mongoose");
const validator = require("validator");

const bookingSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a first name"],
      minLength: [3, "Name must be at least 3 characters."],
      maxLength: [100, "Name is too large"],
    },
    price: {
      type: String,
      required: [true, "Please provide a Product Price"],
      minLength: [1, "price must be at least 1 characters."],
    },
    address: {
      type: String,
      required: [true, "Please provide a Product Description."],
    },
    date: {
      type: Date,
    },
    email: {
      type: String,
      validate: [validator.isEmail, "Provide a valid Email"],
      trim: true,
      lowercase: true,
      unique: true,
      required: [true, "Email address is required"],
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("bookings", bookingSchema);

module.exports = User;
