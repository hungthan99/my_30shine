const StoreItem = require('../models/StoreItem')
const Store = require('../models/Store')

class StoreItemController {
    // [GET] /store-items
    showAll(req, res, next) {
        StoreItem.find({})
            .then((storeItems) => res.status(200).json(storeItems))
            .catch(next)
    }

    // [GET] /store-items/:id
    show(req, res, next) {
        StoreItem.findById(req.params.id)
            .then((storeItem) => res.status(200).json(storeItem))
            .catch(next)
    }

    // [POST] /store-items
    create(req, res, next) {
        const storeItem = new StoreItem(req.body)
        storeItem
            .save()
            .then(async (storeItem) => {
                const store = await Store.findById(storeItem.store)
                await store.updateOne({$push: {items: storeItem._id}})
                res.status(200).json({
                    status: 200,
                    message: "Create store item successfully!",
                    payload: null,
                })
            })
            .catch(next)
    }

    // [PUT] /store-items/:id
    update(req, res, next) {
        StoreItem.updateOne({ _id: req.params.id }, req.body)
            .then(() => 
                res.status(200).json({
                    status: 200,
                    message: "Update information of store item successfully!",
                    payload: null,
                })
            )
            .catch(next)
    }

    // [DELETE] /store-items/:id
    delete(req, res, next) {
        StoreItem.findByIdAndDelete(req.params.id)
            .then(() => 
                res.status(200).json({
                    status: 200,
                    message: "Delete store item successfully!",
                    payload: null,
                })
            )
            .catch(next)
    }
}

module.exports = new StoreItemController();
