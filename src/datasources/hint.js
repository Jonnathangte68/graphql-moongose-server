const { Hint } = require('../models/Hint');

class HintAPI {
    constructor() {
    }

    async getAll() {
        let response = await Hint.find({});
        return response;
    }

    async insert(args) {
        let response = await Hint.create(args);
        return response;
    }

    /*async getAllLaunches() {
        const response = await this.get('launches');

        // transform the raw launches to a more friendly
        return Array.isArray(response)
        ? response.map(launch => this.launchReducer(launch)) : [];
    }*/
}

module.exports = HintAPI;