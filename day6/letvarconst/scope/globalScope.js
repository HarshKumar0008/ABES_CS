var a =20;
let b =30 ;
const pi = 3.14;

console.log("global scope");
console.log("value of a global scope",a);
console.log("value of b in global scope",b);
console.log("value of pi in global scope",pi);

function callValues(a,b,pi){
    console.log("global scope");
console.log("value of a inside function",a);
console.log("value of b inside function",b);
console.log("value of pi inside function",pi);

}
callValues(a,b,pi)
