const express = require("express");
const router = express.Router();

const storeItemController = require('../app/controllers/StoreItemController')

router.get("/", storeItemController.showAll);
router.get("/:id", storeItemController.show);
router.post("/", storeItemController.create);
router.put("/:id", storeItemController.update);
router.delete("/:id", storeItemController.delete);

module.exports = router;
