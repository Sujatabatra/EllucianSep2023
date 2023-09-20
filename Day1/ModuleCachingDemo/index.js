const SuperHero = require("./super-hero");

const batman=new SuperHero("Batman");
console.log(batman.getName());
batman.setName("SuperMan");
console.log(batman.getName());

const batman2=new SuperHero("Batman");
console.log(batman2.getName());


/*
const superHero=require('./super-hero);

console.log(superHero.getName());
superHero.setName("Superman");
console.log(superHero.getName());

const newSuperHero=require('./super-hero');
console.log(newSuperHero.getName());

*/