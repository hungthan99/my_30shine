const Mission = require('../../models/about/Mission')

class MissionController {
    // [GET] /missions
    showAll(req, res, next) {
        Mission.find({})
            .then((missions) => res.status(200).json(missions))
            .catch(next)
    }

    // [GET] /missions/:id
    show(req, res, next) {
        Mission.findById(req.params.id)
            .then((mission) => res.status(200).json(mission))
            .catch(next)
    }

    // [POST] /missions
    create(req, res, next) {
        const mission = new Mission(req.body)
        mission
            .save()
            .then(() =>
                res.status(200).json({
                    status: 200,
                    message: "Create mission successfully!",
                    payload: null,
                })
            )
            .catch(next)
    }

    // [PUT] /missions/:id
    update(req, res, next) {
        Mission.updateOne({ _id: req.params.id }, req.body)
            .then(() => 
                res.status(200).json({
                    status: 200,
                    message: "Update information of mission successfully!",
                    payload: null,
                })
            )
            .catch(next)
    }

    // [DELETE] /missions/:id
    delete(req, res, next) {
        Mission.findByIdAndDelete(req.params.id)
            .then(() => 
                res.status(200).json({
                    status: 200,
                    message: "Delete mission successfully!",
                    payload: null,
                })
            )
            .catch(next)
    }
}

module.exports = new MissionController();
