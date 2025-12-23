let uk:unknown;

 uk=[1,2,4];

 uk='hello';

 uk=1.24;

 if(typeof uk==='number'){
     uk.toFixed(2);
 }


 function runSomeCode(){
    let rand=Math.random();
    if(rand<0.5){
        throw "some error";
    }else{
        throw new Error('eror instance');
    }
 }

 try{
    runSomeCode();
    
 }catch(error){
    if(error instanceof Error){
        console.log(error.message);
    }else{
        console.log(error);
    }
 }


