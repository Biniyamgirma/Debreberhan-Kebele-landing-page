const express = require("express");
const supabase = require("../../config/supabaseClient");
require("dotenv").config();
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const { data, error } = await supabase.from("user").select("*");
    if (error) {
      res.status(500).json({ message: "Internal server error" });
    }
    res.json(
      data.map((user) => ({
        id: user.id,
        firstName: user.first_name,
        middleName: user.middle_name,
        admin: user.role,
        category: user.category,
        isOnline: user.is_online,
        honorifics: user.honorifics,
        image: user.image,
      })),
    );
  } catch (error) {
    console.error("Error fetching isOnline status:", error);
    res.status(500).json({ error: "Internal server error" });
  } finally {
    if (pool) {
      await pool.end();
    }
  }
});

module.exports = router;
