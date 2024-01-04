const path = require("path");
const express = require("express");

const app = express();
const PORT = process.env.DB_PORT || 8001;

const ENV = process.env.NODE_ENV || "development";
const PATH = path.resolve(__dirname, "./env." + ENV);

require("dotenv").config({ path: PATH });

const bodyparser = require("body-parser");
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use(bodyparser.json());


// ROUTES //
const user = require("./routes/user");
const category = require("./routes/category");
const item = require("./routes/item");

app.get("/api", (req, res) => {
  res.json({ "users": ["userOne", "userTwo", "userThree"] })
})
app.use("api", user);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
})