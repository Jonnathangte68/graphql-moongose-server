const mongoose = require('mongoose');
const { Schema } = mongoose;

const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 10;

const userSchema = new Schema({
  username: String,
  email: String,
  password: String,
  skills: [{ type: Schema.Types.ObjectId, ref: 'Skill' }]
},{'collection':'users','timestamps':true});

userSchema.pre('save',function(next){
  let user = this;
  if(!user.isModified('password')){return next();}
  bcrypt.genSalt(SALT_WORK_FACTOR,function(err,salt){
      if(err) return next(err)
      bcrypt.hash(user.password,salt,async function(err,hash){
          if (err) return next(err);
              user.password =  hash;
          next();
      });
  });
});

userSchema.methods.comparePassword = function (candidate,cb) {
  bcrypt.compare(candidate,this.password,function(err,isMatch){
      cb(err,isMatch)
  })

}

const User = mongoose.model('user', userSchema); 

module.exports = {
  User
};
