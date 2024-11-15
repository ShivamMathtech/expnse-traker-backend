let userUpdateCtrls = (req, res) => {
  // Simulate user update logic
  const updatedUser = {
    username: req.body.username,
    password: req.body.password,
  };
  res.status(200).json({
    message: "User updated successfully",
    updatedUser,
  });
};

module.exports = { userUpdateCtrls };
