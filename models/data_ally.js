/* eslint-disable no-undef */
const mongoose = require('mongoose');

const data_ally_Schema = mongoose.Schema({
    _id: { type: String, required: true },
    An: { type: String, required: true },
    Aid: { type: Number, required: true },
    Player: { type: Array, required: true }
});

module.exports = mongoose.model('data_ally', data_ally_Schema);