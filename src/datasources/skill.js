const { Skill } = require('../../models');

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

    /*async getAllLaunches() {
        const response = await this.get('launches');

        // transform the raw launches to a more friendly
        return Array.isArray(response)
        ? response.map(launch => this.launchReducer(launch)) : [];
    }*/
}

module.exports = SkillAPI;