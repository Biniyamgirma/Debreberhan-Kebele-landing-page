const dotenv = require("dotenv");
dotenv.config();
const { createClient } = require("@supabase/supabase-js");

const supabaseUrl =
  process.env.SUPABASE_URL || "https://iqohxofaovikmelgxjmc.supabase.co";
const supabaseKey =
  process.env.SUPABASE_ANON_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlxb2h4b2Zhb3Zpa21lbGd4am1jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMyMjY0MTcsImV4cCI6MjA4ODgwMjQxN30.cL6W4o2JxJcdCzhh0RxYHDr6sOO3v7TfwAYGQQfawfY";

// Create a single supabase client for interacting with your database

const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = supabase;
