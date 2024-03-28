const express = require("express");
const router = express.Router();

const employeeController = require('../../app/controllers/home/EmployeeController')

router.get("/", employeeController.showAll);
router.get("/:id", employeeController.show);
router.post("/", employeeController.create);
router.put("/:id", employeeController.update);
router.delete("/:id", employeeController.delete);

module.exports = router;
