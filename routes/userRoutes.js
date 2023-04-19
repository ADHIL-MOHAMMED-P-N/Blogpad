const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  getUser,
} = require("../controllers/userControllers");
const protect = require("../middleware/authMiddleware");
//Register
router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/me", protect, getUser);
//Login

//Get user

module.exports = router;
