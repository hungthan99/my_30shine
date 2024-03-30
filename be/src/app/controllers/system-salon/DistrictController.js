const District = require('../../models/system-salon/District')
const City = require('../../models/system-salon/City')

class DistrictController {
    // [GET] /districts
    showAll(req, res, next) {
        District.find({})
            .then((districts) => res.status(200).json(districts))
            .catch(next)
    }

    // [GET] /districts/:id
    show(req, res, next) {
        District.findById(req.params.id)
            .then((district) => res.status(200).json(district))
            .catch(next)
    }

    // [POST] /districts
    create(req, res, next) {
        const district = new District(req.body)
        district
            .save()
            .then(async (district) => {
                const city = await City.findById(district.city)
                await city.updateOne({$push: {districts: district._id}})
                res.status(200).json({
                    status: 200,
                    message: "Create district successfully!",
                    payload: null,
                })
            })
            .catch(next)
    }

    // [PUT] /districts/:id
    update(req, res, next) {
        District.updateOne({ _id: req.params.id }, req.body)
            .then(() => 
                res.status(200).json({
                    status: 200,
                    message: "Update information of district successfully!",
                    payload: null,
                })
            )
            .catch(next)
    }

    // [DELETE] /districts/:id
    delete(req, res, next) {
        District.findByIdAndDelete(req.params.id)
            .then(() => 
                res.status(200).json({
                    status: 200,
                    message: "Delete district successfully!",
                    payload: null,
                })
            )
            .catch(next)
    }
}

module.exports = new DistrictController();
