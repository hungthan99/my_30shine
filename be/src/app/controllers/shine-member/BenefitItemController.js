const Benefit = require('../../models/shine-member/Benefit')
const BenefitItem = require('../../models/shine-member/BenefitItem')

class BenefitItemController {
    // [GET] /benefit-items
    showAll(req, res, next) {
        BenefitItem.find({})
            .then((benefitItems) => res.status(200).json(benefitItems))
            .catch(next)
    }

    // [GET] /benefit-items/:id
    show(req, res, next) {
        BenefitItem.findById(req.params.id)
            .then((benefitItem) => res.status(200).json(benefitItem))
            .catch(next)
    }

    // [POST] /benefit-items
    create(req, res, next) {
        const benefitItem = new BenefitItem(req.body)
        benefitItem
            .save()
            .then(async (benefitItem) => {
                const benefit = await Benefit.findById(benefitItem.benefit)
                await benefit.updateOne({$push: {items: benefitItem._id}})
                res.status(200).json({
                    status: 200,
                    message: "Create benefit item successfully!",
                    payload: null,
                })
            })
            .catch(next)
    }

    // [PUT] /benefit-items/:id
    update(req, res, next) {
        BenefitItem.updateOne({ _id: req.params.id }, req.body)
            .then(() => 
                res.status(200).json({
                    status: 200,
                    message: "Update information of benefit item successfully!",
                    payload: null,
                })
            )
            .catch(next)
    }

    // [DELETE] /benefit-items/:id
    delete(req, res, next) {
        BenefitItem.findByIdAndDelete(req.params.id)
            .then(() => 
                res.status(200).json({
                    status: 200,
                    message: "Delete benefit item successfully!",
                    payload: null,
                })
            )
            .catch(next)
    }
}

module.exports = new BenefitItemController();
