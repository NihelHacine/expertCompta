const mongoose = require("mongoose");
const schema = mongoose.Schema;

const demandSchema = new schema({
    applicant_email : {type:String , required:true},
    service : {type:String , required:true},
    company : {type:String , required:true},
    tax_number : {type:String , required:true},
    status : {type:String , default:'en cours'},

}
  );
  
  const Demand = mongoose.model('Demand', demandSchema);
  module.exports = Demand ;
