var UserViewModel = require("../shared/view-models/main-view-model");

var user = new UserViewModel(null);

exports.loaded = function(args){
	var page = args.object;
	page.bindingContext = user;
}

exports.click = function(){
	user.login();
}