const UserResolvers = {
    getUsers: async (_, args, {dataSources}) => {
        const users = await dataSources.userAPI.getAll();
        return (users);
    },
    addUser: async (_, args, {dataSources}) => {
        const addUser = await dataSources.userAPI.insert(args);
        return (addUser);
    },
    getUserBySkill: async ({ user }, args, {dataSources}, info) => {
        if({ user } && typeof { user } !== undefined) {
            const result = await dataSources.userAPI.getById({ user });
            return (result);
        }
    }
}

module.exports = UserResolvers;