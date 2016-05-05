
exports.loginPageHandler = function(req, res){
	req.session.destroy();
	console.log("Login Page");
	res.render('login.ejs', {});
}

exports.bugzillaPageHandler = function(req, res){
	console.log("bug"+ req.query.bug);
	console.log("bug"+ req.query.product);
	res.render('landingpage.ejs', {bugNumber:req.query.bug,
	product:req.query.product
	
	});
}

exports.productPageHandler = function(req, res){
	var product = req.body.product;
	console.log("received product " + product);


	
	res.render('city.ejs', {product:product
						});
}