function print(){
    console.log("Zero Argument Print");
}

function print(a){
    console.log(`a = ${a}`);
}

function print(a,b,c){
    console.log(`a = ${a}`);
    console.log(`b = ${b}`);
    console.log(`c = ${c}`);
}

function print(a,b){
    console.log(`a = ${a}`);
    console.log(`b = ${b}`);
}

function print(a,b,c,d,e){
    console.log(`a = ${a}`);
    console.log(`b = ${b}`);
    console.log(`c = ${c}`);
    console.log(`d = ${d}`);
    console.log(`e = ${e}`);
}

print(10);
console.log("==============");
print(10,20,30);