const Employee = require('../models/Employee')

class EmployeeController {
    // [GET] /employees
    showAll(req, res, next) {
        Employee.find({})
            .then((employees) => res.status(200).json(employees))
            .catch(next)
    }

    // [GET] /employees/:id
    show(req, res, next) {
        Employee.findById(req.params.id)
            .then((employee) => res.status(200).json(employee))
            .catch(next)
    }

    // [POST] /employees
    create(req, res, next) {
        const employee = new Employee(req.body)
        employee
            .save()
            .then(() =>
                res.status(200).json({
                    status: 200,
                    message: "Create employee successfully!",
                    payload: null,
                })
            )
            .catch(next)
    }

    // [PUT] /employees/:id
    update(req, res, next) {
        Employee.updateOne({ _id: req.params.id }, req.body)
            .then(() => 
                res.status(200).json({
                    status: 200,
                    message: "Update information of employee successfully!",
                    payload: null,
                })
            )
            .catch(next)
    }

    // [DELETE] /employees/:id
    delete(req, res, next) {
        Employee.findByIdAndDelete(req.params.id)
            .then(() => 
                res.status(200).json({
                    status: 200,
                    message: "Delete employee successfully!",
                    payload: null,
                })
            )
            .catch(next)
    }
}

module.exports = new EmployeeController();