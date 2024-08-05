const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userschema = new Schema({
    stdId: {
        type: String,
        required: true
    },
    stdName: {
        type: String,
        required: true
    },
    stdNumber: {
        type: String,
        required: true
    },
    stdEmail: {
        type: String,
        required: true
    },
}, { timestamps: true })

const user = mongoose.model('studentdata', userschema)

module.exports = user;