const passport = require("passport"), LocalStrategy = require("passport-local").Strategy;
const { compareSync } = require("bcrypt");
const User =  require("./database");
passport.use(new LocalStrategy,(function(username,password,done) {
    User.findOne({email: username,password: password}, function(err,user) {
        if (err) {
            return done(err);
        }
        if (!user) {
            return done(null, false, { message: 'Incorrect username.' });
        }
        if (!compareSync(user.password, password)) {
            return done(null, false, { message: 'Incorrect password.' });
        }
        return done(null, user);
    });
}));
passport.serializeUser((user, done) => {
    done(null, user.id);
});
passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
        done(err, user);
    });
});