const express = require("express");
const route = express.Router();
const { connectWithConnector } = require("../../config/config");
const { hashPassword } = require("../../utils/utils");
let pool;
route.post("/test", async (req, res) => {
  try {
    pool = await connectWithConnector();
    const [rows] = await pool.query("SELECT NOW()");
    const { password } = req.body;
    console.log(password);
    const hashedPassword = await hashPassword(password);
    console.log(hashedPassword);
    res.json(rows);
  } catch (error) {
    console.error("Error connecting to the database:", error.message);
  } finally {
    if (pool) pool.end();
  }
});

module.exports = route;
