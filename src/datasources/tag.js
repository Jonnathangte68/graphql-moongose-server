const { Tag } = require('../models/Tag');

class TagAPI {
    constructor() {
    }

    async getAll() {
        let response = await Tag.find({});
        return response;
    }

    async insert(args) {
        let response = await Tag.create(args);
        return response;
    }

    /*async getAllLaunches() {
        const response = await this.get('launches');

        // transform the raw launches to a more friendly
        return Array.isArray(response)
        ? response.map(launch => this.launchReducer(launch)) : [];
    }*/
}

module.exports = TagAPI;