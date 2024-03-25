const SpaceItem = require('../models/SpaceItem')

class SpaceItemController {
    // [GET] /space-items
    showAll(req, res, next) {
        SpaceItem.find({})
            .then((spaceItems) => res.status(200).json(spaceItems))
            .catch(next)
    }

    // [GET] /space-items/:id
    show(req, res, next) {
        SpaceItem.findById(req.params.id)
            .then((spaceItem) => res.status(200).json(spaceItem))
            .catch(next)
    }

    // [POST] /space-items
    create(req, res, next) {
        const spaceItem = new SpaceItem(req.body)
        spaceItem
            .save()
            .then(() =>
                res.status(200).json({
                    status: 200,
                    message: "Create space item successfully!",
                    payload: null,
                })
            )
            .catch(next)
    }

    // [PUT] /space-items/:id
    update(req, res, next) {
        SpaceItem.updateOne({ _id: req.params.id }, req.body)
            .then(() => 
                res.status(200).json({
                    status: 200,
                    message: "Update information of space item successfully!",
                    payload: null,
                })
            )
            .catch(next)
    }

    // [DELETE] /space-items/:id
    delete(req, res, next) {
        SpaceItem.findByIdAndDelete(req.params.id)
            .then(() => 
                res.status(200).json({
                    status: 200,
                    message: "Delete space item successfully!",
                    payload: null,
                })
            )
            .catch(next)
    }
}

module.exports = new SpaceItemController();
