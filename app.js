const express = require("express");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const path = require("path");
const connectDB = require("./config/db");

connectDB();

port = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/blogs", require("./routes/blogRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

app.use(errorHandler); //down the routes

app.listen(port, () => console.log(`app listening to the port ${port}`));
