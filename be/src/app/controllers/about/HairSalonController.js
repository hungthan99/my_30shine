const HairSalon = require('../../models/about/HairSalon')

class HairSalonController {
    // [GET] /hair-salons
    showAll(req, res, next) {
        HairSalon.find({})
            .then((hairSalons) => res.status(200).json(hairSalons))
            .catch(next)
    }

    // [GET] /hair-salons/:id
    show(req, res, next) {
        HairSalon.findById(req.params.id)
            .then((hairSalon) => res.status(200).json(hairSalon))
            .catch(next)
    }

    // [POST] /hair-salons
    create(req, res, next) {
        const hairSalon = new HairSalon(req.body)
        hairSalon
            .save()
            .then(() =>
                res.status(200).json({
                    status: 200,
                    message: "Create hair salon successfully!",
                    payload: null,
                })
            )
            .catch(next)
    }

    // [PUT] /hair-salons/:id
    update(req, res, next) {
        HairSalon.updateOne({ _id: req.params.id }, req.body)
            .then(() => 
                res.status(200).json({
                    status: 200,
                    message: "Update information of hair salon successfully!",
                    payload: null,
                })
            )
            .catch(next)
    }

    // [DELETE] /hair-salons/:id
    delete(req, res, next) {
        HairSalon.findByIdAndDelete(req.params.id)
            .then(() => 
                res.status(200).json({
                    status: 200,
                    message: "Delete hair salon successfully!",
                    payload: null,
                })
            )
            .catch(next)
    }
}

module.exports = new HairSalonController();
