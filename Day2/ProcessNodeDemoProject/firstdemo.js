/*
Node.js provides facility to get process info, like process id, architecture,version,killing the process etc.
*/

console.log(`Process Architecture : ${process.arch}`);
console.log(`Process PID : ${process.pid}`);
console.log(`Process Platform : ${process.platform}`);
console.log(`Process Version : ${process.version}`);

console.log("===============");

process.argv.forEach((value,index,array)=>{
    console.log(`${index} : ${value}`);
})

console.log("==========================")
console.log(`Current Directory : ${process.cwd()}`);
console.log(`Uptime : ${process.uptime}`);
console.log(`memory Usage : ${process.memoryUsage}`);


