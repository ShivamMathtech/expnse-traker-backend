const express = require("express");
const expRouter = express.Router();

expRouter.get("/showexpence", (req, res) => {
  res.status(200).json({
    message: "This is the showexpence route",
  });
});

expRouter.post("/addexpense", (req, res) => {
  res.status(200).json({
    message: "This is the addexpense route",
  });
});

expRouter.put("/editexpense", (req, res) => {
  res.status(200).json({
    message: "This is the editexpense route",
  });
});

expRouter.delete("/deleteexpense", (req, res) => {
  res.status(200).json({
    message: "This is the deleteexpense route",
  });
});

module.exports = expRouter;
