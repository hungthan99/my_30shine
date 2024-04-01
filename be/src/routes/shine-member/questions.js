const express = require("express");
const router = express.Router();

const questionController = require('../../app/controllers/shine-member/QuestionController')

router.get("/", questionController.showAll);
router.get("/:id", questionController.show);
router.post("/", questionController.create);
router.put("/:id", questionController.update);
router.delete("/:id", questionController.delete);

module.exports = router;
