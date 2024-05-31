const express = require("express");
const router = express.Router();

const { isLoggedIn } = require("../middleware/user");

const {
  register,
  login,
  getProfile,
  logout,
  updateProfile,
  updateAuthCode,
} = require("../controllers/user.controller");

/**
 * @swagger
 * /users/signup:
 *   post:
 *     summary: Register a new user
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: User registered successfully
 */
router.post("/signup", register);

/**
 * @swagger
 * /users/login:
 *   post:
 *     summary: Login a user
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: User logged in successfully
 */
router.post("/login", login);

/**
 * @swagger
 * /users/logout:
 *   get:
 *     summary: Logout a user
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: User logged out successfully
 */
router.get("/logout", logout);

/**
 * @swagger
 * /users/profile:
 *   get:
 *     summary: Get user profile
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: User profile data
 */
router.get("/profile", isLoggedIn, getProfile);

/**
 * @swagger
 * /users/authCode:
 *   get:
 *     summary: Update user authentication code
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Authentication code updated
 */
router.get("/authCode", isLoggedIn, updateAuthCode);

/**
 * @swagger
 * /users/profile:
 *   patch:
 *     summary: Update user profile
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: User profile updated successfully
 */
router.patch("/profile", isLoggedIn, updateProfile);

module.exports = router;
