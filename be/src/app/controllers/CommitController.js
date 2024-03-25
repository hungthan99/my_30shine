const Commit = require('../models/Commit')

class CommitController {
    // [GET] /commits
    showAll(req, res, next) {
        Commit.find({})
            .then((commits) => res.status(200).json(commits))
            .catch(next)
    }

    // [GET] /commits/:id
    show(req, res, next) {
        Commit.findById(req.params.id)
            .then((commit) => res.status(200).json(commit))
            .catch(next)
    }

    // [POST] /commits
    create(req, res, next) {
        const commit = new Commit(req.body)
        commit
            .save()
            .then(() =>
                res.status(200).json({
                    status: 200,
                    message: "Create commit successfully!",
                    payload: null,
                })
            )
            .catch(next)
    }

    // [PUT] /commits/:id
    update(req, res, next) {
        Commit.updateOne({ _id: req.params.id }, req.body)
            .then(() => 
                res.status(200).json({
                    status: 200,
                    message: "Update information of commit successfully!",
                    payload: null,
                })
            )
            .catch(next)
    }

    // [DELETE] /commits/:id
    delete(req, res, next) {
        Commit.findByIdAndDelete(req.params.id)
            .then(() => 
                res.status(200).json({
                    status: 200,
                    message: "Delete commit successfully!",
                    payload: null,
                })
            )
            .catch(next)
    }
}

module.exports = new CommitController();
