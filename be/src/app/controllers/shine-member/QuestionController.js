const Question = require('../../models/shine-member/Question')

class QuestionController {
    // [GET] /questions
    showAll(req, res, next) {
        Question.find({})
            .then((questions) => res.status(200).json(questions))
            .catch(next)
    }

    // [GET] /questions/:id
    show(req, res, next) {
        Question.findById(req.params.id)
            .then((question) => res.status(200).json(question))
            .catch(next)
    }

    // [POST] /questions
    create(req, res, next) {
        const question = new Question(req.body)
        question
            .save()
            .then(() =>
                res.status(200).json({
                    status: 200,
                    message: "Create question successfully!",
                    payload: null,
                })
            )
            .catch(next)
    }

    // [PUT] /questions/:id
    update(req, res, next) {
        Question.updateOne({ _id: req.params.id }, req.body)
            .then(() => 
                res.status(200).json({
                    status: 200,
                    message: "Update information of question successfully!",
                    payload: null,
                })
            )
            .catch(next)
    }

    // [DELETE] /questions/:id
    delete(req, res, next) {
        Question.findByIdAndDelete(req.params.id)
            .then(() => 
                res.status(200).json({
                    status: 200,
                    message: "Delete question successfully!",
                    payload: null,
                })
            )
            .catch(next)
    }
}

module.exports = new QuestionController();
