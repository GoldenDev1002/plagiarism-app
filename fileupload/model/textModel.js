 let mongoose = require("mongoose");
 let schema = mongoose.Schema;

 let textSchema = new schema({
    title: {
        type:String,
        required: true
    },

    textbox: {
        type: String,
        required: true
    }



 }, {timestamps: true})

 let textModel = mongoose.model("textFiles", textSchema);
 module.exports = textModel;

