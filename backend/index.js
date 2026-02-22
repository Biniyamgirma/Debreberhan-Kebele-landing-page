const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(
  cors({
    origin: process.env.CORS_ORIGIN || "http://localhost:3000",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  }),
);

app.use(express.urlencoded({ extended: false }));
app.use(function (req, res, next) {
  res.locals.errors = [];
  next();
});
app.use(express.json());
app.use("/", require("./routes/test/testRoute")); ///working
app.use("/addUser", require("./routes/addUserRoute/addUserAdminRoute")); ///
app.use("/api", require("./routes/loginRoute/loginRoute")); //working loging
app.use("/news", require("./routes/addNewsRoute/addNewsRoute"));
app.use(
  "/changeIsOnline",
  require("./routes/changeIsOnlineStatusRoute/changeIsOnlineStatusRoute"),
);
app.use(
  "/isOnline",
  require("./routes/showIfIsOnlineRoute/showIfIsOnlineRoute"),
);
app.use(
  "/specificNews",
  require("./routes/selectSpecificNewsRoute/selectSpecificNewsRoute"),
);
app.use("/editNews", require("./routes/editNewsRoute/editNewsRoute"));
app.use("/deleteNews", require("./routes/deleteNewsRoute/deleteNewsRoute"));

// app.use("/addNews", require("./routes/addNewsRoute/addNewsRoute"));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
