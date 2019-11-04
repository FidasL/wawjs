module.exports = writeTempFile;

const fs = require("fs");
const os = require("os");
const path = require("path");
const async = require("async");

function writeTempFile(fileName, ...args /* data, options, callback*/ ) {
  let cb = args.pop();
  console.log("CB: " + cb)
  const tempDir = path.join(os.tmpdir(), `${process.pid}-`);

  async.waterfall([
    () => {
      fs.mkdtemp(tempDir, (err, folder) => {

      });
    },
    () => {
      fs.writeFile(tempFile, ...args, (err) => {

      });
    }
  ], cb);
}