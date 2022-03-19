const { ObjectId } = require("bson");
const mongoose = require("mongoose");
const { schema } = mongoose;

const operationSchema = new Schema({
  operation: { type: String, require: true }, //Washing, iron, folding, chemical wash
});

const itemsSchema = new schema({
  cloth: { type: string }, //Shirt, T-shirt, jeans, jogger,boxer,others, etc....
  quantity: { type: number },
  operation: { type: [operationSchema] },
  price: { type: Number },
});

const orderSchema = new schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  item: { type: [itemsSchema] },
});

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;