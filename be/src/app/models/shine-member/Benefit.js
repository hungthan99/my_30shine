const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Benefit = new Schema({
    label: { type: String, required: true },
    firstChild: { type: Boolean },
    items: [ 
        { 
            type: mongoose.Schema.Types.ObjectId,
            ref: 'BenefitItem'
        } 
    ]
})

module.exports = mongoose.model("Benefit", Benefit);
