const bytes = process.argv;
bytes.shift();
bytes.shift();

var buffer = Buffer.from(bytes)
console.log(buffer.toString('hex'))
