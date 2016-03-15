var observableModule = require("data/observable");
var fs = require("file-system");

function User(info){
	info = info || {};
	
	var viewModel = new observableModule.Observable(null);
	var documents = fs.knownFolders.documents();
	var myFile = documents.getFile("Test_Write.txt");
		
	viewModel.login = function(){
		var written;
		
		var text = viewModel.get("name");
		
		// Writing text to the file.
		myFile.writeText(text)
			.then(function () {
			viewModel.set("lastName", "Gravado com sucesso!");
			// Succeeded writing to the file.
			// Getting back the contents of the file.
		}, function (error) {
			// Failed to write to the file.
		});
	};
	
	viewModel.ReadFile = function(){
		var myFile2 = documents.getFile("Test_Write.txt");
		myFile2.readText()
			.then(function (content) {
			// Successfully read the file's content.
			viewModel.set("lastName", content);
		}, function (error) {
			// Failed to read from the file.
			alert(error);
		});
	}
	
	return viewModel;
}

module.exports = User;