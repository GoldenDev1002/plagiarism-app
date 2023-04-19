let textModel = require("../model/textModel.js");
let uploadedFileModel = require("../model/uploadedFileModel.js")
let patternModel = require("../model/pattern.js")


// for uploading text via a text box
let uploadedText = async (req, res)=> {
    //let {name, email, textbox} = req.body
    let newData = await textModel.create({
     
        textbox: req.body.textbox,
        title: req.body.title
    })

    newData.save();

    

    res.redirect("/routes")
}



//for uploading text based files in docx or pdf

let uploadedFile = async (req, res)=> {
    //let {name, email, textbox} = req.body
    let uploadedData = await uploadedFileModel.create({
      
    })

    uploadedData.save();

    res.json({
        status: 200,
        message: "data created",
        newData
    })
}



//for displaying all the files

let allFiles = async(req, res)=> {
   textModel.find().sort({createdAt: -1})
   .then((eachFiles)=> {
    res.render("textUpload", {allFiles : eachFiles})
   })
    .catch((err)=> {
        res.send(err)
    })
}


let pattern = async(req, res)=> {
    let newPattern = await patternModel.create({
        pattern: req.body.pattern
    })

    newPattern.save();

    res.json({
        msg: "pattern uploaded successfully",
        pattern
    })
}

let deletedText = async(req, res)=> {
    let textID = req.params.id;
    console.log(textID)
    
    try{
        let deletedText = await textModel.findByIdAndDelete(textID)
        if (!deletedText) {
          return res.status(404).send('Post not found');
        }
        res.send("Post deleted successfully");
    }
   
    catch(err) {
        res.status(500).json(err);
    }

}



module.exports = {
    uploadedText,
    uploadedFile,
    allFiles,
    pattern,
    deletedText
}

