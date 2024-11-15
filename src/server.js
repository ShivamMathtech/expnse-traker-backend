const express = require("express");
const env = require("dotenv").config();
const cors = require("cors");
const authRouter = require("./Routes/authRoutes/authRouter");
const expRouter = require("./Routes/expenceRouter/expRouter");
const createCollectionRouter = require("./Routes/createCollectionRoutes/createColRoutes");
const app = express();

app.use(cors());
// Middleware
app.use(express.json());
app.use("/auth", authRouter);
app.use("/expense", expRouter);
app.use("/create", createCollectionRouter);
let Port = process.env.PORT || 3000;
app.listen(Port, () => {
  console.log(`Server is running on port ${Port}`);
});
