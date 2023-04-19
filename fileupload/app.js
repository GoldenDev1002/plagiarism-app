let express = require("express");
let bodyParser = require("body-parser");
let app = express();
let {notFoundHandler, globalErrHandler} = require("./err/globalErrHandler")
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
app.set("view engine", "ejs");
app.set("views", "view")
let path = require("path");

app.use(express.static(__dirname + '/public'));


//database connections
let dbConnection = require("./db/connection.js");
dbConnection();


//calling the routes 

let routes = require("./routes/routes.js")
let userRoutes = require("./routes/userRoutes.js")
app.use("/routes", routes);
app.use("/users", userRoutes);
app.get('/search/:pattern', async (req, res) => {
  const pattern = req.params.pattern;
  const texts = await Text.find();

  const results = [];

  for (let i = 0; i < texts.length; i++) {
    const text = texts[i].text;
    const indexes = kmp(text, pattern);

    if (indexes.length > 0) {
      results.push({ text, indexes });
    }
  }

  res.json(results);
});



app.use(notFoundHandler);
app.use(globalErrHandler);
module.exports = app



 

