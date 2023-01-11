const {
  getMyOrdersServices,
  confirmOrderServices,
} = require("../services/booking.services");

exports.getMyOrders = async (req, res) => {
  try {
    const { email } = req.params.email;
    const myOrder = await getMyOrdersServices(email);

    res.status(200).json({
      status: "success",
      myOrder,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "can't find get MyOrders",
      error: error,
    });
  }
};

exports.confirmOrder = async (req, res) => {
  try {
    const order = await confirmOrderServices(req.body);

    res.status(200).json({
      status: "success",
      order,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "can't find get MyOrders",
      error: error,
    });
  }
};
exports.deleteOrder = async (req, res) => {
  try {
    const { id } = req.params.id;
    const order = await confirmOrderServices(id);

    res.status(200).json({
      status: "success",
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "can't delete Order",
      error: error,
    });
  }
};
