const { ContentType } = require('../models/ContentType');

class ContentTypeAPI {
    constructor() {
    }

    async getAll() {
        let response = await ContentType.find({});
        return response;
    }

    async insert(args) {
        let response = await ContentType.create(args);
        return response;
    }

    /*async getAllLaunches() {
        const response = await this.get('launches');

        // transform the raw launches to a more friendly
        return Array.isArray(response)
        ? response.map(launch => this.launchReducer(launch)) : [];
    }*/
}

module.exports = ContentTypeAPI;