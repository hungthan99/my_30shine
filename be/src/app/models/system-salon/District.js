const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const District = new Schema({
    name: { type: String, required: true },
    number: { type: Number, required: true },
    city: { type: mongoose.Schema.Types.ObjectId, required: true },
})

module.exports = mongoose.model("District", District);
