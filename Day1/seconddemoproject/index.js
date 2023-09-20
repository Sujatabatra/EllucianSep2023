const addFn=require("./add");

const sum=addFn.add(20,40);
console.log(`sum =${sum}`);

const diff=addFn.subtract(40,5);
console.log(`Difference = ${diff}`);
console.log('Hello from index file');