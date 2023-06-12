// Import Routes
const btcRoute = require("./btc.route");

const allRoutes = (app) => {
  app.use("/api/v1/", btcRoute);
};

module.exports = allRoutes;
