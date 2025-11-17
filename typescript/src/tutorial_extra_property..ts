function createStudent(student:{id:number,name:string}):void{

    console.log(`Welcome to the course ${student.name.toUpperCase()}`);

}

const s1={id:1,name:'elsa',email:'elz@mail'};
createStudent(s1);

createStudent({id:2,name:'peter',email:'pete@gmail.com'});// type script complains of an extra property
