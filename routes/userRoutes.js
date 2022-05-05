const express = require("express");
const {
  signup,
  login,
  getUserProfile,
} = require("../controllers/userController");
const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

router.route("/").post(signup);
router.post("/login", login);
router.route("/profile").get(protect, getUserProfile);

module.exports = router;
