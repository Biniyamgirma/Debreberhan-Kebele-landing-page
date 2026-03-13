const express = require("express");
require("dotenv").config();
const router = express.Router();
const supabase = require("../../config/supabaseClient");
let connection;
router.get("/", async (req, res) => {
  try {
    const { data, error } = await supabase.from("news").select("*");
    res.json(
      data.map((news) => ({
        id: news.id,
        title: news.title,
        body: news.body,
        image: news.image,
        subHeading: news.sub_heading,
        date: news.created_at,
      })),
    );
  } catch (error) {
    console.error("Error fetching news:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
