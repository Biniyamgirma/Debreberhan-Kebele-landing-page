const express = require("express");
const upload = require("../../middleware/upload");
require("dotenv").config();
const router = express.Router();
const authMiddleware = require("../../middleware/authMiddleware");
const cloudinary = require("../../config/cloudinary");
const supabase = require("../../config/supabaseClient");
router.get("/", async (req, res) => {
  try {
    const { data, error } = await supabase.from("news").select("*");
    if (error) {
      res.status(500).json({ message: "Internal server error" });
    }
    res.json({ data: data });
  } catch (error) {
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
          const { id, title, body, subHeading } = req.body;
          const { data } = await supabase.from("news").insert([
            {
              user_id: id,
              title: title,
              body: body,
              simple_heading: subHeading,
              is_active: 1,
              image: result.secure_url,
            },
          ]);

          res.json({
            message: "news added successfully",
            id: data.insertId,
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
