/*
Bonus points: never use toString() and fs.readFileSync()
*/
const fs = require("fs");
const path = process.argv[2];
let index = 0, starting_index = 0;

fs.readFile(path, (err, buffer) => {
  console.error(buffer);
  for (let element of buffer) {
    if (element == 10) //line feed
     {
       console.log(buffer.slice(starting_index, index));
       starting_index = index+1;
     }
    index++;
  }
  console.log(buffer.slice(starting_index, index));
});
