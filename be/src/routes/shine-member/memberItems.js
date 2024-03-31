const express = require("express");
const router = express.Router();

const memberItemController = require('../../app/controllers/shine-member/MemberItemController')

router.get("/", memberItemController.showAll);
router.get("/:id", memberItemController.show);
router.post("/", memberItemController.create);
router.put("/:id", memberItemController.update);
router.delete("/:id", memberItemController.delete);

module.exports = router;
