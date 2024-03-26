const Space = require('../models/Space')

class SpaceController {
    // [GET] /spaces
    showAll(req, res, next) {
        Space.find({}).populate('items')
            .then((spaces) => res.status(200).json(spaces))
            .catch(next)
    }

    // [GET] /spaces/:id
    show(req, res, next) {
        Space.findById(req.params.id)
            .then((space) => res.status(200).json(space))
            .catch(next)
    }

    // [POST] /spaces
    create(req, res, next) {
        const space = new Space(req.body)
        space
            .save()
            .then(() =>
                res.status(200).json({
                    status: 200,
                    message: "Create space successfully!",
                    payload: null,
                })
            )
            .catch(next)
    }

    // [PUT] /spaces/:id
    update(req, res, next) {
        Space.updateOne({ _id: req.params.id }, req.body)
            .then(() => 
                res.status(200).json({
                    status: 200,
                    message: "Update information of space successfully!",
                    payload: null,
                })
            )
            .catch(next)
    }

    // [DELETE] /spaces/:id
    delete(req, res, next) {
        Space.findByIdAndDelete(req.params.id)
            .then(() => 
                res.status(200).json({
                    status: 200,
                    message: "Delete space successfully!",
                    payload: null,
                })
            )
            .catch(next)
    }
}

module.exports = new SpaceController();
