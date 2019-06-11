const { User: u } = require('../../models');

class UserAPI {
    constructor() {
    }

    async getAll() {
        let response = await u.find({});
        return response;
    }

    async insert(args) {
        let response = await u.create(args);
        return response;
    }

    /*async getAllLaunches() {
        const response = await this.get('launches');

        // transform the raw launches to a more friendly
        return Array.isArray(response)
        ? response.map(launch => this.launchReducer(launch)) : [];
    }*/
}

module.exports = UserAPI;