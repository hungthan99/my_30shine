const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Member = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    items: [ 
        { 
            type: mongoose.Schema.Types.ObjectId,
            ref: 'MemberItem'
        } 
    ]
})

module.exports = mongoose.model("Member", Member);
