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
   else { // '/api/unixtime'
     const iso = url.path.replace("/api/unixtime?iso=","");
     const date = new Date(iso);
     const unixtime_json = JSON.stringify({ unixtime: date.getTime()});
     response.end(unixtime_json.toString());
   }
});

server.listen(port);
