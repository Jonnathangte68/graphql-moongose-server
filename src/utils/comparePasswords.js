const { User: u } = require('../models/User');
const createToken = require('./createToken');

module.exports = (email,password) => {
    return new Promise((resolve,reject) => {
        u.findOne({email:email}).then((user) => {
            if(!user) reject(new Error("User doesn't exist"));
            user.comparePassword(password,(err,isMatch) => {
                if(isMatch){
                    resolve(createToken(user))
                }else{
                   reject(new Error("Password not match"))
                }
            })
        }).catch((err) => { reject(err) })
    });
}