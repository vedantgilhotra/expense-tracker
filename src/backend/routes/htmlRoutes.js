const express = require('express');
const router = express.Router();
const controller  = require("../controllers/controller");

router.route("/").get(controller.all_transactions);

router.route("/add_transaction").post(controller.add_transaction);

router.route("/:id").get(controller.delete_transaction);

module.exports = router;