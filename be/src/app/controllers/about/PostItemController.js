const PostItem = require('../../models/about/PostItem')
const Post = require('../../models/about/Post')

class PostItemController {
    // [GET] /post-items
    showAll(req, res, next) {
        PostItem.find({})
            .then((postItems) => res.status(200).json(postItems))
            .catch(next)
    }

    // [GET] /post-items/:id
    show(req, res, next) {
        PostItem.findById(req.params.id)
            .then((postItem) => res.status(200).json(postItem))
            .catch(next)
    }

    // [POST] /post-items
    create(req, res, next) {
        const postItem = new PostItem(req.body)
        postItem
            .save()
            .then(async (postItem) => {
                const post = await Post.findById(postItem.post)
                await post.updateOne({$push: {items: postItem._id}})
                res.status(200).json({
                    status: 200,
                    message: "Create post item successfully!",
                    payload: null,
                })
            })
            .catch(next)
    }

    // [PUT] /post-items/:id
    update(req, res, next) {
        PostItem.updateOne({ _id: req.params.id }, req.body)
            .then(() => 
                res.status(200).json({
                    status: 200,
                    message: "Update information of post item successfully!",
                    payload: null,
                })
            )
            .catch(next)
    }

    // [DELETE] /post-items/:id
    delete(req, res, next) {
        PostItem.findByIdAndDelete(req.params.id)
            .then(() => 
                res.status(200).json({
                    status: 200,
                    message: "Delete post item successfully!",
                    payload: null,
                })
            )
            .catch(next)
    }
}

module.exports = new PostItemController();
