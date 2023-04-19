let mongoose = require("mongoose");


const fileSchema = new mongoose.Schema({

   name: {
       type: String,
       required: true
   },

   fileUpload: {
    type: Buffer // meaning the images will be converted to binary data to be stored in the  
   }



}, {timestamps: true})



let FileModel = mongoose.model("Files", fileSchema);
module.exports = FileModel;

