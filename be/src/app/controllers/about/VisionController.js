const Vision = require('../../models/about/Vision')

class VisionController {
    // [GET] /visions
    showAll(req, res, next) {
        Vision.find({}).populate('items')
            .then((visions) => res.status(200).json(visions))
            .catch(next)
    }

    // [GET] /visions/:id
    show(req, res, next) {
        Vision.findById(req.params.id)
            .then((vision) => res.status(200).json(vision))
            .catch(next)
    }

    // [POST] /visions
    create(req, res, next) {
        const vision = new Vision(req.body)
        vision
            .save()
            .then(() =>
                res.status(200).json({
                    status: 200,
                    message: "Create vision successfully!",
                    payload: null,
                })
            )
            .catch(next)
    }

    // [PUT] /visions/:id
    update(req, res, next) {
        Vision.updateOne({ _id: req.params.id }, req.body)
            .then(() => 
                res.status(200).json({
                    status: 200,
                    message: "Update information of vision successfully!",
                    payload: null,
                })
            )
            .catch(next)
    }

    // [DELETE] /visions/:id
    delete(req, res, next) {
        Vision.findByIdAndDelete(req.params.id)
            .then(() => 
                res.status(200).json({
                    status: 200,
                    message: "Delete vision successfully!",
                    payload: null,
                })
            )
            .catch(next)
    }
}

module.exports = new VisionController();
