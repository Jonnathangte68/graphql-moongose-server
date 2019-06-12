const SkillResolver = {
    getSkills: async (_, args, {dataSources}) => {
        const skills = await dataSources.skillAPI.getAll();
        return (skills);
    },
    addSkill: async (_, args, {dataSources}) => {
        const addSkill = await dataSources.skillAPI.insert(args);
        return (addSkill);
    },
    getSkillsByUser: async ({ _id }, args, {dataSources}) => {
        const result = await dataSources.skillAPI.getByUserId({ _id });
        return (result);
    }
}

module.exports = SkillResolver;