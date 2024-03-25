const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Commit = new Schema({
    label: { type: String, required: true },
    description: { type: String, required: true },
    banner: { type: String, required: true },
    alternative: { type: String, required: true },
    titleBanner: { type: String, required: true },
    descBanner: { type: String, required: true },
    to: { type: String, required: true },
    items: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'CommitItem'
        }
    ]
})

module.exports = mongoose.model("Commit", Commit);
