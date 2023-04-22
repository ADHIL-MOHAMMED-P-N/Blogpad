const asyncHandler = require("express-async-handler"); /* handling exceptions inside of async express routes and passing them to your express error handlers.No need to write try-catch for every async routes */
const Blog = require("../models/blogModel");
const User = require("../models/userModels");

//Get blogsn on feeds
//GET /api/goals/feeds
//Private(authenticated) -
const feedBlogs = asyncHandler(async (req, res) => {
  const feedBlogs = await Blog.find();
  res.status(200).json(feedBlogs);
});

//Get blogs
//GET /api/goals
//Private
const getBlogs = asyncHandler(async (req, res) => {
  const blogs = await Blog.find({ user: req.user.id });
  res.status(200).json(blogs);
});

//Set blogs
//POST /api/goals
//Private
const setBlogs = asyncHandler(async (req, res) => {
  if (!req.body.title || !req.body.content) {
    res.status(400);
    throw new Error("Please add title and content");
  }

  const blog = await Blog.create({
    title: req.body.title,
    content: req.body.content,
    user: req.user.id,
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

  //makesure loged in user is blog user
  const user = await User.findById(req.user.id);
  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }
  if (blog.user.toString() !== user.id) {
    res.status(401);
    throw new Error("user no autherized");
  }

  const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updatedBlog);
});

//Delete blogs
//DELETE /api/blogs/id
//Private
const deleteBlogs = asyncHandler(async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  if (!blog) {
    res.status(400);
    throw new Error("Blog not found");
  }
  //makesure loged in user is blog user
  const user = await User.findById(req.user.id);
  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }
  if (blog.user.toString() !== user.id) {
    res.status(401);
    throw new Error("user no autherized");
  }

  await Blog.findByIdAndDelete(req.params.id);
  res.status(200).json({ id: req.params.id, message: "Blog deleted" });
});

/* get sample blogs - before login -latest 10 items */
//get sampleblogs
//GET /api/blogs/sample
//Public
const getSampleBlogs = asyncHandler(async (req, res) => {
  const sampleBlogs = await Blog.find().sort({ createdAt: -1 }).limit(10);
  if (sampleBlogs.length === 0) {
    res.status(400);
    throw new Error("No blog posts,register and add blogs");
  }
  res.status(200);
  res.json(sampleBlogs);
});
module.exports = {
  feedBlogs,
  getBlogs,
  setBlogs,
  updateBlogs,
  deleteBlogs,
  getSampleBlogs,
};
