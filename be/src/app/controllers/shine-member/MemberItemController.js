const MemberItem = require('../../models/shine-member/MemberItem')
const Member = require('../../models/shine-member/Member')

class MemberItemController {
    // [GET] /member-items
    showAll(req, res, next) {
        MemberItem.find({})
            .then((memberItems) => res.status(200).json(memberItems))
            .catch(next)
    }

    // [GET] /member-items/:id
    show(req, res, next) {
        MemberItem.findById(req.params.id)
            .then((memberItem) => res.status(200).json(memberItem))
            .catch(next)
    }

    // [POST] /member-items
    create(req, res, next) {
        const memberItem = new MemberItem(req.body)
        memberItem
            .save()
            .then(async (memberItem) => {
                const member = await Member.findById(memberItem.member)
                await member.updateOne({$push: {items: memberItem._id}})
                res.status(200).json({
                    status: 200,
                    message: "Create member item successfully!",
                    payload: null,
                })
            })
            .catch(next)
    }

    // [PUT] /member-items/:id
    update(req, res, next) {
        MemberItem.updateOne({ _id: req.params.id }, req.body)
            .then(() => 
                res.status(200).json({
                    status: 200,
                    message: "Update information of member item successfully!",
                    payload: null,
                })
            )
            .catch(next)
    }

    // [DELETE] /member-items/:id
    delete(req, res, next) {
        MemberItem.findByIdAndDelete(req.params.id)
            .then(() => 
                res.status(200).json({
                    status: 200,
                    message: "Delete member item successfully!",
                    payload: null,
                })
            )
            .catch(next)
    }
}

module.exports = new MemberItemController();
