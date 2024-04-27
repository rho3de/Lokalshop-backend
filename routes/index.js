const { Router } = require("express");
const connect = require("../lib/connect.js");

const Shop = require("../models/Shop.js");
const r = Router({ mergeParams: true });

// const shopRoute = require("./shop.route.js");
const productRoute = require("./products.route.js");

r.get("/:shopName", async (req, res) => {
  try {
    await connect();
    const { shopName } = req.params;
    const shop = await Shop.findOne({ urlName: shopName });
    res.json(shop);
  } catch (error) {
    console.log("Es gibt einen Fehler");
    console.log(error.message);
    res.json({ message: "GET-Problem" });
  }
});

r.post("/", async (req, res) => {
  await connect();
  const shop = req.body;
  await Shop.insertOne({ shop });
});

r.patch("/", async (req, res) => {
  await connect();
  const shop = req.body;
  await Shop.findByIdAndUpdate(shop._Id);
});

// r.use("/:shopname", shopRoute);
r.use("/:shopName/products", productRoute);
module.exports = r;
