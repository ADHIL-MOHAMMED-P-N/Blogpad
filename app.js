const express = require("express");
const dotenv = require("dotenv").config();
const path = require("path");

port = process.env.PORT || 5000;
const app = express();
app.get("/api/blogs/", (req, res) => {
  res.send("Hello world");
});
app.listen(port, () => console.log(`app listening to the port ${port}`));
