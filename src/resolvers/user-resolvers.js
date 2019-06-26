const UserResolvers = {
    getUsers: async (_, args, context) => {
        if(!context.user) throw new Error("Authentication is required");
        const users = await context.dataSources.userAPI.getAll();
        return (users);
    },
    addUser: async (_, args, {dataSources}, context) => {
        const addUser = await dataSources.userAPI.insert(args.data);
        return (addUser);
    },
    login: async (_, args, {dataSources}, context) => {
        const login = await dataSources.userAPI.login(args);
        return (login);
    },
    getUserBySkill: async ({ user }, args, {dataSources}, context) => {
        if({ user } && typeof { user } !== undefined) {
            const result = await dataSources.userAPI.getById({ user });
            return (result);
        }
    }
}

module.exports = UserResolvers;