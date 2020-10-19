const express = require("express");
const app = express();
const compression = require("compression");
const logger = require("morgan");
const path = require("path");
const cors = require('cors')
const routes = require("./src/backend/routes/htmlRoutes");
const bodyParser = require("body-parser");
const session = require("express-session");
const dotenv = require("dotenv");
app.use(logger("dev"));
app.use(compression());

dotenv.config({path: "./src/config/config.env"});

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use(cors());

app.use(session({
    secret: "this_remains_a_secret",
    name: "sid",
    resave: false,
    saveUninitialized: false,
    cookie:{
        maxAge: 1000*60*60*2,
        sameSite: true
    }
}));    

app.use("/",routes);  


app.set("port",process.env.PORT || 5000);

app.listen(app.get("port"),() =>{
    console.log("Application running on port ",app.get("port"));
});

module.exports = app;