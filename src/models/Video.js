const mongoose = require('mongoose');
const { Schema } = mongoose;

const videoSchema = new Schema({
    name: String,
    source: String,
    skill: String
});

const Video = mongoose.model('video', videoSchema);  

module.exports = {
    Video
};