const UserResolvers = require('./user-resolvers');
const SkillResolvers = require('./skill-resolvers');

const resolvers = {
    User: {
      skills: SkillResolvers.getSkillsByUser
    },
    Skill: {
      user: UserResolvers.getUserBySkill
    },
    Query: {
      getUsers: UserResolvers.getUsers,
      getSkills: SkillResolvers.getSkills
    },
    Mutation: {
      addUser: UserResolvers.addUser,
      addSkill: SkillResolvers.addSkill
    }
}

module.exports = resolvers;