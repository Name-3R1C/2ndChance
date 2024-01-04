const router = require("express").Router();
const db = require("../db");

router.get("/items", async(req, res) => {
  try {
    const properties = await db.getAllItems();
    res.send({ properties });
  } catch (error) {
    console.error("Error fetching all properties:", error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;