const mongoose = require('mongoose');
const { Schema } = mongoose;

const passageSchema = new Schema({
    name: String,
    text: String,
    status: String,
    subject: String,
    passage_instructions: String,
    passage_source: String,
    passage_source_link: String,
    tags: String
});

const Passage = mongoose.model('passage', passageSchema);

module.exports = {
    Passage
};
