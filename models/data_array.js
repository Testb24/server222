/* eslint-disable no-undef */
const mongoose = require('mongoose');

const data_array_Schema = mongoose.Schema({
    _id: { type: String, required: true },
    Pop: { type: Number, required: true }
});

module.exports = mongoose.model('data_array', data_array_Schema);