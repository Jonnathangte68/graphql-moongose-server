const { Passage } = require('../../models');

class PassageAPI {
    constructor() {
    }

    async getAll() {
        let response = await Passage.find({});
        return response;
    }

    async insert(args) {
        let response = await Passage.create(args);
        return response;
    }

    /*async getAllLaunches() {
        const response = await this.get('launches');

        // transform the raw launches to a more friendly
        return Array.isArray(response)
        ? response.map(launch => this.launchReducer(launch)) : [];
    }*/
}

module.exports = PassageAPI;