interface Person{
    name:string;
    getDetails():string;
}


interface DogOwner{
    dogName:string;
    getDogDetails():string
}

interface Person{
    age:number;
}
const person:Person={
    name:"John",
    age:30,
    getDetails(){
        return `Name is ${this.name},Age is ${this.age}`
    }
}
interface Employee extends Person{
    empId:number;
}

const employee:Employee={
    name:"Jane",
    age:28,
    empId:12,
    getDetails(){
        return `Name is ${this.name},Age is ${this.age},emp id is ${this.empId}`

    }

   }

 interface Manager extends Person,DogOwner{
    managePeople():void;

 }  

 const manager:Manager={
    name:"Bob",
    age:50,
    dogName:"Rex",
    getDogDetails(){
        return `Dog Name is ${this.dogName}`;

    },

    getDetails(){
        return `Name is ${this.name},Age is ${this.age}`

    },
    managePeople(){
        console.log("manaing people")
    }

 }

manager.managePeople();