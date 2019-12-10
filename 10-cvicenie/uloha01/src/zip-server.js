const http = require("http");
const {pipeline } = require("stream");
const { createGzip } = require("zlib");
const fs = require("fs");

module.exports={
	server: function(){
		return server()
	}
};

function server(){
	let serverFiles = `${__dirname}/ServerFiles`;

	let server = http.createServer()
	server.listen(9999, "localhost")
		.on("request", (req, res) => {
			let fileName = req.headers['filename'];
			let file = `${serverFiles}/` + fileName;
			let write = fs.createWriteStream(file);

			pipeline(req, write,(err) => {
				if(err) console.error(err);
				else console.log('File saved!');


			pipeline(req, createGzip(), res, (err) => {
				if (err) console.error(err);
				else console.log('Zipped file has been send :)');
			});
		});
	});
}



