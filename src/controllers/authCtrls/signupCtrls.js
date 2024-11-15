const User = require("../../modal/userdb");
let signUpCtrls = (req, res) => {
  // Logic for sign up controller goes here

  User.findOne({ username: req.body.username })
    .then((user) => {
      if (user) {
        return res.status(409).json({
          message: "Username already exists",
        });
      }
      let newUser = new User(req.body);
      newUser.save().then((user) => {
        res.status(200).json({
          message: "User registered successfully",
          user: user,
        });
      });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        message: "Error while saving user",
        error: error,
      });
    });
};

module.exports = {
  signUpCtrls,
};
