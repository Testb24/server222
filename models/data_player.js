/* eslint-disable no-undef */
const mongoose = require('mongoose');

const data_player_Schema = mongoose.Schema({
    _id: { type: String, required: true },
    Un: { type: String, required: true },
    Uid: { type: Number, required: true },
    Aid: { type: Number },
    An: { type: String },
    Vivi: { type: Array, required: true },
    // Pop: { type: Number }
    Pop: { type: Array, required: true },
    Day: { type: Array, required: true }

});

module.exports = mongoose.model('data_player', data_player_Schema);