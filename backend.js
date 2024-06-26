const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const backend = express();
const port = 3002;

require("dotenv").config();

const index = require("./routes");

backend.use(cors());

// backend.get("/", (req, res) => {
//   res.send("This is the server backend of the Lokalshop app");
// });

backend.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

backend.use("/", index);
