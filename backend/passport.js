const passport = require("passport"),
  LocalStrategy = require("passport-local").Strategy;
const { hashSync, compareSync } = require("bcrypt");
const User = require("./database");
module.exports = function (passport) {
  passport.use(
    new LocalStrategy(async function (username, password, done) {
      var user;
      try {
        user = await User.findOne({ email: username });
      } catch (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false, { message: "Incorrect username." });
      }
      if (!compareSync(password, user.password)) {
        return done(null, false, { message: "Incorrect password." });
      }
      return done(null, user);
    })
  );
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });
  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
      done(err, user);
    });
  });
};
