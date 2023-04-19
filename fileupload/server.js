
let http = require("http");
let app = require("./app.js")

let portNo = process.env.PORT || 3200

let server = http.createServer(app)
server.listen(portNo, ()=> {
    console.log(`this app is working on portNo ${portNo}`)
})
