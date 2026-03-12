const express = require("express");
const route = express.Router();
const sql = require("../../config/db");
const { hashPassword } = require("../../utils/utils");
route.get("/", async (req, res) => {
  try {
    const dateTimeInSupabase = await sql`SELECT NOW()`;
    res.end({ message: "its working fine", data: dateTimeInSupabase });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error", data: error });
  }
});

module.exports = route;
