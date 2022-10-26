const mongoose = require("mongoose");
require("../db/connection");

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: {
      type: String,
      unique: true,
    },
    phone: {
      type: String,
      unique: true,
    },
    password: String,
  },
  {
    timestamps: true,
  }
);

const user = new mongoose.model("user", userSchema);

module.exports = user;
