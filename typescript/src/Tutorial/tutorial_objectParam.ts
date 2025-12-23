function createEmployee({id}:{id:number}):{id:number,isActive:boolean}{
    return{id,isActive:id%2===0};

}

const emp1=createEmployee({id:1});
const emp2=createEmployee({id:2});

console.log(emp1,emp2);

//alternative

function createStudent(student:{id:number,name:string}):void{

    console.log(`Welcome to the course ${student.name.toUpperCase()}`);

}

const s1={id:1,name:'elsa'};
createStudent(s1);
