const express = require("express");
const mongoose = require("mongoose");
const User = require("./database");
const passport = require('passport')
const session = require('express-session')
const {hashSync} = require('bcrypt');
const MongoStore = require('connect-mongo');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;
app.use(cors({
  origin: 'http://localhost:4200',
  credentials: true
}));
app.use(session({
  secret: "secret",
  resave: false ,
  saveUninitialized: true ,
  store: MongoStore.create({mongoUrl: process.env.DATABASE_URL,colletionName:"sessions"}),
  cookie:{
    secure: true,
    sameSite: 'none'
  }
}));
app.use(passport.initialize()) 
app.use(passport.session());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.post("/register", async (req, res) => {
  const user = new User({
    fullName: req.body.fullName,
    email: req.body.email,
    password: hashSync(req.body.password,10),
  });
  // await user.save();
  res.json(user);
});
app.post("/login", passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login'
}));
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
