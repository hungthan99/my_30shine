const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StoreItem = new Schema({
    image: { type: String, required: true },
    name: { type: String, required: true },
    price: { type: String, required: true },
    store: { type: mongoose.Schema.Types.ObjectId, ref: 'Store' },
})

module.exports = mongoose.model("StoreItem", StoreItem);
