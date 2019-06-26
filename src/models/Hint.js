const mongoose = require('mongoose');
const { Schema } = mongoose;

const hintSchema = new Schema({
    text: String,
    question: String
});

const Hint = mongoose.model('hint', hintSchema);

module.exports = {
    Hint
};