
let car:{brand:string,year:number}={brand:'Toyota',year:2020};

car.brand='mercedes';

//car.color='red'

let car1:{brand:string,year:number}={brand:'ford',year:2022};


let book={title:'book',price:10};
let pen={title:'pen',price:5};

let bottle={title:'bottle'};

let items:{readonly title:string,price?:number}[]=[book,pen,bottle];

//items[0].title='bed';

items[0].price=23;
