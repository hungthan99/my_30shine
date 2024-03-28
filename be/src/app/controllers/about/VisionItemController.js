const VisionItem = require('../../models/about/VisionItem')
const Vision = require('../../models/about/Vision')

class VisionItemController {
    // [GET] /vision-items
    showAll(req, res, next) {
        VisionItem.find({})
            .then((visionItems) => res.status(200).json(visionItems))
            .catch(next)
    }

    // [GET] /vision-items/:id
    show(req, res, next) {
        VisionItem.findById(req.params.id)
            .then((visionItem) => res.status(200).json(visionItem))
            .catch(next)
    }

    // [POST] /vision-items
    create(req, res, next) {
        const visionItem = new VisionItem(req.body)
        visionItem
            .save()
            .then(async (visionItem) => {
                const vision = await Vision.findById(visionItem.vision)
                await vision.updateOne({$push: {items: visionItem._id}})
                res.status(200).json({
                    status: 200,
                    message: "Create vision item successfully!",
                    payload: null,
                })
            })
            .catch(next)
    }

    // [PUT] /vision-items/:id
    update(req, res, next) {
        VisionItem.updateOne({ _id: req.params.id }, req.body)
            .then(() => 
                res.status(200).json({
                    status: 200,
                    message: "Update information of vision item successfully!",
                    payload: null,
                })
            )
            .catch(next)
    }

    // [DELETE] /vision-items/:id
    delete(req, res, next) {
        VisionItem.findByIdAndDelete(req.params.id)
            .then(() => 
                res.status(200).json({
                    status: 200,
                    message: "Delete vision item successfully!",
                    payload: null,
                })
            )
            .catch(next)
    }
}

module.exports = new VisionItemController();
