const express = require("express");
const router = express.Router();

const hairSalonController = require('../../app/controllers/about/HairSalonController')

router.get("/", hairSalonController.showAll);
router.get("/:id", hairSalonController.show);
router.post("/", hairSalonController.create);
router.put("/:id", hairSalonController.update);
router.delete("/:id", hairSalonController.delete);

module.exports = router;
