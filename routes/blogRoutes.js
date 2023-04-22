const express = require("express");
const router = express.Router();
const {
  getBlogs,
  setBlogs,
  updateBlogs,
  deleteBlogs,
  getSampleBlogs,
  feedBlogs,
} = require("../controllers/blogControllers");
const protect = require("../middleware/authMiddleware");

router.get("/feed", protect, feedBlogs);
router.get("/sample", getSampleBlogs);
router.route("/").get(protect, getBlogs).post(protect, setBlogs);
router.route("/:id").put(protect, updateBlogs).delete(protect, deleteBlogs);

/* router.get("/", getBlogs);
router.post("/", setBlogs); */
/* router.put("/:id", updateBlogs);
router.delete("/:id", deleteBlogs); */

module.exports = router;
