const Order = require("../models/orderModel");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

// @desc    Create new order
// @route   POST /api/orders
// @access  Private
const addOrderItems = catchAsync(async (req, res) => {
  const order = await Order.create(req.body);

  res.status(201).json({
    status: "success",
    data: {
      order,
    },
  });
});

// @desc    Get order by ID
// @route   GET /api/orders/:id
// @access  Private
const getOrderById = catchAsync(async (req, res) => {
  const order = await Order.findById(req.params.id).populate(
    "user",
    "name email"
  );

  if (!order) {
    return next(new AppError("No order found with that ID", 404));
  }

  res.status(200).json({
    status: "success",
    data: {
      order,
    },
  });
});

// @desc    Get logged in user orders
// @route   GET /api/orders/myorders
// @access  Private
const getMyOrders = catchAsync(async (req, res) => {
  const orders = await Order.find({ user: req.user._id });
  if (!orders) {
    return next(new AppError("No orders found with this user", 404));
  }

  res.status(200).json({
    status: "success",
    data: {
      orders,
    },
  });
});

// @desc    Get all orders
// @route   GET /api/orders
// @access  Private/Admin
const getOrders = catchAsync(async (req, res) => {
  const orders = await Order.find({}).populate("user", "id name");
  if (!orders) {
    return next(new AppError("No orders found", 404));
  }

  res.status(200).json({
    status: "success",
    data: {
      orders,
    },
  });
});

module.exports = {
  addOrderItems,
  getOrderById,
  getMyOrders,
  getOrders,
};
