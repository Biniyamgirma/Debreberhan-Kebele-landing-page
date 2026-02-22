const express = require("express");
const { connectWithConnector } = require("../../config/config");
require("dotenv").config();
const router = express.Router();

let connection;
router.get("/", async (req, res) => {
  try {
    connection = await connectWithConnector();
    const [rows] = await connection.query("SELECT * FROM news");
    res.json({
      rows,
    });
  } catch (error) {
    console.error("Error fetching news:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
