const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
let db = require("./db.js");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
var id = 21;
app.get("/products", async (req, res) => {
  let col = await db.collection("products");
  let data = await col.find();
  let js = [];
  for await (let col of data) {
    json = {
      id: col.id,
      Title: col.title,
      Price: col.price,
      Desc: col.description,
      Category: col.category,
      ImageUrl: col.image,
      Rating: col.rating,
    };
    js.push(json);
  }
  res.json(js);
});
app.post("/product/add", async (req, res) => {
  let { title, price, desc, category, imageUrl, rating } = req.body;
  let col = await db.collection("products");
  let ack = await col.insertOne({
    id: id++,
    title: title,
    price: price,
    description: desc,
    category: category,
    image: imageUrl,
    rating: rating,
  });
  if (ack.acknowledged === true) {
    res.json({ Inserted: 1 });
  } else {
    res.json({ Inserted: 0 });
  }
});
app.delete("/product/:id", (req, res) => {});
app.put("/product/:id", (req, res) => {});

app.listen(5000, () => {
  console.log("running");
});
