const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostItem = new Schema({
    label: { type: String, required: true },
    image: { type: String, required: true },
    slogan: { type: String, required: true },
    post: { type: mongoose.Schema.Types.ObjectId, ref: 'Post' },
})

module.exports = mongoose.model("PostItem", PostItem);
