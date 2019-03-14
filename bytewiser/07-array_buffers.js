const input_integer = process.argv[2];
let uint32array = new Uint32Array(1);
uint32array[0] = Number(input_integer);
var uint16array = new Uint16Array(uint32array.buffer);

console.log(JSON.stringify(uint16array));
