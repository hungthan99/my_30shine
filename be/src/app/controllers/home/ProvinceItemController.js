const ProvinceItem = require('../../models/home/ProvinceItem')
const Province = require('../../models/home/Province')

class ProvinceItemController {
    // [GET] /province-items
    showAll(req, res, next) {
        ProvinceItem.find({})
            .then((provinceItems) => res.status(200).json(provinceItems))
            .catch(next)
    }

    // [GET] /province-items/:id
    show(req, res, next) {
        ProvinceItem.findById(req.params.id)
            .then((provinceItem) => res.status(200).json(provinceItem))
            .catch(next)
    }

    // [POST] /province-items
    create(req, res, next) {
        const provinceItem = new ProvinceItem(req.body)
        provinceItem
            .save()
            .then(async (provinceItem) => {
                const province = await Province.findById(provinceItem.province)
                await province.updateOne({$push: {items: provinceItem._id}})
                res.status(200).json({
                    status: 200,
                    message: "Create province item successfully!",
                    payload: null,
                })
            })
            .catch(next)
    }

    // [PUT] /province-items/:id
    update(req, res, next) {
        ProvinceItem.updateOne({ _id: req.params.id }, req.body)
            .then(() => 
                res.status(200).json({
                    status: 200,
                    message: "Update information of province item successfully!",
                    payload: null,
                })
            )
            .catch(next)
    }

    // [DELETE] /province-items/:id
    delete(req, res, next) {
        ProvinceItem.findByIdAndDelete(req.params.id)
            .then(() => 
                res.status(200).json({
                    status: 200,
                    message: "Delete province item successfully!",
                    payload: null,
                })
            )
            .catch(next)
    }
}

module.exports = new ProvinceItemController();
