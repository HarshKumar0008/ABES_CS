function isODD(a){
   if(a %2 !==0){
    return true;
   }
   else{
    return false
   }
}
function isODDUsingTernary(a){
    return a%2 ==0 ?"value is odd" :"even";
}
console.log( isODD(3));

console.log(isODDUsingTernary(3));

let funAsExpression = function isODD(){
     return a%2 ==0 ?"value is odd" :"even";
}




//arrow function
const arrowFun =(a) =>{
       return a%2 ==0 ?"value is odd" :"even";
}
console.log(arrowFun(4));

//IIFE FUNCTION  =>immediately invoked function expression
(function IifeFun(){
    console.log("Inside Iife Function");
    
})();
