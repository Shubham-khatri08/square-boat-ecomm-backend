const express = require("express");
const router = express.Router();

const {
  addOrderItems,
  getOrders,
  getMyOrders,
  getOrderById,
} = require("../controllers/orderController");
const { protect, admin } = require("../middlewares/authMiddleware");

router.route("/").post(protect, addOrderItems).get(protect, admin, getOrders);
router.route("/myorders").get(protect, getMyOrders);
router.route("/:id").get(protect, getOrderById);

module.exports = router;
