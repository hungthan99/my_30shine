const express = require("express");
const router = express.Router();

const endowController = require('../app/controllers/EndowController')

router.get("/", endowController.showAll);
router.get("/:id", endowController.show);
router.post("/", endowController.create);
router.put("/:id", endowController.update);
router.delete("/:id", endowController.delete);

module.exports = router;
