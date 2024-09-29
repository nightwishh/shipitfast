const User = require("./database");
const { compareSync } = require("bcrypt");

const Authenticate = async function(username,password){
  const user = await User.findOne({email:username});

    if (!user) {
        return {status:-1, message:"Incorrect username"};
    }
    if (!compareSync(password, user.password)) {
        return {status:-2, message:"Incorrect password"};
    }
    return {status:0, message:"Successfull Authentication"};
}
module.exports = Authenticate;