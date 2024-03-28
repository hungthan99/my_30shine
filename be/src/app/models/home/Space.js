const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Space = new Schema({
    label: { type: String, required: true },
    description: { type: String, required: true },
    banner: { type: String, required: true },
    alternative: { type: String, required: true },
    descBanner: { type: String, required: true },
    items: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'SpaceItem'
        }
    ]
})

module.exports = mongoose.model("Space", Space);
