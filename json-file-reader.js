const fs = require('fs');


function filerReader(fileName, callback) {
    fs.readFile(fileName, function(err, data) {
        if (err) {
        throw err;
        }

    const parsedData = JSON.parse(data);

    callback(parsedData);
	});
}

module.exports = {
	filerReader : filerReader
}


