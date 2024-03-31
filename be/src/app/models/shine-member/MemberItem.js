const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MemberItem = new Schema({
    image: { type: String, required: true },
    title: { type: String, required: true },
    desc1: { type: String, required: true },
    desc2: { type: String },
    price: { type: String },
    member: { type: mongoose.Schema.Types.ObjectId, ref: 'Member' },
})

module.exports = mongoose.model("MemberItem", MemberItem);
