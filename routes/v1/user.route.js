const express = require("express");
const userController = require("../../controllers/user.controller");

const router = express.Router();

router
  .route("/users")
  .post(userController.createUser)
  .put(userController.updateUser);

router.route("/users/:email").get(userController.getUser);

module.exports = router;
