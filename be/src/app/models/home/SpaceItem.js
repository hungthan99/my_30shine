const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SpaceItem = new Schema({
    image: { type: String, required: true },
    name: { type: String, required: true },
    to: { type: String, required: true },
    space: { type: mongoose.Schema.Types.ObjectId, ref: 'Space' },
})

module.exports = mongoose.model("SpaceItem", SpaceItem);
