const EndowItem = require('../models/EndowItem')

class EndowItemController {
    // [GET] /endow-items
    showAll(req, res, next) {
        EndowItem.find({})
            .then((endowItems) => res.status(200).json(endowItems))
            .catch(next)
    }

    // [GET] /endow-items/:id
    show(req, res, next) {
        EndowItem.findById(req.params.id)
            .then((endowItem) => res.status(200).json(endowItem))
            .catch(next)
    }

    // [POST] /endow-items
    create(req, res, next) {
        const endowItem = new EndowItem(req.body)
        endowItem
            .save()
            .then(() =>
                res.status(200).json({
                    status: 200,
                    message: "Create endow item successfully!",
                    payload: null,
                })
            )
            .catch(next)
    }

    // [PUT] /endow-items/:id
    update(req, res, next) {
        EndowItem.updateOne({ _id: req.params.id }, req.body)
            .then(() => 
                res.status(200).json({
                    status: 200,
                    message: "Update information of endow item successfully!",
                    payload: null,
                })
            )
            .catch(next)
    }

    // [DELETE] /endow-items/:id
    delete(req, res, next) {
        EndowItem.findByIdAndDelete(req.params.id)
            .then(() => 
                res.status(200).json({
                    status: 200,
                    message: "Delete endow item successfully!",
                    payload: null,
                })
            )
            .catch(next)
    }
}

module.exports = new EndowItemController();
