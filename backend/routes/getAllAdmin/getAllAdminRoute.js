const express = require("express");
const { connectWithConnector } = require("../../config/config");
require("dotenv").config();
const router = express.Router();
let pool;

router.get("/", async (req, res) => {
  try {
    pool = await connectWithConnector();
    const [rows] = await pool.query("SELECT * FROM user ");
    if (rows.length === 0) {
      return res.status(404).json({ error: "System status not found" });
    }
    res.json(
      rows.map((user) => ({
        id: user.id,
        firstName: user.first_name,
        middleName: user.middle_name,
        isOnline: user.is_online,
        image: user.image,
      })),
    );
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
