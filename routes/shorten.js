const express = require("express");
const router = express.Router();
const shortenController = require("../controllers/shortenController");
router.post("/", shortenController);

module.exports = router;
