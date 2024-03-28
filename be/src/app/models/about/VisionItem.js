const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const VisionItem = new Schema({
    image: { type: String, required: true },
    title: { type: String, required: true },
    items: [ { type: String, required: true } ],
    vision: { type: mongoose.Schema.Types.ObjectId, ref: 'Vision' }
})

module.exports = mongoose.model("VisionItem", VisionItem);
