const City = require('../../models/system-salon/City')

class CityController {
    // [GET] /cities
    showAll(req, res, next) {
        City.find({}).populate('districts')
            .then((cities) => res.status(200).json(cities))
            .catch(next)
    }

    // [GET] /cities/:id
    show(req, res, next) {
        City.findById(req.params.id)
            .then((city) => res.status(200).json(city))
            .catch(next)
    }

    // [POST] /cities
    create(req, res, next) {
        const city = new City(req.body)
        city
            .save()
            .then(() =>
                res.status(200).json({
                    status: 200,
                    message: "Create city successfully!",
                    payload: null,
                })
            )
            .catch(next)
    }

    // [PUT] /cities/:id
    update(req, res, next) {
        City.updateOne({ _id: req.params.id }, req.body)
            .then(() => 
                res.status(200).json({
                    status: 200,
                    message: "Update information of city successfully!",
                    payload: null,
                })
            )
            .catch(next)
    }

    // [DELETE] /cities/:id
    delete(req, res, next) {
        City.findByIdAndDelete(req.params.id)
            .then(() => 
                res.status(200).json({
                    status: 200,
                    message: "Delete city successfully!",
                    payload: null,
                })
            )
            .catch(next)
    }
}

module.exports = new CityController();
