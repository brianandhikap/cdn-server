const express = require("express");
const path = require("path");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT;

app.use(express.static(path.join(__dirname, "public"), {
  maxAge: "30d",
  etag: true
}));

app.get("/", (req, res) => {
  res.send("go to the moonnnnn 🚀");
});

app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 CDN running on http://0.0.0.0:${PORT}`);
});
