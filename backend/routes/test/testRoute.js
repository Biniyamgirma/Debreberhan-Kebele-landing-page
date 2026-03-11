const express = require("express");
const route = express.Router();
// const { connectWithConnector } = require("../../config/config");
// const { hashPassword } = require("../../utils/utils");
route.get("/", async (req, res) => {
  try {
    // pool = await connectWithConnector();
    // const [rows] = await pool.query("SELECT NOW()");
    res.json({ message: "its working fine" });
  } catch (error) {
    console.error("Error connecting to the database:", error.message);
  }
});

module.exports = route;
