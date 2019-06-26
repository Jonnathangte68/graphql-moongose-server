const jwt =  require('jsonwebtoken');
const { User: u } = require('../models/User');
const {SECRET_KEY} = require('../../const');


module.exports = function(request) {
    const Authorization = request.get('Authorization');
    if(Authorization){
        const token = Authorization.replace('JWT ','');
        const {id} = jwt.verify(token,SECRET_KEY);
        return u.findById(id);
    }
}