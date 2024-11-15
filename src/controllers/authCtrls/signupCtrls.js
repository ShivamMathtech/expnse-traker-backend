const User = require("../../modal/userdb");
const bcrypt = require("bcrypt");
const saltRounds = 10;
let signUpCtrls = (req, res) => {
  // Logic for sign up controller goes here

  User.findOne({ username: req.body.username })
    .then((user) => {
      if (user) {
        res.status(409).json({
          message: "Username already exists",
          response: 409,
        });
      } else {
        const myPlaintextPassword = req.body.password;
        const hash_password = bcrypt.hashSync(myPlaintextPassword, saltRounds);
        const data = {
          name: req.body.name,
          username: req.body.username,
          email: req.body.email,
          password: hash_password,
        };
        let newUser = new User(data);
        newUser.save().then((user) => {
          res.status(200).json({
            message: "User registered successfully",
            user: user,
            response: 200,
          });
        });
      }
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
