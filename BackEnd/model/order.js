const { ObjectId } = require("bson");
const mongoose = require("mongoose");
const { Schema } = mongoose;

const orderSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  status: { type: String },
  items: { type: Array, default: [] },
  date: { type: Date, default: Date.now },
});

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
