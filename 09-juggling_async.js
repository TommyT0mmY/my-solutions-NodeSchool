const http = require('http');
const urls = [process.argv[2], process.argv[3], process.argv[4]];

var curr_data = "";

urls.forEach((url) => {
  var ended = false;
  while(!ended) {
    http.get(url,"utf8", (response) => {
      response.on("data", (data) => {
        curr_data += data;
      });
      response.on("end", (data) => {
        console.log(curr_data.toString());
        curr_data = "";
        return ended = true;
      });
    });
  }
});
