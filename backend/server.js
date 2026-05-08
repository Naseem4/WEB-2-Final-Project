const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");

const planRoutes = require("./routes/planRoutes");

const app = express();

app.use(cors());
app.use(express.json());

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Fit Genie API",
      version: "1.0.0",
      description: "API documentation for Fit Genie project",
    },
  },
  apis: ["./routes/*.js"],
};

const swaggerSpec = swaggerJsdoc(options);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get("/", (req, res) => {
  res.send("Backend is working");
});

app.use("/api/plan", planRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});