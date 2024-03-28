const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Post = new Schema({
    label: { type: String, required: true },
    items: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'PostItem'
        }
    ]
})

module.exports = mongoose.model("Post", Post);
