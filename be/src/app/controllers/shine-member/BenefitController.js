const Benefit = require('../../models/shine-member/Benefit')

class BenefitController {
    // [GET] /benefits
    showAll(req, res, next) {
        Benefit.find({}).populate('items')
            .then((benefits) => res.status(200).json(benefits))
            .catch(next)
    }

    // [GET] /benefits/:id
    show(req, res, next) {
        Benefit.findById(req.params.id)
            .then((benefit) => res.status(200).json(benefit))
            .catch(next)
    }

    // [POST] /benefits
    create(req, res, next) {
        const benefit = new Benefit(req.body)
        benefit
            .save()
            .then(() =>
                res.status(200).json({
                    status: 200,
                    message: "Create benefit successfully!",
                    payload: null,
                })
            )
            .catch(next)
    }

    // [PUT] /benefits/:id
    update(req, res, next) {
        Benefit.updateOne({ _id: req.params.id }, req.body)
            .then(() => 
                res.status(200).json({
                    status: 200,
                    message: "Update information of benefit successfully!",
                    payload: null,
                })
            )
            .catch(next)
    }

    // [DELETE] /benefits/:id
    delete(req, res, next) {
        Benefit.findByIdAndDelete(req.params.id)
            .then(() => 
                res.status(200).json({
                    status: 200,
                    message: "Delete benefit successfully!",
                    payload: null,
                })
            )
            .catch(next)
    }
}

module.exports = new BenefitController();
