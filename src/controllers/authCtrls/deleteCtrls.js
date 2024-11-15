const User = require("../../modal/userdb");
const { use } = require("../../Routes/authRoutes/authRouter");
let deleteCtrls = (req, res) => {
  // Simulate user deletion logic
  // console.log(req.params.name);
  const updatedUser = {
    username: req.params.name,
  };
  console.log(updatedUser.username);
  User.findOne({ username: updatedUser.username }).then((user) => {
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    } else {
      user.deleteOne({ username: updatedUser.username }).then((user) => {
        console.log(user);
        return res.status(200).json({
          message: "User deleted successfully",
          user,
        });
      }); // end of then statement
    } // end of else statement
  });
};
module.exports = {
  deleteCtrls,
};
