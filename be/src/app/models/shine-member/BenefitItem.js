const mongoose = require("mongoose");
const Schema = mongoose.Schema;
    
const BenefitItem = new Schema({
    name: { type: String, required: true },
    desc: { type: String },
    boldDesc: { type: String },
    lsDesc: [ { type: String } ],
    silver: { type: Boolean },
    gold: { type: Boolean },
    diamond: { type: Boolean },
    items: [ { type: String } ],
    benefit: { type: mongoose.Schema.Types.ObjectId, ref: 'Benefit' }
})
    
module.exports = mongoose.model("BenefitItem", BenefitItem);
    