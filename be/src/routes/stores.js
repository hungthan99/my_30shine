const express = require("express");
const router = express.Router();

const storeController = require('../app/controllers/StoreController')

router.get("/", storeController.showAll);
router.get("/:id", storeController.show);
router.post("/", storeController.create);
router.put("/:id", storeController.update);
router.delete("/:id", storeController.delete);

module.exports = router;
