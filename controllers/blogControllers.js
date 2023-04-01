const asyncHandler = require("express-async-handler"); /* handling exceptions inside of async express routes and passing them to your express error handlers.No need to write try-catch for every async routes */
const Blog = require("../models/blogModel");
//Get blogs
//GET /api/goals
//Private
const getBlogs = asyncHandler(async (req, res) => {
  const blogs = await Blog.find();
  res.status(200).json(blogs);
});

//Set blogs
//POST /api/goals
//Private
const setBlogs = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }

  const blog = await Blog.create({
    text: req.body.text,
  });

  res.status(200).json(blog);
});

//Update blogs
//PUT /api/goals/:id
//Private
const updateBlogs = asyncHandler(async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  if (!blog) {
    res.status(400);
    throw new Error("Blog not found");
  }
  const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updatedBlog);
});

//Delete blogs
//DELETE /api/goals/id
//Private
const deleteBlogs = asyncHandler(async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  if (!blog) {
    res.status(400);
    throw new Error("Blog not found");
  }
  await Blog.findByIdAndDelete(req.params.id);

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getBlogs,
  setBlogs,
  updateBlogs,
  deleteBlogs,
};
