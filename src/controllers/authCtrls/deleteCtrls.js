let deleteCtrls = (req, res) => {
  // Simulate user deletion logic
  res.status(200).json({
    message: "User deleted successfully",
  });
};

module.exports = {
  deleteCtrls,
};
