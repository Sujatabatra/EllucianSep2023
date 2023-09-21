const PizzaShop=require("./pizza-shop");
const DrinkMachine=require("./drink-machine");

const pizzaShop=new PizzaShop();
const drinkMachine=new DrinkMachine();

pizzaShop.on("order",(size,topping)=>{
    console.log(`Order received! Baking a ${size} pizza with ${topping}`);
    drinkMachine.serveDrink(size);
});

pizzaShop.order("large","Paneer");
pizzaShop.displayOrderNumber();
console.log("============================");
pizzaShop.order("medium","Mushroom");
pizzaShop.displayOrderNumber();
console.log("============================");
