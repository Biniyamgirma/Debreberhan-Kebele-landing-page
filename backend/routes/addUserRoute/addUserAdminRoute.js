const express = require("express");
const router = express.Router();
const { connectWithConnector } = require("../../config/config");
const authmiddleware = require("../../middleware/authMiddleware");
const { hashPassword } = require("../../utils/utils");
require("dotenv").config();
let pool;
//@add admin user
// @route POST /addUserAdmin
// @access Public
router.post("/", authmiddleware(["admin"]), async (req, res) => {
  const { firstName, middleName, lastName, password, role } = req.body;
  if (!firstName || !lastName || !password || !role) {
    return res.status(400).json({ error: "All fields are required" });
  }
  try {
    let is_online = 0;
    const hashedPassword = await hashPassword(password);
    pool = await connectWithConnector();
    const [rows] = await pool.query(
      "INSERT INTO user (first_name, middle_name, last_name, password, role,is_online) VALUES (?, ?, ?, ?, ?)",
      [firstName, middleName, lastName, hashedPassword, role, is_online],
    );
    res
      .status(201)
      .json({ message: "User added successfully", userId: rows.insertId });
  } catch (error) {
    console.error("Error adding user:", error);
    res.status(500).json({ error: "Internal server error" });
  } finally {
    if (pool) {
      await pool.end();
    }
  }
});

module.exports = router;
