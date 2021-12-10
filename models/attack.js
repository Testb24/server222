/* eslint-disable no-undef */
const mongoose = require('mongoose');

const attackSchema = mongoose.Schema({
    Vdef_X: { type: Number, required: true },
    Vdef_Y: { type: Number, required: true },
    Voff_X: { type: Number, required: true },
    Voff_Y: { type: Number, required: true },
    time_server: { type: Date, required: true },
    time_impact: { type: Date, required: true },
    vague: { type: String, required: true },
    troupes: { type: String, required: true },
    numero: { type: Number, required: true },
});

module.exports = mongoose.model('attack', attackSchema);

// var attaque = {
//     Vdef_X: Vdef_X,
//     Vdef_Y: Vdef_Y,
//     Voff_X: Voff_X,
//     Voff_Y: Voff_Y,
//     time_server: time_server,
//     time_impact: time_impact,
//     vague: 1,
//     troupes: troupes,
//     numero: (Attaque.length)
//   }