const User = require("../models/User");

exports.createUserServices = async (userInfo) => {
  const user = await User.create(userInfo);
  return user;
};

exports.updateUserServices = async (userInfo) => {
  const filter = { email: userInfo.email };
  const options = { upsert: true };
  const updateDoc = { $set: user };

  const user = await User.updateOne(filter, updateDoc, options);
  return user;
};

exports.getUserServices = async (email) => {
  const query = { email: email };
  const user = await User.findOne(query);
  // let isAdmin = false;
  // if (user?.role === "admin") {
  //   isAdmin = true;
  // }
  // const result = { admin: isAdmin };
  return user;
};
