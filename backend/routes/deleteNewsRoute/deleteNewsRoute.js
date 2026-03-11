const express = require("express");
const router = express.Router();
const { connectWithConnector } = require("../../config/config");
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    console.log(id);
    const pool = await connectWithConnector();
    const [result] = await pool.query("DELETE FROM `news` WHERE id = ?", [id]);
    if (result.affectedRows === 0) {
      return res.status(400).json({ message: "error occured" });
    }
    res.status(200).json({ message: "success" });
  } catch (error) {
    console.error("Error deleting news:", error);
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
