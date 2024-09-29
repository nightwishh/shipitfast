const passport = require("passport");
const { hashSync, compareSync } = require("bcrypt");
const User = require("./database");
const tokens = require("./tokenManager");
const BearerStrategy = require('passport-http-bearer').Strategy;

module.exports = function (passport) {
  passport.use(new BearerStrategy(async (token, done) => {
    try {
        const user = await tokens.findOne({ token: token });

        if (!user) {
            return done(null, false, { message: "Incorrect token." });
        }

        return done(null, user, { scope: 'all' });
    } catch (err) {
        return done(err);
    }
}));

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });
  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
      done(err, user);
    });
  });
};
