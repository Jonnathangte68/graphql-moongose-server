const { Skill } = require('../models/Skill');

class SkillAPI {
    constructor() {
    }

    async getAll() {
        let response = await Skill.find({});
        return response;
    }

    async insert(args) {
        let response = await Skill.create(args);
        return response;
    }

    async getByUserId(args) {
        const userId = args._id;
        let response = await Skill.find({
            'user': userId
        });
        return response;
    }
}

module.exports = SkillAPI;