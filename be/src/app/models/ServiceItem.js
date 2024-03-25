const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ServiceItem = new Schema({
    label: { type: String, required: true },
    title: { type: String, required: true },
    price: { type: String, required: true },
    to: { type: String, required: true },
    service: { type: mongoose.Schema.Types.ObjectId, ref: 'Service' },
})

module.exports = mongoose.model("ServiceItem", ServiceItem);
