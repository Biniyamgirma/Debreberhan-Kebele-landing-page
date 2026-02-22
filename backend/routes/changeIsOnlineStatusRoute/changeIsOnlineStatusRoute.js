const express = require("express");
const router = express.Router();
const { connectWithConnector } = require("../../config/config");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 8080;
let pool;

router.put("/", async (req, res) => {
  let { isOnline, id } = req.body;
  if (typeof isOnline !== "number") {
    return res.status(400).json({ error: "Invalid isOnline value" });
  }
  try {
    pool = await connectWithConnector();
    await pool.query("UPDATE `user`SET is_online =? WHERE id = ?;", [
      isOnline,
      id,
    ]);
    res.json({ message: "isOnline status updated successfully" });
  } catch (error) {
    console.error("Error updating isOnline status:", error);
    res.status(500).json({ error: "Internal server error" });
  } finally {
    if (pool) {
      await pool.end();
    }
  }
});

module.exports = router;
