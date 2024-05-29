const mongoose = require("mongoose");
const schema = mongoose.Schema;

const appointSchema = new schema({
    day : {type:String , required:true},
    date : {type:Date , required:true},
    begin : {type:String , required:true},
    end : {type:String , required:true},
    applicant : {type:String , default:''},
    applicant_email:{type:String, default:''},
    app_phone:{type:String,default:''},
    reserved : {type:Boolean , default:false},

  
}
  );
  
  const Appoint = mongoose.model('Appoint', appointSchema);
  module.exports = Appoint ;
