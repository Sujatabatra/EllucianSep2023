const { argv } = require("process");

console.log(`Child Process ${process.argv[argv.length-1]} executed`);