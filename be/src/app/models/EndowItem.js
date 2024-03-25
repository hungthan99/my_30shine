const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EndowItem = new Schema({
    image: { type: String, required: true },
    name: { type: String, required: true },
    priceNew: { type: String },
    priceOld: { type: String },
    to: { type: String },
    endow: { type: mongoose.Schema.Types.ObjectId, ref: 'Endow' },
})

module.exports = mongoose.model("EndowItem", EndowItem);
