const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ ok: 1 });
});
app.listen(5000, () => {
  console.log("running");
});
