const mongoose = require('mongoose');
const { Schema } = mongoose;

const solutionSchema = new Schema({
    text: String,
    type: String,
    choices: String,
    correct_choice: String,
    written_solution: String,
    tags: String,
    questions: String
});

const Solution = mongoose.model('solution', solutionSchema); 

module.exports = {
    Solution
};
