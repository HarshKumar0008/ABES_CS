console.log("start");
// const syncFun=() =>{

// }
const waitForSomeTime =(ms)=>{
    const start = Date.now();
    console.log(start);
    while(Date.now()-start<ms){

    }
    
}

const syncUsingTimer=()=>{
    waitForSomeTime(4000);
    console.log("wait has been completed");
    
}
const asyncUsingTimer=()=>{
    setTimeout(()=>{
         console.log("inside set time out");
         
        },4000)
        
    }
    asyncUsingTimer
    syncUsingTimer();
    console.log("end");

