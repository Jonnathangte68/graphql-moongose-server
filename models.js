const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  username: String,
  email: String
});

const skillSchema = new Schema({
  skill_id: String,
  status: String,
  subject: String,
  tags: String,
  content_types: String
});

const videoSchema = new Schema({
  name: String,
  source: String,
  skill: String
});

const contentTypeSchema = new Schema({
  name: String,
  source: String,
  skill: String
});

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

const tagSchema = new Schema({
  name: String
});

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

const hintSchema = new Schema({
  text: String,
  question: String
});

const solutionSchema = new Schema({
  text: String,
  type: String,
  choices: String,
  correct_choice: String,
  written_solution: String,
  tags: String,
  questions: String
});

const choiceSchema = new Schema({
  text: String,
  question: String,
  solution: String
});

const answerSchema = new Schema({
  text: String,
  user: String,
  solution: String
});

const User = mongoose.model('user', userSchema); 
const Skill = mongoose.model('skill', skillSchema);
const Video = mongoose.model('video', videoSchema);  
const ContentType = mongoose.model('content_type', contentTypeSchema); 
const Passage = mongoose.model('passage', passageSchema);
const Tag = mongoose.model('tag', tagSchema);
const Question = mongoose.model('question', questionSchema);
const Hint = mongoose.model('hint', hintSchema);
const Solution = mongoose.model('solution', solutionSchema); 
const Choice = mongoose.model('choice', choiceSchema);   
const Answer = mongoose.model('answer', answerSchema);    

module.exports = {
  User,
  Skill,
  Video,
  ContentType,
  Passage,
  Tag,
  Question,
  Hint,
  Solution,
  Choice,
  Answer
};