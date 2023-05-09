const {
    Login,
    refreshAccess,
    logout,
  } = require("../controllers/authCtrl")
  
  const authRouter = require("express").Router()
 
  authRouter
    .post("/login", Login)
    .post("/jeton", refreshAccess)
    .delete("/jeton", logout)
  
  module.exports = authRouter