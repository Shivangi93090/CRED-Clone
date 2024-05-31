const express = require("express");
const router = express.Router();

const { isLoggedIn } = require("../middleware/user");
const { luhnValidation } = require("../middleware/luhnValidation");

const {
  addCard,
  getAllCards,
  getCardById,
  payBill,
  getAllStatements,
  getStatementsYearMonth,
  postStatements,
  getSmartStatementData,
  getSmartStatementYearMonth,
} = require("../controllers/card.controller");

/**
 * @swagger
 * /cards:
 *   post:
 *     summary: Add a new card
 *     tags: [Cards]
 *     responses:
 *       200:
 *         description: Card added successfully
 */
router.post("/", isLoggedIn, luhnValidation, addCard);

/**
 * @swagger
 * /cards:
 *   get:
 *     summary: Get all cards
 *     tags: [Cards]
 *     responses:
 *       200:
 *         description: List of all cards
 */
router.get("/", isLoggedIn, getAllCards);

/**
 * @swagger
 * /cards/{card_id}:
 *   get:
 *     summary: Get card by ID
 *     tags: [Cards]
 *     parameters:
 *       - in: path
 *         name: card_id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Card details
 */
router.get("/:card_id", isLoggedIn, getCardById);

/**
 * @swagger
 * /cards/{cardNumber}/pay:
 *   post:
 *     summary: Pay bill for a card
 *     tags: [Cards]
 *     parameters:
 *       - in: path
 *         name: cardNumber
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Bill paid successfully
 */
router.post("/:cardNumber/pay", isLoggedIn, luhnValidation, payBill);

/**
 * @swagger
 * /cards/{cardNumber}/statements:
 *   get:
 *     summary: Get all statements for a card
 *     tags: [Cards]
 *     parameters:
 *       - in: path
 *         name: cardNumber
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: List of all statements
 */
router.get("/:cardNumber/statements", isLoggedIn, luhnValidation, getAllStatements);

/**
 * @swagger
 * /cards/{cardNumber}/statements/{year}/{month}:
 *   get:
 *     summary: Get statements for a specific year and month
 *     tags: [Cards]
 *     parameters:
 *       - in: path
 *         name: cardNumber
 *         required: true
 *         schema:
 *           type: string
 *       - in: path
 *         name: year
 *         required: true
 *         schema:
 *           type: string
 *       - in: path
 *         name: month
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Statements for the specified year and month
 */
router.get("/:cardNumber/statements/:year/:month", isLoggedIn, luhnValidation, getStatementsYearMonth);

/**
 * @swagger
 * /cards/{cardNumber}/statements/{year}/{month}:
 *   post:
 *     summary: Post statements for a specific year and month
 *     tags: [Cards]
 *     parameters:
 *       - in: path
 *         name: cardNumber
 *         required: true
 *         schema:
 *           type: string
 *       - in: path
 *         name: year
 *         required: true
 *         schema:
 *           type: string
 *       - in: path
 *         name: month
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Statements posted successfully
 */
router.post("/:cardNumber/statements/:year/:month", luhnValidation, postStatements);

/**
 * @swagger
 * /cards/{cardNumber}/smartStatement:
 *   get:
 *     summary: Get smart statement data for a card
 *     tags: [Cards]
 *     parameters:
 *       - in: path
 *         name: cardNumber
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Smart statement data
 */
router.get("/:cardNumber/smartStatement", isLoggedIn, luhnValidation, getSmartStatementData);

/**
 * @swagger
 * /cards/{cardNumber}/smartStatement/{year}/{month}:
 *   get:
 *     summary: Get smart statement data for a specific year and month
 *     tags: [Cards]
 *     parameters:
 *       - in: path
 *         name: cardNumber
 *         required: true
 *         schema:
 *           type: string
 *       - in: path
 *         name: year
 *         required: true
 *         schema:
 *           type: string
 *       - in: path
 *         name: month
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Smart statement data for the specified year and month
 */
router.get("/:cardNumber/smartStatement/:year/:month", isLoggedIn, luhnValidation, getSmartStatementYearMonth);

module.exports = router;
