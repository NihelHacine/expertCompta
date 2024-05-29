const mongoose = require("mongoose");
const schema = mongoose.Schema;

const userSchema = new schema({
    name : {type:String , required:true},
    lastname : {type:String , required:true},
    adress : {type:String , required:true},
    phonenumber : {type:String , required:true},
    email : {type:String , required:true},
    password : {type:String , required:true},
    company: {type:String, required:true},
    tax_number:{type:String, required:true},
    role : {type:String , default:"user" },
    }
  );
  
  const User = mongoose.model('User', userSchema);
  module.exports = User ;
