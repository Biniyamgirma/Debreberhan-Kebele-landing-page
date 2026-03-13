const express = require("express");
const route = express.Router();
const sql = require("../../config/db");
const { hashPassword } = require("../../utils/utils");
const supabase = require("../../config/supabaseClient");
route.get("/", async (req, res) => {
  try {
    const { data, error } = await supabase.from("user").select("*");
    if (error) {
      return res.status(500).json({ error: error.message });
    }
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error", data: error });
  }
});

module.exports = route;
