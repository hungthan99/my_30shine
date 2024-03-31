const Member = require('../../models/shine-member/Member')

class MemberController {
    // [GET] /members
    showAll(req, res, next) {
        Member.find({}).populate('items')
            .then((members) => res.status(200).json(members))
            .catch(next)
    }

    // [GET] /members/:id
    show(req, res, next) {
        Member.findById(req.params.id)
            .then((member) => res.status(200).json(member))
            .catch(next)
    }

    // [POST] /members
    create(req, res, next) {
        const member = new Member(req.body)
        member
            .save()
            .then(() =>
                res.status(200).json({
                    status: 200,
                    message: "Create member successfully!",
                    payload: null,
                })
            )
            .catch(next)
    }

    // [PUT] /members/:id
    update(req, res, next) {
        Member.updateOne({ _id: req.params.id }, req.body)
            .then(() => 
                res.status(200).json({
                    status: 200,
                    message: "Update information of member successfully!",
                    payload: null,
                })
            )
            .catch(next)
    }

    // [DELETE] /members/:id
    delete(req, res, next) {
        Member.findByIdAndDelete(req.params.id)
            .then(() => 
                res.status(200).json({
                    status: 200,
                    message: "Delete member successfully!",
                    payload: null,
                })
            )
            .catch(next)
    }
}

module.exports = new MemberController();
