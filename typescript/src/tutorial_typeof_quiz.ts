type ValueType = string | number | boolean;

let value: ValueType;
const random = Math.random();
value = random < 0.33 ? 'Hello' : random < 0.66 ? 123.456 : true;

function checkValue (val:ValueType):void{
    if(typeof val==='string'){
        let lower=val.toLowerCase();
        console.log(`Lower case string is ${lower}`);
        return ;
   
    }
    else if(typeof val==='number'){
        let dec=val.toFixed(2);
        console.log(`Decimal formatted number is ${dec}`);
        return ;
    
    }
        console.log(`The boolean val is ${val}`);


}

checkValue(value);
