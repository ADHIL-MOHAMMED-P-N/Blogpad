const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/userModels");
const asyncHandler = require("express-async-handler");
const { use } = require("../routes/blogRoutes");
//Register user
//POST /api/users
//Public

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please fill all fields");
  }
  const userExist = await User.findOne({ email });
  if (userExist) {
    res.status(400);
    throw new Error("User already exist");
  }
  //hashing password
  const salt = await bcrypt.genSalt(10); //10 = rounds of hashing
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });
  if (user) {
    console.log(user);
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error("Invalid credential");
  }
});

//Login user
//POST /api/users/login
//Public
const loginUser = asyncHandler(async (req, res) => {
  res.json({
    message: "Login User",
  });
});

//Get user (individual self)
//GET /api/users/me
//Private
const getUser = asyncHandler(async (req, res) => {
  res.json({
    message: "User data display",
  });
});

module.exports = { registerUser, loginUser, getUser };
