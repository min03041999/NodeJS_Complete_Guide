const path = require("path");

const express = require("express");

const rootDir = require("../utils/path");
const adminData = require("./admin");

const router = express.Router();

router.get("/", (req, res, next) => {
  // res.send("<h1>Hello from Express!</h1>");
  console.log("shop.js", adminData.products);
  res.sendFile(path.join(rootDir, "views", "shop.html"));
});

module.exports = router;
