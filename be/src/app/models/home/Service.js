const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Service = new Schema({
    label: { type: String, required: true },
    items: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'ServiceItem'
        }
    ]
})

module.exports = mongoose.model("Service", Service);
