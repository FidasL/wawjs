const fs = require("fs").promises;
const path = require("path")

module.exports = lsRescursive

async function lsRescursive(dirName) {

  let x = await ls(dirName);
  let y = dirsOnly(x);
  y = y.map(({ name }) => name);  //names
  y = y.map(name => path.resolve(dirName, name));
  let files = y.map(ls);
  files = await Promise.all(files);
  files = [].concat(...files);
  files = filesOnly(files);
  files = files.map(({ name }) => name);
  return files;

}

async function ls(dirName) {
  return fs.readdir(dirName, {
    withFileTypes: true
  });
}

function dirsOnly(files) {
  return files.filter((f) => f.isDirectory());
}

function filesOnly(files) {
  return files.filter((f) => f.isFile());
}

