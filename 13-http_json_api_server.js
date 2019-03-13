/*
Run me with: node <filename> <listening port>
*/

const http = require("http");
const port = Number(process.argv[2]); //first argument

function zeroFill (i) { //function to fix zeros in dates; Example: date.getHours() = 1... zeroFill( date.getHours() ) = 01
  return (i < 10 ? '0' : '') + i
}

var server = http.createServer(function (request, response) {
   if (request.method != 'GET') {
     return response.end('Send a GET request!');
   }

   response.writeHead(200, { 'Content-Type': 'application/json' });

   var url = require("url").parse(request.url, true);

   if (url.pathname === "/api/parsetime")
   {
     const iso = url.path.replace("/api/parsetime?iso=","");
     const date = new Date(iso);
     const parsetime_json = JSON.stringify({ hour: Number(zeroFill(date.getHours())), minute: Number(zeroFill(date.getMinutes())), second: Number(zeroFill(date.getSeconds())) });
     response.end(parsetime_json.toString());
   }
   else if (url.pathname === "/api/unixtime") {
     const iso = url.path.replace("/api/unixtime?iso=","");
     const date = new Date(iso);
     const unixtime_json = JSON.stringify({ unixtime: date.getTime()});
     response.end(unixtime_json.toString());
   }
   else {
     response.end("Send GET request\nTo parse an ISO Date format => http://.../api/parsetime?iso=2019-03-13T17:40Z\nTo get the UNIX timestamp value from an ISO Date format => http://.../api/unixtime?iso=2019-03-13T17:40Z");
   }
});

server.listen(port);
