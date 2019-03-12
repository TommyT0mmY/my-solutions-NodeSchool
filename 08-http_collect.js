const http = require('http');
const url = process.argv[2];

var curr_data = "";
var character_count = 0;

http.get(url,"utf8", (response) => {
  response.on("data", (data) => {
    curr_data += data;
  });
  response.on("end", (data) => {
    console.log(curr_data.toString().length);
    console.log(curr_data.toString());
    curr_data = "";
  });
});
