function processData(input:(string|number),config:{reverse:boolean}={reverse:false}):string|number{
    console.log(config.reverse);

    if(typeof input==='number') return (input*input);
    else return config.reverse
                ?input.split('').reverse().join('').toUpperCase()
                :input.toUpperCase();


}

console.log(processData(100));
console.log(processData('hi,good morning',{reverse:true}));
console.log(processData('hi,good morning'));
