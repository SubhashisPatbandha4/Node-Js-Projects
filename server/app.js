const express = require("express");
const app = express();
app.use(express.json())
const path = require("path");
require("dotenv").config({
  path: path.join(__dirname, ".env"),
});
const router = require("./route/user");

const PORT = process.env.PORT;
app.use("/user", router);

app.listen(PORT, () => console.log(`Running at port ${PORT}`));
