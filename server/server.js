const path = require("path");
const express = require("express");

const app = express();
const PORT = process.env.DB_PORT || 8001;

const ENV = process.env.NODE_ENV || "development";
const PATH = path.resolve(__dirname, "./env." + ENV);

require("dotenv").config({ path: PATH });

app.get("/api", (req, res) => {
  res.json({ "users": ["userOne", "userTwo"] })
})

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
})