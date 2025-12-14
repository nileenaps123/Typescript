function processVal<T extends string|number>(val:T):T{
    return val;
}

processVal('hello');
processVal(3);


//Example 2   //


type Car = {
  brand: string;
  model: string;
};

const car: Car = {
  brand: 'ford',
  model: 'mustang',
};

type Product = {
  name: string;
  price: number;
};

const product: Product = {
  name: 'shoes',
  price: 1.99,
};

type Student = {
  name: string;
  age: number;
};

const student: Student = {
  name: 'peter',
  age: 20,
};


function dispName<T extends {name:string}>(input:T):void{

  console.log (input.name);

}

dispName(student);
dispName(product);
//dispName(car);