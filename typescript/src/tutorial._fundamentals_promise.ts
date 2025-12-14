function genericFunction<T>(arg:T):T{
    return arg;
}

const strVal=genericFunction<string>("hello");
const numVal=genericFunction<number>(3);

interface genInterface<T>{
    val:T;
    getVal():T;
}

const genStr:genInterface<string>={
    val:"hello",
    getVal(){
        console.log(this.val);
    }
}

genStr.getVal();

async function someFn():Promise<string>{
    return "hello";
}