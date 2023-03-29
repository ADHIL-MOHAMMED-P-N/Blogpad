const express = require("express");
const dotenv = require("dotenv").config();
const path = require("path");

port = process.env.PORT || 5000;

const app = express();

app.use("/api/blogs", require("./routes/blogRoutes"));
app.listen(port, () => console.log(`app listening to the port ${port}`));
