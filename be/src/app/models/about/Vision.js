const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Vision = new Schema({
    label: { type: String, required: true },
    desc1: { type: String, required: true },
    desc2: { type: String, required: true },
    items: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'VisionItem'
        }
    ]
})

module.exports = mongoose.model("Vision", Vision);
