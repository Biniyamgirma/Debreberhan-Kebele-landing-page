const express = require("express");
const router = express.Router();
const { connectWithConnector } = require("../../config/config");
let pool;
router.get("/getNewsToEdit", async (req, res) => {
  const id = req.query.id;
  try {
    pool = await connectWithConnector();
    const [rows] = await pool.query("SELECT * FROM news WHERE id = ?", [id]);
    res.json(rows);
  } catch (error) {
    res.status(500).json({ message: error.message });
  } finally {
    if (pool) {
      pool.end();
    }
  }
});

module.exports = router;
