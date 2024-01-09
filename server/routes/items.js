const router = require("express").Router();
const db = require("../db");

router.get("/items", async(req, res) => {
  try {
    const items = await db.getAllItems();
    res.send({ items });
  } catch (error) {
    console.error("Error fetching all items:", error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;