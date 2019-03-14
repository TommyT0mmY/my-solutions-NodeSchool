let buffers = [];
let totalLength = 0;

process.stdin.on("data", (chunk) => {
  buffers.push(chunk);
  totalLength += chunk.length;
});

process.stdin.on("end", () => {
  console.log(Buffer.concat(buffers, totalLength));
});
