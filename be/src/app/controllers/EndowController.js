const Endow = require('../models/Endow')

class EndowController {
    // [GET] /endows
    showAll(req, res, next) {
        Endow.find({}).populate('items')
            .then((endows) => res.status(200).json(endows))
            .catch(next)
    }

    // [GET] /endows/:id
    show(req, res, next) {
        Endow.findById(req.params.id)
            .then((endow) => res.status(200).json(endow))
            .catch(next)
    }

    // [POST] /endows
    create(req, res, next) {
        const endow = new Endow(req.body)
        endow
            .save()
            .then(() =>
                res.status(200).json({
                    status: 200,
                    message: "Create endow successfully!",
                    payload: null,
                })
            )
            .catch(next)
    }

    // [PUT] /endows/:id
    update(req, res, next) {
        Endow.updateOne({ _id: req.params.id }, req.body)
            .then(() => 
                res.status(200).json({
                    status: 200,
                    message: "Update information of endow successfully!",
                    payload: null,
                })
            )
            .catch(next)
    }

    // [DELETE] /endows/:id
    delete(req, res, next) {
        Endow.findByIdAndDelete(req.params.id)
            .then(() => 
                res.status(200).json({
                    status: 200,
                    message: "Delete endow successfully!",
                    payload: null,
                })
            )
            .catch(next)
    }
}

module.exports = new EndowController();
