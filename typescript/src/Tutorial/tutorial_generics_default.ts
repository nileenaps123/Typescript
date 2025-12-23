interface storeData<T=any>{
    data:T[];
}

const numdata:storeData<number>={
    data:[1,2,3]
}

const ranData:storeData={
    data:[1,'he;llo']
}