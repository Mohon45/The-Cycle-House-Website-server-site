const {
  createUserServices,
  updateUserServices,
  getUserServices,
} = require("../services/user.services");

exports.createUser = async (req, res) => {
  try {
    console.log("Done");
    const user = await createUserServices(req.body);

    res.status(200).json({
      status: "success",
      message: "Successfully User Created",
      user,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "can't userd created",
      error: error,
    });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const user = await updateUserServices(req.body);

    res.status(200).json({
      status: "success",
      message: "Successfully User Updated",
      user,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "can't userd updated",
      error: error,
    });
  }
};
exports.getUser = async (req, res) => {
  try {
    const email = req.params.email;
    const user = await getUserServices(email);

    res.status(200).json({
      status: "success",
      user,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "can't find user",
      error: error,
    });
  }
};
