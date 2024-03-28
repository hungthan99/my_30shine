const express = require("express");
const router = express.Router();

const employeeItemController = require('../../app/controllers/home/EmployeeItemController')

router.get("/", employeeItemController.showAll);
router.get("/:id", employeeItemController.show);
router.post("/", employeeItemController.create);
router.put("/:id", employeeItemController.update);
router.delete("/:id", employeeItemController.delete);

module.exports = router;
