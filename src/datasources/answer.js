const { Answer } = require('../models/Answer');

class AnswerAPI {
    constructor() {
    }

    async getAll() {
        let response = await Answer.find({});
        return response;
    }

    async insert(args) {
        let response = await Answer.create(args);
        return response;
    }

    /*async getAllLaunches() {
        const response = await this.get('launches');

        // transform the raw launches to a more friendly
        return Array.isArray(response)
        ? response.map(launch => this.launchReducer(launch)) : [];
    }*/
}

module.exports = AnswerAPI;