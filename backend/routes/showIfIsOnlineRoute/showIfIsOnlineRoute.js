const express = require("express");
const { connectWithConnector } = require("../../config/config");
require("dotenv").config();
const router = express.Router();
let pool;

router.get("/", async (req, res) => {
  const { id } = req.query;
  try {
    pool = await connectWithConnector();
    const [rows] = await pool.query("SELECT is_online FROM user where id = ?", [
      id,
    ]);
    if (rows.length === 0) {
      return res.status(404).json({ error: "System status not found" });
    }
    const isOnline = rows[0].is_online;
    res.json({ isOnline: isOnline });
  } catch (error) {
    console.error("Error fetching isOnline status:", error);
    res.status(500).json({ error: "Internal server error" });
  } finally {
    if (pool) {
      await pool.end();
    }
  }
});

module.exports = router;
