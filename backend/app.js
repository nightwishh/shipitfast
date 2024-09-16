const express = require("express");
const mongoose = require("mongoose");
const User = require("./database");
const passport = require("passport");
const session = require("express-session");
const { hashSync } = require("bcrypt");
const MongoStore = require("connect-mongo");
const cors = require("cors");
const jwt = require("jsonwebtoken");

require("./passport")(passport);

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
      colletionName: "sessions",
    }),
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());

app.get("/", (req, res) => {
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
app.get("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
    if (!user) {
      return res.status(401).json({ message: "Authentication failed" });
    }
    req.logIn(user, (err) => {
      if (err) {
        return res.status(500).json({ message: "Internal Server Error" });
      }
      console.log("User authenticated:", req.isAuthenticated());

      return res
        .status(200)
        .json({ message: "Authentication successful", user: user });
    });
  })(req, res, next);
});
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
