const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Endow = new Schema({
    label: { type: String, required: true },
    description: { type: String, required: true },
    items: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'EndowItem'
        }
    ]
})

module.exports = mongoose.model("Endow", Endow);
