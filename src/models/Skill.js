const mongoose = require('mongoose');
const { Schema } = mongoose;

delete mongoose.connection.models['skill'];

const skillSchema = new Schema({
    skill_id: String,
    status: String,
    subject: String,
    tags: String,
    content_types: String,
    user: { type: Schema.Types.ObjectId, ref: 'User' }
});

const Skill = mongoose.model('skill', skillSchema); 

module.exports = {
    Skill
};