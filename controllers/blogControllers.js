//Get blogs
//GET /api/goals
//Private
const getBlogs = (req, res) => {
  res.status(200).json({ Message: "Read blogs" });
};

//Create blogs
//POST /api/goals
//Private
const setBlogs = (req, res) => {
  res.status(200).json({ Message: "Create Blogs" });
};

//Update blogs
//PUT /api/goals/:id
//Private
const updateBlogs = (req, res) => {
  res.status(200).json({ Message: `Update ${req.params.id} Blogs` });
};

//Delete blogs
//DELETE /api/goals/id
//Private
const deleteBlogs = (req, res) => {
  res.status(200).json({ Message: `Delete ${req.params.id} Blogs` });
};

module.exports = {
  getBlogs,
  setBlogs,
  updateBlogs,
  deleteBlogs,
};
