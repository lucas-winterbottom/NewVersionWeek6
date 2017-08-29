const mongoose = require('mongoose');

const ShiftSchema = mongoose.Schema({
    shift_giver: {
        type: String,
        required: true
    },
    shift_taker: {
        type: String,
        required: true
    },
    shift_date: {
        type: String,
        required: true
    }
})

const Shift = module.exports = mongoose.model('Shift', ShiftSchema);
