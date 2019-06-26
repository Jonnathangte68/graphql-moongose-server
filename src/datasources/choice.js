const { Choice } = require('../models/Choice');

class ChoiceAPI {
    constructor() {
    }

    async getAll() {
        let response = await Choice.find({});
        return response;
    }

    async insert(args) {
        let response = await Choice.create(args);
        return response;
    }

    /*async getAllLaunches() {
        const response = await this.get('launches');

        // transform the raw launches to a more friendly
        return Array.isArray(response)
        ? response.map(launch => this.launchReducer(launch)) : [];
    }*/
}

module.exports = ChoiceAPI;