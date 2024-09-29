const express = require("express");
const mongoose = require("mongoose");
const User = require("./database");
const passport = require("passport");
const session = require("express-session");
const { hashSync } = require("bcrypt");
const MongoStore = require("connect-mongo");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const Authenticate = require("./user");
require("./passport")(passport);
const tokens = require("./tokenManager");
const app = express();
const port = process.env.PORT || 3000;
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
      mongoUrl: process.env.DATABASE_URL,
      colletionName: "tokens",
    }),
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());

app.get("/", passport.authenticate('bearer', { session: false }), (req, res) => {
  console.log("Session:", req.session);
  console.log("User:", req.user);
  console.log("Is Authenticated:", req.isAuthenticated());

  req.isAuthenticated() ? res.send("Hello world") : res.send("Try logging in");
});
app.post("/register", async (req, res) => {
  const user = new User({
    fullName: req.body.fullName,
    email: req.body.email,
    password: hashSync(req.body.password, 10),
  });
  await user.save();
  res.json(user);
});
app.post("/login", async (req, res, next) => {
  const auth = await Authenticate(req.body.email,req.body.password);
  if (auth.status == 0) {
    const tokenUser = new tokens({email:req.body.email, token:"&*some&&token12389e"});
    await tokenUser.save();
  } 
  res.json(auth.message);
});
app.post("/tokens",async (req,res,next) => {
  console.log(await tokens.findOne({token:req.body.token}));
});
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
