const mongoose = require("mongoose");
const schema = mongoose.Schema;

const forumSchema = new schema({
  applicant_email:{type:String,required:true},
  question:{type:String, required:true},
  response:{type:String,default:""}

}
  );
  
  const Forum = mongoose.model('Forum', forumSchema);
  module.exports = Forum ;
