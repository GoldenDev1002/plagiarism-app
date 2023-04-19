let multer = require("multer");

const upload = multer({
   // limits // refers to the limited size of the file, if there is an unlimited size of the file which leads to the file being stored in memory by default rather than being stored in the disk
    //if the file size is unlimited : it leads to denial of service attack
   limits : {
    fileSize : 10 * 1024 * 1024 // 10MB
}
})

module.exports.upload = upload;

