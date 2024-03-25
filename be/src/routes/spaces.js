const express = require("express");
const router = express.Router();

const spaceController = require('../app/controllers/SpaceController')

router.get("/", spaceController.showAll);
router.get("/:id", spaceController.show);
router.post("/", spaceController.create);
router.put("/:id", spaceController.update);
router.delete("/:id", spaceController.delete);

module.exports = router;
