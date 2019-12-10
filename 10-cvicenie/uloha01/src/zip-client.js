const http = require('http');
const fs = require('fs');
const stream = require("stream");
const { createGunzip } = require("zlib");

module.exports={
	send: function(fileName){
		return send(fileName)
	}
};

function send(fileName){
	let url = "http://localhost:9999";
	// let fileName = process.argv[2];

	let request = http.request(url, {
			method: "POST",
			headers: {
				'filename': fileName
			}
		})
		.on("response", (res) => {
			stream.pipeline(res, write, err => {
	                if (err) {
	                    console.error(err);
	                }
	                else console.log('Zipped file has been saved!');
	            }
	        );
		});


	let input = fs.createReadStream(fileName);
	let write = fs.createWriteStream( `${__dirname}/ClientFiles/` + fileName + '.gz');

	input.pipe(request);
}





