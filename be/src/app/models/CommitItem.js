const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommitItem = new Schema({
    days: { type: String, required: true },
    unit: { type: String, required: true },
    slogan: { type: String, required: true },
    commit: { type: mongoose.Schema.Types.ObjectId, ref: 'Commit' }
})

module.exports = mongoose.model("CommitItem", CommitItem);
