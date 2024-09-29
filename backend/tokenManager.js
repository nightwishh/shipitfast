const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB", err));

const tokenSchema = new mongoose.Schema({
  email: String,
  token: String,
});
const tokens =  mongoose.model("tokens", tokenSchema);
module.exports = tokens;