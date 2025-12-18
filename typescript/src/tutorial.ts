interface Iperson{
    name:string;
    age:number;
    greet():void
}

class Person implements Iperson{

    constructor(public name:string,public age:number){}
    greet():void{
        console.log(`My name is ${this.name} and age is ${this.age}`)
    }

}

const p=new Person("John",100);
p.greet();