const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const bodyparser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
require("./database/conexion");

app.use(
  cors()
);
app.use(bodyparser.json());

const allRoutes = require("./routes/index");
allRoutes(app);

app.get("/", (req, res) => {
  res.send("Hola, bienvenido");
});

app.listen(port, () => {
  console.log("Server RUNNING IN PORT: " + port);
});
