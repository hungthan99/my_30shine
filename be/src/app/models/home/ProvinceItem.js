const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProvinceItem = new Schema({
    image: { type: String, required: true },
    name: { type: String, required: true },
    quantity: { type: String, required: true },
    to: { type: String, required: true },
    others: { type: Boolean },
    province: { type: mongoose.Schema.Types.ObjectId, ref: 'Province' },
})

module.exports = mongoose.model("ProvinceItem", ProvinceItem);
