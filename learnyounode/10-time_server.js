const net = require("net");
const port = process.argv[2];

var date = new Date();

function zeroFill (i) {
  return (i < 10 ? '0' : '') + i
}

var date_text = date.getFullYear() + "-" + zeroFill((date.getMonth() + 1)) + "-" + zeroFill(date.getDate()) + " " + zeroFill(date.getHours()) + ":" + zeroFill(date.getMinutes());

var server = net.createServer((socket) => {
  socket.write(date_text.toString() + "\n");
  socket.end();
});

server.listen(port);
