let userModel = require("../model/userModel.js");
let bcrypt = require("bcryptjs");
let registerControllers = async(req, res)=> {
    let {name, email, password} = req.body;
    let registeredUsers = await userModel.findOne({email});

    if(!registeredUsers){
        return res.json({
            msg: "these users are not registered"
        })
    }
    let salt = bcrypt.genSalt(10);
    let genPassword = bcrypt.hash(password, salt);

    let newUsers = await userModel.create({
        name,
        email, 
        password: genPassword

    })

    newUsers.save()

    res.render("userView", "textUpload",{username: name})




}

let loginController = async(req, res)=> {

    let { email, password} = req.body;
    let loginUsers = await userModel.findOne({email});
    

    

    if(!loginUsers){
        return res.json({
            msg: "the user doesn't exist"
        })
    }

    if(password && await bcrypt.compare(password, loginUsers?.password)){
        return res.json({
            msg: "the user is stored in the database"
        })
    }else{
        throw new Error('Invalid login credentials')
    }
    
   
 

}

let displayLoginPage = async(req, res)=> {
    res.render("userView")
}
module.exports = {
  registerControllers,
  loginController,
  displayLoginPage
}