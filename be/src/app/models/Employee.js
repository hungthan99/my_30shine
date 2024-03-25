const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Employee = new Schema({
    label: { type: String, required: true },
    description: { type: String, required: true },
    items: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'EmployeeItem'
        }
    ]
})

module.exports = mongoose.model("Employee", Employee);
