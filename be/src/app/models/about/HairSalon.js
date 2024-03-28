const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const HairSalon = new Schema({
    label: { type: String, required: true },
    desc1: { type: String, required: true },
    desc2: { type: String, required: true },
    images: [ { type: String, required: true } ]
})

module.exports = mongoose.model("HairSalon", HairSalon);
