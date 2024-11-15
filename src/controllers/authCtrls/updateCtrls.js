const User = require("../../modal/userdb");
let userUpdateCtrls = (req, res) => {
  // Simulate user update logic
  const updatedUser = {
    username: req.params.name,
    email: req.body.email,
    password: req.body.password,
  };
  User.findOne({ username: updatedUser.username }).then((user) => {
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    } else {
      user.email = updatedUser.email;
      user.password = updatedUser.password;
      user
        .save()
        .then((user) => {
          return res.status(200).json({
            message: "User updated successfully",
            updatedUser,
          });
        })
        .catch((error) => {
          console.log(error);
          return res.status(500).json({ message: "Server error" });
        });
    }
  });
  res.status(200).json({
    message: "User updated successfully",
    updatedUser,
  });
};

module.exports = { userUpdateCtrls };
