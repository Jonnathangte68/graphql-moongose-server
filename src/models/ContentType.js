const mongoose = require('mongoose');
const { Schema } = mongoose;

const contentTypeSchema = new Schema({
    name: String,
    source: String,
    skill: String
});

const ContentType = mongoose.model('content_type', contentTypeSchema); 

module.exports = {
    ContentType
};
