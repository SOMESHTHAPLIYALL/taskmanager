const express = require("express");
const {
  loginController,
  regsiterController,
} = require("../controller/userController");

const router = express.Router();

//LOGIN
router.post("/login", loginController);

//REGISTER
router.post("/register", regsiterController);

module.exports = router;
