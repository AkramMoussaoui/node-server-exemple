const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  nom: {
    type: String,
  },
  prenom: {
    type: String,
  },
  phone: {
    type: String,
  },
  email: {
    type: String,
  },
  is_active: {
    type: Boolean,
    default: true,
  },
});

const user = mongoose.model("User", userSchema);

module.exports = user;
