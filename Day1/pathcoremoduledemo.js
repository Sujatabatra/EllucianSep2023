/*
path module provides utilities for working with files and directory paths
*/
const path=require("node:path");

console.log(__filename);
console.log(__dirname);

console.log(path.basename(__filename));
console.log(path.basename(__dirname));

console.log(path.extname(__filename));
console.log(path.extname(__dirname));

//parse : convert absolute path to object {root:rootdirectory,dir:dirname,base:filename,ext:fileextension,name:nameoffile}
console.log(path.parse(__filename));

const parseObject=path.parse(__filename);

//format : convert object to absolute path

console.log(path.format(parseObject));

const pathObject={
    root: 'D:\\',
    dir: 'D:\\Ellucian\\Explanation\\Day1',
    base: 'Repl.png',
    ext: '.png',
    name: 'Repl'
  }

  console.log(path.format(pathObject));


  console.log(path.join("folder1","folder2","index.html"));
  console.log(path.join("/folder1","folder2","../index.html"));

  console.log(path.isAbsolute(__filename));
  console.log(path.isAbsolute("./firstdemo.js"));


