const express = require("express");
const app = express();
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const cors = require("cors");

// Swagger setup
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
const swaggerDocument = YAML.load("./swagger.yaml");

// Importing routes
const cardRoutes = require('./routes/card.routes');
const userRoutes = require('./routes/user.routes');

const ErrorHandler = require("./middleware/errorHandler");

// Middleware setup
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("tiny"));
app.use(cookieParser());

// Swagger documentation route
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Routes middlewares
app.use("/api/users", userRoutes); // Consolidated user route
app.use("/api/cards", cardRoutes); // Consolidated card route

// Root route
app.use("/", (req, res) => {
  res.send("Welcome to the backend of Cred Clone");
});

// Error handling middleware
app.use(ErrorHandler);

// Wildcard route to handle any other requests
app.all("*", (req, res) => {
  res.status(404).send("Page not found");
});

// Starting the servery


module.exports = app;
