var express    = require("express");
var app = express();

var flash = require('express-flash');
var cookieParser = require('cookie-parser');
var session = require('express-session');

var validator = require('express-validator');

app.use(cookieParser('keyboard cat'));
app.use(session({ cookie: { maxAge: 60000 }}));
app.use(flash());
app.use(validator());
var bodyParser = require('body-parser');
var UserRoutes = require('./Routes/UserRoutes');

app.set('views', __dirname + '/Views');
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/user',UserRoutes);
app.listen(5000);

console.log("All is well");

