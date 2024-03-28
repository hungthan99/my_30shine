const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EmployeeItem = new Schema({
    image: { type: String, required: true },
    name: { type: String, required: true },
    address: { type: String },
    employee: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee' },
})

module.exports = mongoose.model("EmployeeItem", EmployeeItem);
