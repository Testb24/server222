/* eslint-disable no-undef */
const mongoose = require('mongoose');

const data_town_Schema = mongoose.Schema({
    F: { type: Number, required: true },
    X: { type: Number, required: true },
    Y: { type: Number, required: true },
    T: { type: Number, required: true },
    _id: { type: String, required: true },
    Vn: { type: String, required: true },
    Vid: { type: Number, required: true },
    Uid: { type: Number, required: true },
    Un: { type: String, required: true },
    Aid: { type: Number },
    An: { type: String },
    Pop: { type: Array, required: true },
    Day: { type: Array, required: true },
    Pop_Player: { type: Array, required: true }
});

module.exports = mongoose.model('data_town', data_town_Schema);