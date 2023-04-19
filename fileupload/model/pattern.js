let mongoose = require("mongoose");
let schema = mongoose.Schema;

let patternSchema = new schema({
   pattern: {
       type:String,
       required: true
   }



}, {timestamps: true})

let patternModel = mongoose.model("patternFile", patternSchema);
module.exports = patternModel;

