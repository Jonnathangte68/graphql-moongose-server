const { Question } = require('../models/Question');

class QuestionAPI {
    constructor() {
    }

    async getAll() {
        let response = await Question.find({});
        return response;
    }

    async insert(args) {
        let response = await Question.create(args);
        return response;
    }

    /*async getAllLaunches() {
        const response = await this.get('launches');

        // transform the raw launches to a more friendly
        return Array.isArray(response)
        ? response.map(launch => this.launchReducer(launch)) : [];
    }*/
}

module.exports = QuestionAPI;