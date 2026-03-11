const express = require("express");
const { connectWithConnector } = require("../../config/config");
const upload = require("../../middleware/upload");
const router = express.Router();
const authMiddleware = require("../../middleware/authMiddleware");
const cloudinary = require("../../config/cloudinary");
let pool;
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    pool = await connectWithConnector();
    const [rows] = await pool.query("SELECT * FROM news WHERE id=?", [id]);
    res.json(rows);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "something went wrong",
      error,
    });
  }
});
router.put(
  "/",
  authMiddleware(["subAdmin", "admin"]),
  upload.single("editedImage"),
  async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({ message: "No image file provided" });
      }

      const { id, title, body, subHeading } = req.body;

      // Upload to Cloudinary using buffer
      const result = await new Promise((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
          { folder: "news_images" },
          (error, result) => {
            if (error) reject(error);
            else resolve(result);
          },
        );
        uploadStream.end(req.file.buffer);
      });
      // Update database
      const pool = await connectWithConnector();
      await pool.query(
        "UPDATE news SET title=?, body=?, image=?, sub_heading=? WHERE id=?",
        [title, body, result.secure_url, subHeading, id],
      );

      res.json({
        message: "News updated successfully",
        imageUrl: result.secure_url,
      });
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({
        message: "Upload failed",
        error: error.message,
      });
    }
  },
);

module.exports = router;
