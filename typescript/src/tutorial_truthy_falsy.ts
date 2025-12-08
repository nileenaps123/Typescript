function printLength (str:string|undefined|null){
    if(str){
        console.log(str.length);
    }else
        console.log('no string provided')
}

printLength(undefined);