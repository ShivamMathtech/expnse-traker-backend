const express = require("express");
const { loginCtrls } = require("../../controllers/authCtrls/loginCtrls");
const { signUpCtrls } = require("../../controllers/authCtrls/signupCtrls");
const { userUpdateCtrls } = require("../../controllers/authCtrls/updateCtrls");
const { deleteCtrls } = require("../../controllers/authCtrls/deleteCtrls");
const authRouter = express.Router();

// Middleware to authenticate users
// Login Route
authRouter.post("/login", loginCtrls);
// Sign up Route
authRouter.post("/signup", signUpCtrls);
// Update Route
authRouter.put("/update/:name", userUpdateCtrls);
// Delete Route
authRouter.delete("/delete/:id", deleteCtrls);

// Export the authRouter
module.exports = authRouter;
