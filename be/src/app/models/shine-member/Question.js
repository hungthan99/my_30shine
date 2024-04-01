const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Question = new Schema({
    name: { type: String, required: true },
    answer: { type: String, required: true },
})

module.exports = mongoose.model("Question", Question);
