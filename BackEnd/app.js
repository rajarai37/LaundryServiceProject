const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
var cors = require("cors");

const DB =
  "mongodb+srv://rajarai37:rajarai@cluster0.5zls8.mongodb.net/project?retryWrites=true&w=majority";
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => console.log(err));
SECRET = "RESTAPI";
const loginRoutes = require("./routes/login");

const app = express(); // create a new express application
app.use(cors());

app.use("/posts", (req, res, next) => {
  var token = req.headers.authorization.split("Bearer ")[1];
  if (!token) {
    return res.status(401).json({
      status: "failed",
      message: "token is missing",
    });
  }
  jwt.verify(token, SECRET, function (err, decoded) {
    if (err) {
      return res.status(401).json({
        status: "failed",
        message: "invalid token",
      });
    } else {
      req.user = decoded.data;
      next();
    }
  });
});
app.use("/", loginRoutes);

app.listen(5000, () => console.log("server started"));
