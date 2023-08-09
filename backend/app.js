require("dotenv").config();
const { MongoClient } = require("mongodb");
const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
client.connect((err) => {
  if (err) {
    console.error(err);
    return false;
  }
});
app.get("/products", async (req, res) => {
  let db = client.db("Project");
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
  let id =
    req.body.title.substring(0, req.body.title.length - 3) +
    Math.floor(Math.random() * 10);
  let db = client.db("Project");
  let { title, price, desc, category, imageUrl, rating } = req.body;
  let col = await db.collection("products");
  let ack = await col.insertOne({
    id: id,
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
app.delete("/delete/product/:id", async (req, res) => {
  let db = client.db("Project");
  let coll = await db.collection("products");
  let del = await coll.deleteOne({ id: parseInt(req.params.id) });
  res.json(del);
});
app.post("/product/update/:id", async (req, res) => {
  let { title, price, desc, category, imageUrl, rating } = req.body;
  let db = client.db("Project");
  let coll = await db.collection("products");
  let update = await coll.updateOne(
    { id: parseInt(req.params.id) },
    {
      $set: {
        title: title,
        price: price,
        description: desc,
        category: category,
        imageUrl: imageUrl,
        rating: rating,
      },
    }
  );
  res.json(update);
});

app.listen(5000, () => {
  console.log("running");
});
