const EmployeeItem = require('../models/EmployeeItem')

class EmployeeItemController {
    // [GET] /employee-items
    showAll(req, res, next) {
        EmployeeItem.find({})
            .then((employeeItems) => res.status(200).json(employeeItems))
            .catch(next)
    }

    // [GET] /employee-items/:id
    show(req, res, next) {
        EmployeeItem.findById(req.params.id)
            .then((employeeItem) => res.status(200).json(employeeItem))
            .catch(next)
    }

    // [POST] /employee-items
    create(req, res, next) {
        const employeeItem = new EmployeeItem(req.body)
        employeeItem
            .save()
            .then(() =>
                res.status(200).json({
                    status: 200,
                    message: "Create employee item successfully!",
                    payload: null,
                })
            )
            .catch(next)
    }

    // [PUT] /employee-items/:id
    update(req, res, next) {
        EmployeeItem.updateOne({ _id: req.params.id }, req.body)
            .then(() => 
                res.status(200).json({
                    status: 200,
                    message: "Update information of employee item successfully!",
                    payload: null,
                })
            )
            .catch(next)
    }

    // [DELETE] /employee-items/:id
    delete(req, res, next) {
        EmployeeItem.findByIdAndDelete(req.params.id)
            .then(() => 
                res.status(200).json({
                    status: 200,
                    message: "Delete employee item successfully!",
                    payload: null,
                })
            )
            .catch(next)
    }
}

module.exports = new EmployeeItemController();
