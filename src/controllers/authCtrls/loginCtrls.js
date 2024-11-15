const User = require("../../modal/userdb");
let loginCtrls = (req, res) => {
  // Login logic Controlls
  // Implement your login logic here
  const { username, password } = req.body;

  User.findOne({
    username: username,
  })
    .then((user) => {
      if (!user) {
        res.status(401).json({
          message: "Invalid username or password",
        });
      } else {
        res.status(200).json({
          message: "Login successful",
          user: user,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: "Error occurred while logging in",
        error: err.message,
      });
    });
};

module.exports = {
  loginCtrls,
};
