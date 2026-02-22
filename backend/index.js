const express = require("express");
const { connectWithConnector } = require("./config/config");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

let pool;

// Initialize the database connection before starting the server
const startServer = async () => {
  try {
    console.log("Initializing Cloud SQL connection...");
    pool = await connectWithConnector();

    // Test the connection
    await pool.query("SELECT 1");
    console.log("Successfully connected to Cloud SQL.");

    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("Failed to start server:", err.message);
    process.exit(1);
  }
};

// --- ROUTES ---

// 1. Health Check / Test Route
app.get("/", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT NOW() as currentTime");
    res.json({
      status: "Online",
      dbTime: rows[0].currentTime,
    });
  } catch (err) {
    res
      .status(500)
      .json({ error: "Database query failed", details: err.message });
  }
});

// 2. Example: Get data from a table
app.get("/users", async (req, res) => {
  try {
    // Replace 'users' with your actual table name
    const [rows] = await pool.query("SELECT * FROM users LIMIT 10");
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

startServer();
