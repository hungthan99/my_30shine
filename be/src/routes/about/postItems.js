const express = require("express");
const router = express.Router();

const postItemController = require('../../app/controllers/about/PostItemController')

router.get("/", postItemController.showAll);
router.get("/:id", postItemController.show);
router.post("/", postItemController.create);
router.put("/:id", postItemController.update);
router.delete("/:id", postItemController.delete);

module.exports = router;
