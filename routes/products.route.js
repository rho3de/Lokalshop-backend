const { Router } = require("express");
const connect = require("../lib/connect.js");
const Shop = require("../models/Shop.js");
const { Product } = require("../models/Product.js");
const r = Router({ mergeParams: true });

// this route is on /:shopName/products

r.post("/", async (req, res) => {
  await connect();
  const { shopName } = req.params;
  const product = req.body;
  const shop = await Shop.find({ urlName: shopName });
  shop.productList.push(product);
  await shop.save();
});

module.exports = r;
