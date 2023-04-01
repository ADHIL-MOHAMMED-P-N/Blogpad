const asyncHandler = require("express-async-handler"); /* handling exceptions inside of async express routes and passing them to your express error handlers.No need to write try-catch for every async routes */

//Get blogs
//GET /api/goals
//Private
const getBlogs = asyncHandler(async (req, res) => {
  res.status(200).json({ Message: "Read blogs" });
});

//Set blogs
//POST /api/goals
//Private
const setBlogs = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }
  res.status(200).json({ Message: "Create Blogs" });
});

//Update blogs
//PUT /api/goals/:id
//Private
const updateBlogs = asyncHandler(async (req, res) => {
  res.status(200).json({ Message: `Update ${req.params.id} Blogs` });
});

//Delete blogs
//DELETE /api/goals/id
//Private
const deleteBlogs = asyncHandler(async (req, res) => {
  res.status(200).json({ Message: `Delete ${req.params.id} Blogs` });
});

module.exports = {
  getBlogs,
  setBlogs,
  updateBlogs,
  deleteBlogs,
};
