const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Store = new Schema({
    label: { type: String, required: true },
    description: { type: String, required: true },
    banner: { type: String, required: true },
    alternative: { type: String, required: true },
    items: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'StoreItem'
        }
    ]
})

module.exports = mongoose.model("Store", Store);
