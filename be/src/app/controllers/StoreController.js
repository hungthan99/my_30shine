const Store = require('../models/Store')

class StoreController {
    // [GET] /stores
    showAll(req, res, next) {
        Store.find({})
            .then((stores) => res.status(200).json(stores))
            .catch(next)
    }

    // [GET] /stores/:id
    show(req, res, next) {
        Store.findById(req.params.id)
            .then((store) => res.status(200).json(store))
            .catch(next)
    }

    // [POST] /stores
    create(req, res, next) {
        const store = new Store(req.body)
        store
            .save()
            .then(() =>
                res.status(200).json({
                    status: 200,
                    message: "Create store successfully!",
                    payload: null,
                })
            )
            .catch(next)
    }

    // [PUT] /stores/:id
    update(req, res, next) {
        Store.updateOne({ _id: req.params.id }, req.body)
            .then(() => 
                res.status(200).json({
                    status: 200,
                    message: "Update information of store successfully!",
                    payload: null,
                })
            )
            .catch(next)
    }

    // [DELETE] /stores/:id
    delete(req, res, next) {
        Store.findByIdAndDelete(req.params.id)
            .then(() => 
                res.status(200).json({
                    status: 200,
                    message: "Delete store successfully!",
                    payload: null,
                })
            )
            .catch(next)
    }
}

module.exports = new StoreController();
