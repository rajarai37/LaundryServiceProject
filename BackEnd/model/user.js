const mongoose = require("mongoose");
const { schema } = mongoose;

const userSchema = new schema({
  name: { type: String, require: true },
  email: { type: String, unique: true, require: true },
  mobile: { type: Number, unique: true, require: true },
  state: { type: String, require: true },
  district: { type: String, require: true },
  address: { type: String, require: true },
  pincode: { type: Number, require: true },
  password: { type: String, require: true },
});

const User = mongoose.model("User", userSchema);
module.exports = User;