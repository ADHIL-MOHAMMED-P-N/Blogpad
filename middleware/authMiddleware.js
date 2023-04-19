const jwt = require("jsonwebtoken");
const asynchHandler = require("express-async-handler");
const User = require("../models/userModels");

const protect = asynchHandler(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.id).select("-password");
      next();
    } catch (err) {
      console.log(err);
      res.status(401);
      throw new Error("Not autherized");
    }
  }
  if (!token) {
    res.status(401);
    throw new Error("no token, not autherized");
  }
});

module.exports = protect;
