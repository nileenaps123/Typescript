function processInput(input:string|number){

    if(typeof (input)==='number'){
        console.log(input*2) 

    }else {
        console.log(input.toUpperCase()) 

    }
}

processInput(100);
processInput('hello');


