const resolvers = {
    Query: {
        getUsers: async (_, args, {dataSources}) => {
            const users = await dataSources.userAPI.getAll();
            return (users);
        },
        getSkills: async (_, args, {dataSources}) => {
            const skills = await dataSources.skillAPI.getAll();
            return (skills);
        },
        getSkillsByUser: async (_, args, {dataSources}) => {
            const skills = await dataSources.skillAPI.getAll();
            return (skills);
        },
        getUserBySkill: async (_, args, {dataSources}) => {
            const skills = await dataSources.skillAPI.getAll();
            return (skills);
        }
    },
    Mutation: {
        addUser: async (_, args, {dataSources}) => {
            const addUser = await dataSources.userAPI.insert(args);
            return (addUser);
        },
        addSkill: async (_, args, {dataSources}) => {
            const addSkill = await dataSources.skillAPI.insert(args);
            return (addSkill);
        }
    },
    User: {
        skills: Query.getSkillsByUser
    },
    Skill: {
        user: Query.getUserBySkill
    },
};

module.exports = resolvers;