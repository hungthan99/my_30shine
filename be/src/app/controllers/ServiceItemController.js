const ServiceItem = require('../models/ServiceItem')

class ServiceItemController {
    // [GET] /service-items
    showAll(req, res, next) {
        ServiceItem.find({})
            .then((serviceItems) => res.status(200).json(serviceItems))
            .catch(next)
    }

    // [GET] /service-items/:id
    show(req, res, next) {
        ServiceItem.findById(req.params.id)
            .then((serviceItem) => res.status(200).json(serviceItem))
            .catch(next)
    }

    // [POST] /service-items
    create(req, res, next) {
        const serviceItem = new ServiceItem(req.body)
        serviceItem
            .save()
            .then(() =>
                res.status(200).json({
                    status: 200,
                    message: "Create service item successfully!",
                    payload: null,
                })
            )
            .catch(next)
    }

    // [PUT] /service-items/:id
    update(req, res, next) {
        ServiceItem.updateOne({ _id: req.params.id }, req.body)
            .then(() => 
                res.status(200).json({
                    status: 200,
                    message: "Update information of service item successfully!",
                    payload: null,
                })
            )
            .catch(next)
    }

    // [DELETE] /service-items/:id
    delete(req, res, next) {
        ServiceItem.findByIdAndDelete(req.params.id)
            .then(() => 
                res.status(200).json({
                    status: 200,
                    message: "Delete service item successfully!",
                    payload: null,
                })
            )
            .catch(next)
    }
}

module.exports = new ServiceItemController();