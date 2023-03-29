const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({ Message: "Read Blogs" });
});
router.post("/", (req, res) => {
  res.status(200).json({ Message: "Create Blogs" });
});
router.put("/:id", (req, res) => {
  res.status(200).json({ Message: `Update ${req.params.id} Blogs` });
});
router.delete("/:id", (req, res) => {
  res.status(200).json({ Message: `Delete ${req.params.id} Blogs` });
});

module.exports = router;
