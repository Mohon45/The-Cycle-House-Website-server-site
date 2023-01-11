const express = require("express");
const bookingController = require("../../controllers/booking.controller");

const router = express.Router();

router.route("/myOrder/:email").get(bookingController.getMyOrders);
router.route("/confirmOrder").post(bookingController.confirmOrder);
router.route("/delteOrder/:id").post(bookingController.deleteOrder);

module.exports = router;
