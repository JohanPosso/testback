const router = require("express").Router();
const controller = require("../controllers/controller");

// Read data
router.get("/read", controller.readData);

module.exports = router;
