let express = require("express");
let userRouter = express.Router();
let {
  loginController,
  registerControllers,
  displayLoginPage

} = require("../controller/userController.js")

//for logging in

userRouter.post("/login", loginController)

//for registration

userRouter.post("/register", registerControllers)
// for displaying the login and registration pages
userRouter.get("/login", displayLoginPage);

module.exports = userRouter;