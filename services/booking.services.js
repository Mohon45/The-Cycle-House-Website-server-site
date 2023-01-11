const Booking = require("../models/Booking");

exports.getMyOrdersServices = async (email) => {
  const myOrder = await Booking.find({ email });
  return myOrder;
};

exports.confirmOrderServices = async (data) => {
  const order = await Booking.create(data);
  return order;
};

exports.deleteOrderServices = async (id) => {
  const order = await Booking.deleteOne({ _id: id });
  return order;
};
