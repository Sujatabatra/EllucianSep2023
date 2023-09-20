/*
IIFE in Node.js
1. Before a module code is executed , Node.js will warp it with a function wrapper (IIFE) that provides module scope.
2. This saves us from having worry about conflicting variables and functions
3. There is a proper encapsulation and reusability is unaffected
*/
require("./batman");
require('./superman');

