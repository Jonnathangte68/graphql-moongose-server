const { Video } = require('../models/Video');

class VideoAPI {
    constructor() {
    }

    async getAll() {
        let response = await Video.find({});
        return response;
    }

    async insert(args) {
        let response = await Video.create(args);
        return response;
    }

    /*async getAllLaunches() {
        const response = await this.get('launches');

        // transform the raw launches to a more friendly
        return Array.isArray(response)
        ? response.map(launch => this.launchReducer(launch)) : [];
    }*/
}

module.exports = VideoAPI;