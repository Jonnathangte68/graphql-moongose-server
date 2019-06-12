const { Solution } = require('../../models');

class SolutionAPI {
    constructor() {
    }

    async getAll() {
        let response = await Solution.find({});
        return response;
    }

    async insert(args) {
        let response = await Solution.create(args);
        return response;
    }

    /*async getAllLaunches() {
        const response = await this.get('launches');

        // transform the raw launches to a more friendly
        return Array.isArray(response)
        ? response.map(launch => this.launchReducer(launch)) : [];
    }*/
}

module.exports = SolutionAPI;