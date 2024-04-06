const express = require("express");
const { getAllOrders } = require("../controllers/order");
const router = express.Router();

router.route("/:farmerId").get(getAllOrders);

module.exports = router;
