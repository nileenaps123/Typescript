function calcPrice(price:number,discount?:number):number{
    return (price-(discount||0));
}

let priceAfterDisc=calcPrice(100,20);


function calcScore(initialScore:number,penaltyPoints:number=0):number{
    return (initialScore-penaltyPoints);
}

let score=calcScore(100,10);
let score1=calcScore(100)