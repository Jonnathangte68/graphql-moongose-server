const mongoose = require('mongoose');
const { Schema } = mongoose;

const answerSchema = new Schema({
    text: String,
    user: String,
    solution: String
});

const Answer = mongoose.model('answer', answerSchema); 

module.exports = {
    Answer
};
