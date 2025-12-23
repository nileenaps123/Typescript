function genArray<T>(length:number,val:T):Array<T>{

    let result:T[]=[];
    result=Array(length).fill(val);

    return result;
}

console.log(genArray<string>(10,'hello'));
console.log(genArray<number>(10,99));
