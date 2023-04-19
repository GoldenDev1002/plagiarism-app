let express = require("express");
let Router = express.Router();
let {
    uploadedText,
    uploadedFile,
    allFiles,
    pattern,
    deletedText
} = require("../controller/controllers.js")

//for uploading text to the databse

Router.post("/check_text", uploadedText)

//for uploading documents to the database

Router.post("/check_file", uploadedFile);


// the landing page

Router.get("/", allFiles)

//to upload the pattern being used fo rthe algorithms

Router.post("/pattern", pattern)


//deleting text

Router.delete("/deleteText/:id", deletedText)





module.exports = Router;