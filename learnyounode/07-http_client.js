const http = require('http');
const url = process.argv[2];

http.get(url,"utf8", (response) => {
  response.on("data", (data) => {
    console.log(data.toString());
  });
});
