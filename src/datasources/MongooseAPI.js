//const { User: u } = require('../../models');

const MongooseAPI = class MongooseAPI {
    constructor() {
        console.log(typeof this);
    }

    someMethod() {
        console.log("Test father!");
    }
}

module.exports = MongooseAPI;