//Register user
//POST /api/users
//Public

const registerUser = (req, res) => {
  res.json({
    message: "Register User",
  });
};

//Login user
//POST /api/users/login
//Public
const loginUser = (req, res) => {
  res.json({
    message: "Login User",
  });
};

//Get user (individual self)
//GET /api/users/me
//Private
const getUser = (req, res) => {
  res.json({
    message: "User data display",
  });
};

module.exports = { registerUser, loginUser, getUser };
