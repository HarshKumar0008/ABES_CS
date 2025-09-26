const sum =(...args) =>{
    console.log(args);
    let arr=[]
    args.forEach(
        (ele) =>{
           if(ele%2==0){
            arr.push(ele)
           }
            
        } 
    )
    return arr
    
}
const output=sum(1,2,3,4,56,7,8,89,90,12)
console.log(output);
