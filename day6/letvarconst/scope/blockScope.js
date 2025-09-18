 {
    
    var a =20;
let b =30 ;
const pi = 3.14;

console.log("block scope");
console.log("value of a inside  block  scope",a);
console.log("value of b inside block scope",b);
console.log("value of pi inside block scope",pi);}

function callValues(a,b,pi){
    console.log("block scope");
console.log("value of a inside function",a);
console.log("value of b inside function",b);
console.log("value of pi inside function",pi);

}
callValues(a,b,pi)


//var is hoisted but let and const dont 