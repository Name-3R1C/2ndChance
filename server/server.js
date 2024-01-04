const express = require("express");
const app = express();
const PORT = process.env.DB_PORT || 8001;

require("dotenv").config();

const bodyparser = require("body-parser");
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use(bodyparser.json());

// ROUTES //
// const users = require("./routes/users");
// const categories = require("./routes/categories");
const items = require("./routes/items");

// testing route ----------
app.get("/api", (req, res) => {
  res.json({ users: ["userOne", "userTwo", "userThree"] });
});

// app.use("api", users);
// app.use("api", categories);
app.use("/api", items);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
