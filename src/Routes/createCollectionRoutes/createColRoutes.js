const express = require("express");
const createCollectionRouter = express.Router();

createCollectionRouter.post("/collection", (req, res) => {
  const collectionName = req.body.collectionName;
  // Add your database connection and create collection logic here
  // Example:
  // const db = await connectToDatabase();
  // await db.createCollection(collectionName);
  res
    .status(200)
    .json({ message: `Collection "${collectionName}" created successfully.` });
});

module.exports = createCollectionRouter;
