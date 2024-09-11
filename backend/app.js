const express = require("express");
const mongoose = require("mongoose");
const User = require("./user");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB", err));

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.post("/register", async (req, res) => {
  const user = new User({
    fullName: req.body.fullName,
    email: req.body.email,
    password: req.body.password,
  });
  await user.save();
  res.json(user);
});
app.post("/login", async (req, res) => {
  const userValid = await User.findOne({
    email: req.body.email,
    password: req.body.password,
  });
  if (userValid) {
    res.json("Access granted");
  } else {
    res.json({ message: "Incorrect email or password" });
  }
});
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
