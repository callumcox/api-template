//Create a new instance of Express Router
const router = require("express").Router();

//Require the necessary controller
const controller = require("../../controllers/health");

//Specify the route and the controller action
router.get("/health", controller.getHealth);

module.exports = router;
