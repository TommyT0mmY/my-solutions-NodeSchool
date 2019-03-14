process.stdin.on("data", (buffer) => {
  let uint8array = new Uint8Array(buffer);
  console.log(JSON.stringify(uint8array));
});
