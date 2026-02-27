const express = require("express");
const { connectWithConnector } = require("../../config/config");
require("dotenv").config();
const router = express.Router();

let connection;
router.get("/", async (req, res) => {
  try {
    connection = await connectWithConnector();
    const [rows] = await connection.query("SELECT * FROM news");
    res.json(
      rows.map((news) => ({
        id: news.id,
        title: news.title,
        body: news.body,
        image: news.image,
        subHeading: news.sub_heading,
      })),
    );
  } catch (error) {
    console.error("Error fetching news:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
