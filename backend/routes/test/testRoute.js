const express = require("express");
const route = express.Router();
const { connectWithConnector } = require("../../config/config");
const { data } = require("react-router-dom");
// const { hashPassword } = require("../../utils/utils");
route.get("/", async (req, res) => {
  try {
    const pool = await connectWithConnector();
    const [rows] = await pool.query("SELECT NOW()");
    res.json({ message: "its working fine", data: rows });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error", data: error });
    console.error("Error connecting to the database:", error.message);
  }
});

module.exports = route;
