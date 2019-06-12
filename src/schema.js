const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID
    username: String
    email: String
    skills: [Skill]
}
type Skill {
    _id: ID
    skill_id: String
    status: String
    subject: String
    tags: String
    content_types: String
    user: User
}
type Video {
    _id: ID
    name: String
    source: String
    skill: String
}
type ContentType {
    _id: ID
    name: String
    source: String
    skill: String
}
type Passage {
    _id: ID
    name: String
    text: String
    status: String
    subject: String
    passage_instructions: String
    passage_source: String
    passage_source_link: String
    tags: String
}
type Tag {
    _id: ID
    name: String
}
type Question {
    _id: ID
    name: String
    calculator: String
    text: String
    second_question_text: String
    opening_copy: String
    image: String
    template_type: String
    passsage: String
    subject: String
    tags: String
    status: String
    content_type: String
}
type Hint {
    _id: ID
    text: String
    question: String
}
type Solution {
    _id: ID
    text: String
    type: String
    choices: String
    correct_choice: String
    written_solution: String
    tags: String
    questions: String
}
type Choice {
    _id: ID
    text: String
    question: String
    solution: String
}
type Answer {
    _id: ID
    text: String
    user: String
    solution: String
}
type Query {
    getUsers: [User]
    getSkills: [Skill]
}
type Mutation {
    addUser(userName: String!, email: String!): User
    addSkill(skill_id: String, status: String, subject: String, tags: String, content_types: String): Skill
}
`;

module.exports = typeDefs;