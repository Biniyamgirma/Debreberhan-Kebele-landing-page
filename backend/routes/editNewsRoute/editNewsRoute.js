const express = require("express");
const { connectWithConnector } = require("../../config/config");
const upload = require("../../middleware/upload");
require("dotenv").config();
const router = express.Router();
const authMiddleware = require("../../middleware/authMiddleware");
const cloudinary = require("../../config/cloudinary");
let pool;

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
          const { id, title, body } = req.body;
          pool = await connectWithConnector();
          const [rows] = await pool.query(
            "UPDSTE news SET user_id=?, title=?, body=?, image=? WHERE id=?",
            [id, title, body, result.secure_url, req.params.id],
          );
          res.json({
            message: "news updated successfully",
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
