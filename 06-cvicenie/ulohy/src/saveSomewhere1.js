 const async = require("async");
 const fs = require("fs");
 module.exports = saveSomewhere;

 function saveSomewhere(paths, data, cb) {
 	path0 = paths[0];
 	path1 = paths[1];
 	path2 = paths[2];

 	// console.log(path0);
 	// console.log(path1);
 	// console.log(path2);

//detect
 	async.tryEach([
 		(cb) => writeFile(path0, data, cb),
 		(cb) => writeFile(path1, data, cb),
 		(cb) => writeFile(path2, data, cb)
 		// (cb) => writeFile(paths, data, cb)
 	],
 	(err, data) => {
 		if (err){
 			return cb(err);
 		}
 		else {
 			return cb(null, data);
 		}
 	});
 }

 function writeFile(path, data, cb){
 // 	paths.forEach(function(path){
 //  		fs.writeFile(path, data, (err) => {
	//  		if (err) return cb(err);
	//  		return cb(null, path);
 // 		});
	// });

 	fs.writeFile(path, data, (err) => {
 		if (err) return cb(err);
 		return cb(null, path);
 	});

 }

