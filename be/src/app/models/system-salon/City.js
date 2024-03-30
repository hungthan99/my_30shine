const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const City = new Schema({
    name: { type: String, required: true },
    number: { type: Number, required: true },
    districts: [ 
        { 
            type: mongoose.Schema.Types.ObjectId, ref: 'District' 
        }
    ],
})

module.exports = mongoose.model("City", City);
