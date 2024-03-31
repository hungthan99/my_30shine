const express = require("express");
const router = express.Router();

const memberController = require('../../app/controllers/shine-member/MemberController')

router.get("/", memberController.showAll);
router.get("/:id", memberController.show);
router.post("/", memberController.create);
router.put("/:id", memberController.update);
router.delete("/:id", memberController.delete);

module.exports = router;
