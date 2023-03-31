const express = require("express");
const router = express.Router();
const {
  getBlogs,
  setBlogs,
  updateBlogs,
  deleteBlogs,
} = require("../controllers/blogControllers");

router.route("/").get(getBlogs).post(setBlogs);
router.route("/:id").put(updateBlogs).delete(deleteBlogs);

/* router.get("/", getBlogs);
router.post("/", setBlogs); */
/* router.put("/:id", updateBlogs);
router.delete("/:id", deleteBlogs); */

module.exports = router;
