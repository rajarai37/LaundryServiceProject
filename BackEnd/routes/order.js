const bodyParser = require("body-parser");
const express = require("express");
const jwt = require("jsonwebtoken");
const Order = require("../model/orders");
const router = express.Router();
const bcrypt = require("bcrypt");
SECRET = "RESTAPI";

//============================Create Order API=====================================

router.post("/create", async (req, res) => {
  try {
    const situation = ["In Washing", "Ready To Pickup", "ready to deliver"];
    const state = Math.floor(Math.random() * situation.length);

    const order = await Order.create({
      user: req.user,
      items: req.body,
      status: situation[state],
    });
    // console.log(req.body);
    return res.json({
      status: "Success",
      message: "Order Place Successfully",
      order,
    });
  } catch (e) {
    return res.status(500).json({
      status: "failed",
      message: e.message,
    });
  }
});

module.exports = router;
