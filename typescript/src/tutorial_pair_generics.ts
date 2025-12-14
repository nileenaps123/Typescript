function pair <T,U>(param1:T,param2:U):[T,U]{

    return [param1,param2];

}

console.log(pair<string,number>('hi',10));