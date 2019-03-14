const http = require('http');
const port = process.argv[2];
const file_path = process.argv[3];
const fs = require("fs");
const readStream = fs.createReadStream(file_path);

var server = http.createServer((request, response) => {
  readStream.on("data", (data) => {
    response.write(data.toString());
    response.end();
  });
});
server.listen(port);
