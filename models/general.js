/* eslint-disable no-undef */
const mongoose = require('mongoose');

const generalSchema = mongoose.Schema({
    name: { type: String, required: true }
});

module.exports = mongoose.model('general', generalSchema);