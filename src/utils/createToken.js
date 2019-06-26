const jwt =  require('jsonwebtoken')
const {SECRET_KEY} =  require('../../const');

module.exports = async (user) =>{
    const  payload = {
        id:user._id,
        email:user.email,
        name:user.username
    }
    let token  = await jwt.sign(payload,SECRET_KEY);
    
    return token;
}