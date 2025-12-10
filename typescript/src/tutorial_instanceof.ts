function checkInput (input:Date|string):string{
    if(input instanceof Date){
        return input.getFullYear().toString();

    }
    return input;

}

console.log(checkInput(new Date('2027-10-20')));