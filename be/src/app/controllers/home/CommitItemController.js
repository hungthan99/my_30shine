const CommitItem = require('../../models/home/CommitItem')
const Commit = require('../../models/home/Commit')

class CommitItemController {
    // [GET] /commit-items
    showAll(req, res, next) {
        CommitItem.find({})
            .then((commitItems) => res.status(200).json(commitItems))
            .catch(next)
    }

    // [GET] /commit-items/:id
    show(req, res, next) {
        CommitItem.findById(req.params.id)
            .then((commitItem) => res.status(200).json(commitItem))
            .catch(next)
    }

    // [POST] /commit-items
    create(req, res, next) {
        const commitItem = new CommitItem(req.body)
        commitItem
            .save()
            .then(async (commitItem) => {
                const commit = await Commit.findById(commitItem.commit)
                await commit.updateOne({$push: {items: commitItem._id}})
                res.status(200).json({
                    status: 200,
                    message: "Create commit item successfully!",
                    payload: null,
                })
            })
            .catch(next)
    }

    // [PUT] /commit-items/:id
    update(req, res, next) {
        CommitItem.updateOne({ _id: req.params.id }, req.body)
            .then(() => 
                res.status(200).json({
                    status: 200,
                    message: "Update information of commit item successfully!",
                    payload: null,
                })
            )
            .catch(next)
    }

    // [DELETE] /commit-items/:id
    delete(req, res, next) {
        CommitItem.findByIdAndDelete(req.params.id)
            .then(() => 
                res.status(200).json({
                    status: 200,
                    message: "Delete commit item successfully!",
                    payload: null,
                })
            )
            .catch(next)
    }
}

module.exports = new CommitItemController();
