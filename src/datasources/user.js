const { User: u } = require('../models/User');
const createToken  = require('../utils/createToken');
const comparePasswords  = require('../utils/comparePasswords');

class UserAPI {
    constructor() {}

    async getAll() {
        let response = await u.find({});
        return response;
    }

    async insert(args) {
        let response = await u.create(args);
        let token = createToken(response);
        return {token};
    }

    async login(args){
        return await comparePasswords(args.email,args.password)
            .then((token) => {return {token}})
            .catch((err) => { throw err });
    }

    async getById(args) {
        const userId = args.user;
        let response = await u.findById(userId);
        return response;
    }
}

module.exports = UserAPI;