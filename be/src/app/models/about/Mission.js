const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Mission = new Schema({
    label: { type: String, required: true },
    description: { type: String, required: true }
})

module.exports = mongoose.model("Mission", Mission);
