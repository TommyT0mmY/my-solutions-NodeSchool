const fs = require("fs");
const path = require('path');
const path_folder = process.argv[2];
const extension_to_filter = process.argv[3];
const module_file = require("module.js");

fs.readdir(path_folder, (err, data) => {
  for (let i = 0; i < data.length; i++)
  {
    let curr_ext = path.extname(data[i]);
    if (curr_ext == ("." + extension_to_filter))
    {
      console.log(data[i]);
    }
  }
  console.log(result)
});
