const server = require("../src/zip-server");
const client = require("../src/zip-client");

server.server();

client.send('test1.txt');
client.send('cvicenie10.pptx');
client.send('public.png');