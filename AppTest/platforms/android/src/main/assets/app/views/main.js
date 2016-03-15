var UserViewModel = require("../shared/view-models/main-view-model");

var user = new UserViewModel(null);
var fs = require("file-system");

exports.loaded = function(args){
	var page = args.object;
	page.bindingContext = user;
}

exports.click = function(){
	user.login();
}

exports.read = function(){
	user.ReadFile();
}