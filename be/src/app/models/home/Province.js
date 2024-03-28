const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Province = new Schema({
    label: { type: String, required: true },
    description: { type: String, required: true },
    items: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'ProvinceItem'
        }
    ]
})

module.exports = mongoose.model("Province", Province);
