const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// serve folder public
app.use(express.static(path.join(__dirname, "public"), {
  maxAge: "30d",   // cache 30 hari
  etag: true
}));

app.get("/", (req, res) => {
  res.send("CDN is running 🚀");
});

app.listen(PORT, () => {
  console.log(`CDN running on http://localhost:${PORT}`);
});
