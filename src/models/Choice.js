const mongoose = require('mongoose');
const { Schema } = mongoose;

const choiceSchema = new Schema({
    text: String,
    question: String,
    solution: String
});

const Choice = mongoose.model('choice', choiceSchema);  

module.exports = {
    Choice
};