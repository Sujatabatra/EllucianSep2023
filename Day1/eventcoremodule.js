/*
1. Allows us to work with events
2. An event is an action or an occurance that has happened in our application that we can respond to
3. Using even module , we can dispatch our own custom events and respond to those custom event in a non blocking manner
*/

const EventEmitter=require('node:events');

const emitter=new EventEmitter();

emitter.on("order-pizza",()=>{
    console.log("Order received, baking the pizza");
});

console.log("Person Arrives at Pizza Store!");

emitter.emit("order-pizza");