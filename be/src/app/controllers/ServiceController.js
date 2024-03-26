const Service = require('../models/Service')
const ServiceItem = require('../models/ServiceItem')

class ServiceController {
    // [GET] /services
    showAll(req, res, next) {
        Service.find({}).populate('items')
            .then((services) => res.status(200).json(services))
            .catch(next)
    }

    // [GET] /services/:id
    show(req, res, next) {
        Service.findById(req.params.id)
            .then((service) => res.status(200).json(service))
            .catch(next)
    }

    // [POST] /services
    create(req, res, next) {
        const service = new Service(req.body)
        service
            .save()
            .then(() =>
                res.status(200).json({
                    status: 200,
                    message: "Create service successfully!",
                    payload: null,
                })
            )
            .catch(next)
    }

    // [PUT] /services/:id
    update(req, res, next) {
        Service.updateOne({ _id: req.params.id }, req.body)
            .then(() => 
                res.status(200).json({
                    status: 200,
                    message: "Update information of service successfully!",
                    payload: null,
                })
            )
            .catch(next)
    }

    // [DELETE] /services/:id
    delete(req, res, next) {
        Service.findByIdAndDelete(req.params.id)
            .then(() => 
                res.status(200).json({
                    status: 200,
                    message: "Delete service successfully!",
                    payload: null,
                })
            )
            .catch(next)
    }
}

module.exports = new ServiceController();
