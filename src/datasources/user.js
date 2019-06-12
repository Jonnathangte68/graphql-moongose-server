const { User: u } = require('../../models');

class UserAPI {
    constructor() {}

    async getAll() {
        let response = await u.find({});
        return response;
    }

    async insert(args) {
        let response = await u.create(args);
        return response;
    }

    async getById(args) {
        const userId = args.user;
        let response = await u.findById(userId);
        return response;
    }
}

module.exports = UserAPI;