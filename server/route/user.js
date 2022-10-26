const express = require("express");
const bodyparser = require("body-parser");
const router = express.Router();
const userController = require("../controller/userController");

router.use(bodyparser.urlencoded({ extended:false }));



router.get("/", async (req, resp) => {
  resp.send("user");
});
router.get("/list", userController.userList);
router.post("/add", userController.userAdd);

module.exports = router;
