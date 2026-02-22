const express = require("express");
const router = express.Router();

let pool;
router.delete("/", async (req, res) => {
  const { id } = req.body;
  try {
    pool = await connectWithConnector();
    const [rows] = await pool.query("DELETE FROM news WHERE id = ?", [id]);
    if (rows.affectedRows === 0) {
      return res.status(400).json({ message: "error occured" });
    }
    res.status(301).json({ message: "success" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  } finally {
    if (pool) {
      pool.end();
    }
  }
});

module.exports = router;
