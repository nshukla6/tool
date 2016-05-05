var express = require('express');
var bodyparser = require('body-parser');
var session = require('express-session');
var mysql=require('mysql');

var app = express();

app.use(express.static(__dirname + "/public"));

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));
var con = mysql.createConnection({
host: "bz3-m-db3.eng.vmware.com",
user: "mts",
password: "mts",
database:"bugzilla"
});

con.connect(function(err){
if(err){
 console.log('Error connecting to Db');
 return;
}
console.log('Connection established');
});


//****** session
app.use(session({secret: "secret",  resave : true,  saveUninitialized : false}));

var routes = require('./routes/routes.js');

app.set('view engine', 'ejs');
//app.engine('handlebars', handlebars({}));

app.get('/', routes.loginPageHandler);
app.get('/toBugzilla', routes.bugzillaPageHandler);
app.post('/toProduct', routes.productPageHandler);

var port = process.env.PORT || 3000;
app.listen(port, function(){
	console.log('HTTP server is listening on port: ' + port);
});