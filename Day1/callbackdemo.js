/*
Synchronous Callback :  A callback which is executed immediately and is blocked callback

Asynchronous Callback : A callback that is often used to ontinue or resume code execution after an asynchronous operation has completed

Callback are used to delay the execution of a function until a particular time or event has occured

In Node.js have an asynchronouse nature to prevent blocking of execution

e.g. reading data from a file, fetching data from database etc.
*/
function greet(name){
    console.log(`Hello ${name}`);
}

function greetSujata(greetFn){
    const name="Sujata Batra";
    greetFn(name);
}

greetSujata(greet);

greetSujata((name)=>{console.log(`hi ${name}`)});

console.log("Bye from current module")

/*
In Javascript, functions are first-class objects.
*/
// const show=()=>{
//     console.log("Hi I am show method");
// }

// console.log(typeof show);

