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
        getVideos: async (_, args, {dataSources}) => {
            const videos = await dataSources.videoAPI.getAll();
            return (videos);
        },
        getContentTypes: async (_, args, {dataSources}) => {
            const contentTypes = await dataSources.contentTypeAPI.getAll();
            return (contentTypes);
        },
        getPassages: async (_, args, {dataSources}) => {
            const passages = await dataSources.passageAPI.getAll();
            return (passages);
        },
        getTags: async (_, args, {dataSources}) => {
            const tags = await dataSources.tagAPI.getAll();
            return (tags);
        },
        getQuestions: async (_, args, {dataSources}) => {
            const questions = await dataSources.questionAPI.getAll();
            return (questions);
        },
        getHints: async (_, args, {dataSources}) => {
            const hints = await dataSources.hintAPI.getAll();
            return (hints);
        },
        getSolutions: async (_, args, {dataSources}) => {
            const solutions = await dataSources.solutionAPI.getAll();
            return (solutions);
        },
        getChoices: async (_, args, {dataSources}) => {
            const choices = await dataSources.choiceAPI.getAll();
            return (choices);
        },
        getAnswers: async (_, args, {dataSources}) => {
            const answers = await dataSources.answerAPI.getAll();
            return (answers);
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
    }
};

module.exports = resolvers;