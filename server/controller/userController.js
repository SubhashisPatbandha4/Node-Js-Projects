const user = require("../models/User");
const userModel = require("../models/User");

const userList = async (req, resp) => {
  try {
    const users = await userModel.find({});
    console.log("read successful");
    resp.status(200).json(users);
  } catch (error) {
    console.log(error);
    resp.status(500).json(error);
  }
};
const userAdd = async (req, resp) => {
  try {
    const { name, email, phone, password } = req.body;
    const newUser = new userModel({ name, email, phone, password });
    await newUser.save();
    resp.status(201).json({ message: "data added" });
  } catch (error) {
    console.log(error);
    resp.status(500).json(error);
  }
};

module.exports = {
  userList,
  userAdd,
};
