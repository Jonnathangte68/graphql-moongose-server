const mongoose = require('mongoose');
const { Schema } = mongoose;

const tagSchema = new Schema({
    name: String
});

const Tag = mongoose.model('tag', tagSchema);

module.exports = {
    Tag
};