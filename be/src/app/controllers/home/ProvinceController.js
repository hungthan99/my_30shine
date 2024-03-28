const Province = require('../../models/home/Province')

class ProvinceController {
    // [GET] /provinces
    showAll(req, res, next) {
        Province.find({}).populate('items')
            .then((provinces) => res.status(200).json(provinces))
            .catch(next)
    }

    // [GET] /provinces/:id
    show(req, res, next) {
        Province.findById(req.params.id)
            .then((province) => res.status(200).json(province))
            .catch(next)
    }

    // [POST] /provinces
    create(req, res, next) {
        const province = new Province(req.body)
        province
            .save()
            .then(() =>
                res.status(200).json({
                    status: 200,
                    message: "Create province successfully!",
                    payload: null,
                })
            )
            .catch(next)
    }

    // [PUT] /provinces/:id
    update(req, res, next) {
        Province.updateOne({ _id: req.params.id }, req.body)
            .then(() => 
                res.status(200).json({
                    status: 200,
                    message: "Update information of province successfully!",
                    payload: null,
                })
            )
            .catch(next)
    }

    // [DELETE] /provinces/:id
    delete(req, res, next) {
        Province.findByIdAndDelete(req.params.id)
            .then(() => 
                res.status(200).json({
                    status: 200,
                    message: "Delete province successfully!",
                    payload: null,
                })
            )
            .catch(next)
    }
}

module.exports = new ProvinceController();
