const resolvers = {
    Query: {
        getUsers: async (_, args, {dataSources}) => {
            const users = await dataSources.userAPI.getAll();
            return (users);
        }
    },
    Mutation: {
        addUser: async (_, args, {dataSources}) => {
            const addUser = await dataSources.userAPI.insert(args);
            return (addUser);
        }
    }
};

module.exports = resolvers;