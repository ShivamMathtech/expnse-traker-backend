let loginCtrls = (req, res) => {
  // Login logic Controlls
  res.status(200).json({
    message: "Login controllers",
  });
};

module.exports = {
  loginCtrls,
};
