authUser = (user, password, done) => {
//Search the user, password in the DB to authenticate the user
//Let's assume that a search within your DB returned the username and password match for "Kyle".
   let authenticated_user = { id: 123, name: "Kyle"}
   return done (null, authenticated_user )
}
exports.authUser = authUser;