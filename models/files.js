const mongoose = require("mongoose");
const schema = mongoose.Schema;

const filesSchema = new schema({
    file : {type:String , required:true},
    file_name : {type:String , required:true},
    service : {type:String , required:true},
    demand_num : {type:String, required:true},
    admin : {type:String, default:""}, 

}
  );
  
  const Files = mongoose.model('Files', filesSchema);
  module.exports = Files ;
