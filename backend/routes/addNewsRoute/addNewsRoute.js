const express = require("express");
const { connectWithConnector } = require("../../config/config");
const upload = require("../../middleware/upload");
require("dotenv").config();
const router = express.Router();
const authMiddleware = require("../../middleware/authMiddleware");
const cloudinary = require("../../config/cloudinary");
let pool;

router.get("/", async (req, res) => {
  try {
    query = "SELECT * FROM news";
    pool = await connectWithConnector();
    const [rows] = await pool.query(query);
    res.json(rows);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post(
  "/",
  authMiddleware(["subAdmin", "admin"]),
  upload.single("image"),
  async (req, res) => {
    try {
      const result = cloudinary.uploader.upload_stream(
        {
          folder: "news_images",
        },
        async (error, result) => {
          if (error) return res.status(500).json({ message: error.message });
          const { id, title, body,subHeading } = req.body;
          pool = await connectWithConnector();
          const [rows] = await pool.query(
            "INSERT INTO news (user_id, title, body, image,sub_heading) VALUES (?, ?, ?, ?,?)",
            [id, title, body, result.secure_url,subHeading],
          );
          res.json({
            message: "news addes successfully",
            id: rows.insertId,
            title,
            body,
            imageUrl: result.secure_url,
          });
        },
      );
      result.end(req.file.buffer);
    } catch (error) {
      res.status(500).json({
        message: "upload failed",
        error,
      });
    }
  },
);

module.exports = router;
