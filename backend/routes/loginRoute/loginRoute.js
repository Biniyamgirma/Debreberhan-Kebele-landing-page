const express = require("express");
const router = express.Router();
const { connectWithConnector } = require("../../config/config");
const { generateToken, comparePassword } = require("../../utils/utils");

let pool;
/// Login Route
//@desc   Login user
//@route  POST /api/users
//@access Public
router.post("/login", async (req, res) => {
  let { firstName, password } = req.body;
  console.log(firstName, password);
  firstName = firstName.replace(/[^a-zA-Z0-9 ]/g, "");
  if (!firstName || !password) {
    return res
      .status(400)
      .json({ message: "Please provide all required fields" });
  }
  try {
    pool = await connectWithConnector();
    const [rows] = await pool.query("SELECT * FROM user WHERE first_name = ?", [
      firstName,
    ]);
    if (rows.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }
    const user = rows[0];
    console.log(user);
    const isPasswordValid = await comparePassword(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid password" });
    }
    const token = generateToken(user);
    res.json({ message: "Login successful", firstName: user.firstName, token });
  } catch (err) {
    console.error("Error during login:", err);
    res.status(500).json({ error: "Internal server error" });
  } finally {
    if (pool) {
      await pool.end();
    }
  }
});

module.exports = router;
