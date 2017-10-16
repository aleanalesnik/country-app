let container = require('./json-file-reader.js');

container.filerReader ('countries.json', function(data) {
    let countries = data;
    
    for (var i = 0; i < countries.length; i++) {
    	var input = process.argv[2]    // input that user gives
    	if (input === countries[i].name) {
    		console.log("Country: " + input + countries[i].topLevelDomain);
    	}
    }
});


