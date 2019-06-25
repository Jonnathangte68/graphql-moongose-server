const mongoose = require('mongoose');
const { Schema } = mongoose;

const questionSchema = new Schema({
    name: String,
    calculator: String,
    text: String,
    second_question_text: String,
    opening_copy: String,
    image: String,
    template_type: String,
    passsage: String,
    subject: String,
    tags: String,
    status: String,
    content_type: String
});

const Question = mongoose.model('question', questionSchema);

module.exports = {
    Question
};