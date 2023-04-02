const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  getUser,
} = require("../controllers/userControllers");
//Register
router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/me", getUser);
//Login

//Get user

module.exports = router;
